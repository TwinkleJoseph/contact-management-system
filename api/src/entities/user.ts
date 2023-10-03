import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn} from 'typeorm'

@Entity({name: 'users'})
export class User {

    @PrimaryGeneratedColumn('uuid',{name: 'id'})
    id: string;

    @Column({ length: 40, name: 'name',nullable: false })
    name: string;

    @Column({ length: 40, name: 'user_name',nullable: true, default: null })
    username: string;

    @Column({ length: 40, name: 'email',nullable: true, default: null })
    email: string;

    @Column({ length: 40, name: 'phone',nullable: true, default: null })
    phone: string;

    @Column({ length: 40, name: 'website',nullable: true, default: null })
    website: string;
    

}