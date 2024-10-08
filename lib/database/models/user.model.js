import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    clerkId: {
        type: String,
        unique: [true, 'ClerkId already exists!'],
        required: [true, 'ClerkId is required!'],
      },
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
    }
})

const User = models?.User || model("User", UserSchema);

export default User;