import { logger } from "../../services/logger.service.mjs"
import { Request, Response } from "express"
import { registerUser, loginUser } from "./auth.service"

export async function signup(req: Request, res: Response) {
    const { email, password } = req.body
    try {
        const token = await registerUser(email, password)
        res.status(201).json({ message: "User created", token })
        logger.debug(
            `auth.route - new account created: ` + JSON.stringify(email)
        )
    } catch (error) {
        res.status(400).json({ message: error.message })
        console.log(error)
    }
    // //     logger.info('User signup:', user)
    // //     const loginToken = authService.getLoginToken(user)
    // //     res.cookie('loginToken', loginToken, { sameSite: 'None', secure: true })
    // //     res.json(user)
    // // } catch (err) {
    // //     logger.error('Failed to signup ' + err)
    // //     res.status(400).send({ err: 'Failed to signup' })
    // }
}

export async function login(req: Request, res: Response) {
    const { email, password } = req.body
    try {
        const token = await loginUser(email, password)
        logger.info("User login: ", token)
        res.status(201).json({ message: "Login successful", token })
    } catch (error) {
        logger.error("Failed to Login " + error)
        res.status(401).json({ message: error.message })
    }
}

// export async function logout(req, res) {
//     try {
//         res.clearCookie('loginToken')
//         res.send({ msg: 'Logged out successfully' })
//     } catch (err) {
//         res.status(400).send({ err: 'Failed to logout' })
//     }
// }
