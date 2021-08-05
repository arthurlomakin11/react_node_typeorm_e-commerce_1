import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Session} from "./Session";

@Entity('Users', {schema: 'dbo'})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sdifsd: string;

    @Column()
    adfsad: string

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    // relations

    @OneToMany(() => Session, session => session.sessionid, { cascade: true })
    sessions: Array<Session>;
}