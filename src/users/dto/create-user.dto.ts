import { IsEnum, IsInt, IsNotEmpty, IsString, Min } from "class-validator";
import { Gender, GenderDto } from "../types";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()  
    first_name:string;

    @IsNotEmpty()
    @IsString()  
    last_name:string;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    age:number;

    @IsNotEmpty()
    @IsEnum(GenderDto)
    @IsString()
    gender:GenderDto;
}
