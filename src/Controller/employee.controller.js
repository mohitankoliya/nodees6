import category from '../Model/category.schema';
import constant  from '../constant/text.constant';

const categoryController = async (req, res) => {
    try {

        const ifExist = await category.findOne({category: req.body.category})

        if(!ifExist){
            return res.json({code: constant.http_codes.ok, data: ifExist})
        } else {
            return res.json({code: constant.http_codes.ok, message: constant.messages.emailAlreadyRegistered})
        }
        
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
}

export default categoryController;