import connectDB from "@/lib/connectDB"
import Message from "@/models/texts"

const Users =  async () => {
    await connectDB()
    const data = await Message.find() 
  return (
    <div>  {data.map((val, i) => (
        <p key={i}>{val.message}</p>
      ))}</div>
  )
}

export default Users