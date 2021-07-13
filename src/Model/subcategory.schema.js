import mongoose from 'mongoose';
import constant from '../constant/text.constant';
const { Schema } = mongoose;

var subcategorySchema = new Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId
    },
    subcategory: {
        type: String
    }
})

export default mongoose.model(constant.schemas.category, subcategorySchema);