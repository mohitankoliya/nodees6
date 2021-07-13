import mongoose from 'mongoose';
import constant from '../constant/text.constant';
const { Schema } = mongoose;

var CategorySchema = new Schema({
    category: {
        type: String
    },
    subcategory: [{
        name: { type: String },
    }]
})

export default mongoose.model(constant.schemas.category, CategorySchema);