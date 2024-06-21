import mongoose from 'mongoose'


export default async () => {
    try{
    await mongoose.connect(process.env.DATABASE_URL)
    console.log('Connection success!')
    }
    catch(err) {
        console.log(err)
    }
}