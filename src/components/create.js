// /lib/createMessage.js
import connectDB from "@/lib/connectDB";
import Message from "@/models/texts";

export async function createMessage(formData) {
  await connectDB();
  await Message.create({
    message: formData.get("message"),
  });
}
