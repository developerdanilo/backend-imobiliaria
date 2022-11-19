import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text', length: 300})
    name: string

    @Column({type: 'text', length: 100})
    email: string

    @Column({type: 'text', length: 30})
    password: string
}