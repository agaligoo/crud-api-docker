import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities';
import { IsNull, Not, Repository } from 'typeorm';
import { Gender } from './types';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  //สร้างuser
  async create(createUserDto: CreateUserDto):Promise<string> {
     const user = this.userRepository.create({
      first_name:createUserDto.first_name,
      last_name:createUserDto.last_name,
      age:createUserDto.age,
      gender:Gender[createUserDto.gender],

      create_at:new Date(),
      updated_at:new Date()
    })
    await this.userRepository.save(user);
    return 'สร้างข้อมูล ผู้ป่วยเสร็จแล้ว';
  }

   async findAll():Promise<User[]> {
    const users = await this.userRepository.find({
      where:{
        deleted_at:IsNull()
      },
    })
    return users;
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where:{
        id:id,
        deleted_at:IsNull()
      },
    })
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(
      {
        id:id
      },
      {
        ...updateUserDto,
        gender:updateUserDto.gender ? Gender[updateUserDto.gender]:undefined,
        updated_at:new Date()
      }
    )
    return {id:id}
  }

  async remove(id: number) {
    await this.userRepository.update(
      {
        id:id
      },
      {
        deleted_at:new Date
      }
      )
    return `This action removes a #${id} user`;
  }
}
