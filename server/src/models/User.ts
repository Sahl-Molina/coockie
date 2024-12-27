import bcrypt from 'bcrypt'
import mysql from 'mysql2'
import { Column, Entity } from 'typeorm'

@Entity()
export class UserModel{

    @Column()
    user_id

    @Column()
    email_address: String

    @Column()
    first_name: String

    @Column()
    last_name: String


}