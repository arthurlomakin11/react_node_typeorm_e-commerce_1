import { Product } from '../data/entities/Product'
import { createConnection } from 'typeorm'
import 'reflect-metadata'
import express from 'express'
import cookieParser from 'cookie-parser'
import CookieService from './CookieService'
import settings from "./settings";
import {Session} from "../data/entities/Session";
import {User} from "../data/entities/User";
const app = express()

app.use(cookieParser(settings.pass))

app.get("/api/products", async (req, res) => {
    try
    {
        createConnection().then(async connection => {
            const Products = connection.getRepository(Product)

            const products = await Products.createQueryBuilder("product").getMany()

            res.json(products)

            await  connection.close()
        });
    }
    catch
    {
        res.status(500)
    }
})

app.get("/api/cookies/create", async (req, res) => {
    const newsessionid = CookieService.generateSessionID()
    const ExpireDate = CookieService.generateCookieExpireDate();
    const connection = await createConnection()
    try
    {
        const Users = connection.getRepository(User)
        const Sessions = connection.getRepository(Session)
        const NewSession = await Sessions.create()
        NewSession.sessionid = Buffer.from(newsessionid)

        const NewUser = new User;
        NewUser.firstName = 'name';
        NewUser.lastName = 'name';
        NewUser.age = 0;
        await Users.save(NewUser)

        NewSession.user = NewUser
        await Sessions.save(NewSession)
    }
    catch(e)
    {
        //res.status(500)
        console.log(e)
    }
    finally
    {
        await connection.close()
    }

    res.cookie("sessionid", newsessionid, { httpOnly: true, sameSite: "strict", signed: true, secure: true, expires: ExpireDate})
    res.sendStatus(201) // 201 - created
})

app.get("/api/cookies/isAuth", async (req, res) => {
    const sessionid = req.signedCookies.sessionid;
    const connection = await createConnection()
    try
    {
        const Sessions = connection.getRepository(Session);
        const FoundSession = await Sessions.createQueryBuilder("session")
            .leftJoinAndSelect("session.user", "user")
            .where("session.sessionid = :sessionid", { sessionid: Buffer.from(sessionid) })
            .getOne();
        console.log(FoundSession?.user.firstName)
        res.send(!FoundSession ? "no!": "yeeeeeeeees!!!");
    }
    catch(e)
    {
        res.send("no!")
        console.log(e)
    }
    finally
    {
        await connection.close()
    }
})

app.listen(settings.port, () => {
    console.log(`Server listening on ${settings.port}`)
})