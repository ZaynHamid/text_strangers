import connectDB from "@/lib/connectDB"
import Message from "@/models/texts"


async function create(formData) {
  'use server'
  await connectDB();
  await Message.create({
    message: formData.get("message"),
  });
}

const getData = async () => {
  const res = await fetch('https://text-strangers.vercel.app/api/messages')
  const data = await res.json()
  return data
}

const TextBox = async () => {    
  await connectDB()

  const data = await getData()



  return (
    <>
      <div className='flex items-center gap-4'>
        <form action={create} >
            <input type="text" name="message" className='text-black px-4 py-1 outline-none rounded-xl' placeholder='Message'/>
            <input type="submit" value={'Submit'} className='border-2 mx-4 px-4 rounded-xl hover:bg-white cursor-pointer hover:text-black'/>
     
        </form>
    
    </div>
    {data.mesasage.map((val, i) => (
        <p  key={i}>{val.message}</p>
      ))}
    </>
  
  )
}

export default TextBox