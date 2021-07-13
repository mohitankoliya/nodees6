import mongoose from 'mongoose';
import constant from '../constant/text.constant';
const { Schema } = mongoose;

var userSchema = new Schema({
    email: {
        type: mongoose.Schema.Types.ObjectId,
        ref: constant.schemas.students
    },
    password: {
        type: String
    }
})

export default mongoose.model(constant.schemas.users, userSchema);