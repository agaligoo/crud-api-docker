import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';
import { GenderDto } from '../types';

export class UpdateUserDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()  
    first_name?:string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()  
    last_name?:string;

    @IsOptional()
    @IsNotEmpty()
    @IsInt()
    @Min(0)
    age?:number;

    @IsOptional()
    @IsNotEmpty()
    @IsEnum(GenderDto)
    @IsString()
    gender?:GenderDto;
}
