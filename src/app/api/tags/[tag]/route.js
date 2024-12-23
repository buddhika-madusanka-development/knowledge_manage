import { dbConnect } from "@/lib/db";
import Content from "@/lib/models/Content.model";
import { NextResponse } from "next/server"

export const GET = async (req, {params}) => {

    // extrac data from request
    const tag = (await params).tag;
    console.log(tag);
    
    if(!tag) {
        return NextResponse.json({
            message : "Please provide tag to access data..."
        }, {status : 500})
    }

    try{

        // create database connectoin
        await dbConnect();

        // access data from database
        const tagContent = await Content.find({Tags : {$all : [tag]}}).limit(5);

        return NextResponse.json(tagContent, {status : 200});
        
    }
    catch(err){
        return NextResponse.json(`Something went wrong... ${err}`);
    }
    
}