import { dbConnect } from "@/lib/db";
import Content from "@/lib/models/Content.model";
import { NextResponse } from "next/server"

export const GET = async (req, {params}) => {

    const id = (await params).content_id;

    try{

        // create database connection
        await dbConnect()

        // extrack data from database
        const contentData = await Content.findOne({contentId : id});
        
        return NextResponse.json( contentData , {status : 200})
    }
    catch(err) {
        return NextResponse.json({
            message : `Something went wrong : ${err}`
        },
        {
            status : 500
        })
    }


    
}
