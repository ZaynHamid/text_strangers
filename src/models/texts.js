import mongoose from "mongoose";

const textSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
})

const Message = mongoose.models && mongoose.models.Message || mongoose.model("Message", textSchema);

export default Message;
