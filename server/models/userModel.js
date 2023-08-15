import mongoose from 'mongoose';

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        min: 4,
        max: 10,
        unique: true
    },
    email:{
        type: String,
        required: true,
        max: 20,
        unique: true
    },
    password:{
        type: String,
        required: true,
        min: 6
    },
})

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;