import crypto from 'crypto'

const generateSessionID = () =>
{
    return crypto.randomBytes(333).toString('utf-8')
}

const generateCookieExpireDate = () =>
{
    const ExpireDate = new Date()

    ExpireDate.setFullYear(ExpireDate.getFullYear() + 2)

    return ExpireDate
}

export default {generateSessionID, generateCookieExpireDate}