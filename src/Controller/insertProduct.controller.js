import product from '../Schema/product.schema';
import FileUpload from '../common/FileUpload.common'

const inProductController = async (req, res) => {

    try {

        const {name, description, price, images, category} = req.body

        if(name && description && price && images && category){
            const tag_id = await product.find().sort({_id: -1}).limit(1)
            if(tag_id[0] !== ''){
                var tagNumber = tag_id[0].tag_id + 1
            } else {
                var tagNumber = 1
            }

            const call_FileUpload = await FileUpload(req, res)

            const inproducts = {
                tag_id: tagNumber,
                name: name,
                product_detail: description,
                price: price,
                images: req.newFile_name[0],
                category: category
            }

            const in_product = product(inproducts)
            const successOrnot = await in_product.save()

            return res.json({code: 200, message: 'product insert successfully'})
        } else {
            return res.json({code: 505, message: 'fill all detail'})
        }

        

    } catch (error) {
        console.log(error)
        return res.json(error)
    }
}

export default inProductController;