import Cryptr from "cryptr"
import bcrypt from "bcrypt"
import { v4 as uuidv4 } from "uuid"
import { findUserByEmail, addUser } from "../../userModel.ts"
import { generateWebToken } from "../../generateToken"

import { userService } from "../user/user.service.mjs"
import { logger } from "../../services/logger.service.mjs"

// const cryptr = new Cryptr(process.env.SECRET1 || "Secret-Puk-1234")

export async function loginUser(email: string, password: string) {
    logger.debug(`auth.service - login with username: ${email} ${password}`)
    const user = await findUserByEmail(email)

    if (!user) return Promise.reject("Invalid credentials")
    const match = await bcrypt.compare(password, user.password)
    if (!match) return Promise.reject("Invalid username or password")
        return generateWebToken(user.id)
}

export async function registerUser(email: string, password: string) {
    const saltRounds = 10
    logger.info(`auth.service - signup with email: ${email} ${password}`)
    logger.debug(`auth.service - signup with email: ${email}`)
    const existingUser = findUserByEmail(email)
    if (existingUser) return Promise.reject("User already exists")

    const hashedPassword = await bcrypt.hash(password, saltRounds)
    const newUser = { id: uuidv4(), email, password: hashedPassword }
    addUser(newUser)

    return generateWebToken(newUser.id)
}
// if (!username || !password) return Promise.reject('Missing required signup information')


// function getLoginToken(user) {
//     const userInfo = { _id: user._id, isAdmin: user.isAdmin }
//     return cryptr.encrypt(JSON.stringify(userInfo))
// }

// function validateToken(loginToken) {
//     try {
//         const json = cryptr.decrypt(loginToken)
//         const loggedinUser = JSON.parse(json)
//         return loggedinUser

//     } catch (err) {
//         console.log('Invalid login token')
//     }
//     return null
// }

// ;(async ()=>{
//     await signup('bubu', '123', 'Bubu Bi')
//     await signup('mumu', '123', 'Mumu Maha')
// })()
