import jwt from 'jsonwebtoken'
const { sign } = jwt;

const GenerateToken = (data, secret) => {
    let obj = {
        email: data.email
    }
    return jwt.sign(obj, secret, { expiresIn: '720hr' })
}

export default GenerateToken;