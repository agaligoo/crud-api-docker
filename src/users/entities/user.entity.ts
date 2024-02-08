import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Gender } from "../types";



@Entity({
    name: "user",
})
export class User {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;

    @Column({ name: "first_name", type: "varchar", nullable: true, default: null })
    first_name: string;

    @Column({ name: "last_name", type: "varchar", nullable: true, default: null })
    last_name: string;

    @Column({ name: "age", type: "int", nullable: true, default: null })
    age: number;

    @Column({ name: "gender", type: "int", nullable: true, default: null })
    gender: Gender;

    @Column({ name: "create_at", type: "datetime", nullable: true, default: null })
    create_at: Date;
    
    @Column({ name: "updated_at", type: "datetime", nullable: true, default: null })
    updated_at: Date;

    @Column({ name: "deleted_at", type: "datetime", nullable: true, default: null })
    deleted_at: Date;
}