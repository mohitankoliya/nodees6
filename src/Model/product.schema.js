import mongoose from 'mongoose'
import constant from '../constant/text.constant'
const { Schema } = mongoose;

var Category = new Schema({
    tag_id: {
        type: String
    },
    product_name: {
        type: String
    },
    product_detail: {
        type: String
    },
    price: {
        type: Number
    },
    images: [{
        type: String
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: constant.schemas.category
    }
})

export default mongoose.model(constant.schemas.product, Category);