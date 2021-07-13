// import user from '../Schema/user.schema';
// import constant  from '../constant/text.constant';
// import CreateToken from '../common/CreateToken.common';
// import bcrypt from 'bcrypt';

// const loginController = async (req, res) => {
//     try {
//         const { email } = req.body
//         const ifEmail = await user.findOne({email: email})

//         if(ifEmail){
//             const match = await bcrypt.compare(req.body.password, ifEmail.password);
//             if(match){
//                 const token = await CreateToken(match, process.env.SECRET)
//                 const _data = {
//                     ...ifEmail._doc,
//                     token: token
//                 }
//                 delete _data.password;
//                 return res.json({code: constant.http_codes.ok, data: _data})
//             } else {
//                 return res.json({code: constant.http_codes.ok, message: constant.messages.invalidEmailPass})
//             }
//         } else {
//             return res.json({code: constant.http_codes.ok, message: constant.messages.invalidEmailPass})
//         }

//     } catch (error) {
//         return res.json(error)
//     }
// }

// export default loginController;