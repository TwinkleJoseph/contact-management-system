import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn} from 'typeorm'

@Entity({name: 'user'})
export class User {

    @PrimaryGeneratedColumn('uuid',{name: 'id'})
    id: string;

    @Column({ length: 40, name: 'name',nullable: false })
    name: string;

    @Column({ length: 40, name: 'user_name',nullable: true, default: null })
    userName: string;

    @Column({ length: 40, name: 'email',nullable: true, default: null })
    email: string;

    @Column({ length: 40, name: 'phone' })
    phone: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_datetime' })
    createdDateTime : Timestamp

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_datetime' })
    updatedDateTime : Timestamp

}