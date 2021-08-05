import crypto from 'crypto'
import {createConnection} from "typeorm";

class UsersService
{
    generateSessionID()
    {
        // 16 bytes is likely to be more than enough,
        // but you may tweak it to your needs
        return crypto.randomBytes(16).toString('base64')
    }

    async createUser()
    {
        const connection = await createConnection()
        //connection.c
    }
}