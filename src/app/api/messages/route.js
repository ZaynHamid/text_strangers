import connectDB from "@/lib/connectDB";
import Message from "@/models/texts";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await connectDB()
    console.log("Successfully Connected!")
    const mesasages = await Message.find()
    return NextResponse.json({'mesasage': mesasages})
    } catch(err) {
    return NextResponse.json({'mesasage': 'Could not retrieve data'})
    }
    
}


export async function POST(req) {
    const data = await req.json()
    try {
     await connectDB()  
    
    const result = await Message.create(data)
    return NextResponse.json({'mesasage': 'Data sent!', 'data': result}, {status: 201})
    }catch(err) {
        return NextResponse.json({'mesasage': 'Something went wrong, es tut mir lied!'})
        }
   
}
