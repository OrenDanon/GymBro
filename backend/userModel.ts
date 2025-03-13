interface User {
    id: string
    email: string
    password: string
}

const users: User[] = []

export function findUserByEmail(email:string): User | undefined {
    return users.find(user => user.email === email)
}

export function addUser(user: User): void  {
    users.push(user)
}