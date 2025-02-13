import jwt from 'jsonwebtoken'

let secretKey = "usersecret"

export const createToken = (user)=>{
    const jwtToken =jwt.sign({user},secretKey,{expiresIn:'24h'})
    return jwtToken
}