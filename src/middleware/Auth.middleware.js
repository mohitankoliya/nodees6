import jwt from 'jsonwebtoken';
const { decode, verify } = jwt
import constant from '../constant/text.constant';

const Auth_Token = async (req, res, next) => {
    try {
        let Auth = req.headers['authorization']

        verify(Auth, process.env.SECRET, (err, decoded) => { 
            if (err) { 
                return res.send({ code: constant.http_codes.unAuthorized, message: constant.messages.invalidToken }) 
            } else {
                req.decodedToken = decoded
                next()
            } 
        })
        
    } catch (error) {
        return res.send({ code: constant.http_codes.unAuthorized, message: constant.messages.invalidToken })
    }
}

export default Auth_Token;