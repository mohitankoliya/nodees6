import mongoose from 'mongoose';
import constant from '../constant/text.constant';
const { Schema } = mongoose;

var studentsSchema = new Schema({
    name: {
        type: String
    },
    rollNo: {
        type: Number
    },
    email: {
        type: String,
        ref: constant.schemas.users
    },
    password: {
        type: String
    }
})

export default mongoose.model(constant.schemas.students, studentsSchema);