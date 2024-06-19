import mongoose from 'mongoose'


export default async () => {
    try{
    const DB_OPTIONS = {
        dbName: process.env.DBNAME,
        authSource: process.env.DBAUTHSOURCE
    }
    await mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS)
    console.log('Connection success!')
    }
    catch(err) {
        console.log(err)
    }
}