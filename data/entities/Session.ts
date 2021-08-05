import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {User} from "./User";

@Entity('Sessions', {schema: 'dbo'})
export class Session {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varbinary", {length: 1000})
    sessionid: Buffer;

    // relations

    @ManyToOne(() => User, user => user.sessions)
    user: User;
}