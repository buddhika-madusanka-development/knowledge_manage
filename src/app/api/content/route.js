import { dbConnect } from "@/lib/db"
import Content from "@/lib/models/Content.model";
import { NextResponse } from "next/server"


// content GET api end point =========================
export const GET = async () => {

    try{

        // database connection
        await dbConnect();

        // access data from database
        const contentData = await Content.find({});

        // check content availability
        if(contentData.length == 0) {
            return NextResponse.json({
                message : "Still there is no valid contetnts.. "
            }, {status : 400})
        }

        return NextResponse.json(contentData, {status : 200});
        
    }
    catch(err){
        return NextResponse.json({
            message : `Something went wrong.. ${err}`
        })
    }

    
}



// content POST api end point =========================
export const POST = async (req) => {

    // extrack data 
    const contentDetails = await req.json();

    try{

        // create database connection
        await dbConnect();

        // check data already exists
        const contentAvailability = await Content.find({contentLink : contentDetails?.contentLink});
    
        if(contentAvailability.length != 0) {
            return NextResponse.json({
                message : "This content already exists.."
            }, {status : 404})
        }
        
        //check required data availability
        if(!(contentDetails?.contentId && contentDetails?.contentTitle && contentDetails?.contentLink && contentDetails?.Tags)) {
            return NextResponse.json({
                message : "Please provide all required data..."
            })
        }

        // insert datainto database
        const newContetnt = await Content.create(contentDetails);

        return NextResponse.json(newContetnt, {status : 201})

        
    }
    catch(err){
        return NextResponse.json({
            message : `Something went wrong.. ${err}`
        })
    }
    
}



// content PATCH api end point =========================
export const PATCH = async (req) => {

    // extrack data from the request
    const contentDetails = await req.json();

    // check required data availability
    if(!(contentDetails?.contentId && contentDetails?.contentTitle || contentDetails?.contentLink || contentDetails?.Tags)){
        return NextResponse.json({
            message : "Please provide all the required data..."
        })
    }

    try{

        // create database connection
        await dbConnect();

        // check data availability
        const contentAvailability = await Content.find({contentId : contentDetails?.contentId});

        if(contentAvailability.length == 0) {
            return NextResponse.json({
                message : "There is no valid content..."
            })
        } 

        // database changes
        let newContent = null;

        if(contentDetails?.contentTitle && contentDetails?.contentLink && contentDetails?.Tags && contentDetails?.contentAdditionalNotes){
            newContent = await Content.updateOne({
                contentId : contentDetails?.contentId}, {$set : { 
                    contentTitle : contentDetails?.contentTitle, 
                    contentLink : contentDetails?.contentLink, 
                    contentAdditionalNotes : contentDetails?.contentAdditionalNotes ,
                    Tags : contentDetails?.Tags
            }})
        }
        else if(contentDetails?.contentTitle){
            newContent = await Content.updateOne({contentId : contentDetails?.contentId} , {$set : {contentTitle : contentDetails?.contentTitle}})
        } 
        else if(contentDetails?.contentLink){
            newContent = await Content.updateOne({contentId : contentDetails?.contentId} , {$set : {contentLink : contentDetails?.contentLink}})
        }
        else if(contentDetails?.contentAdditionalNotes) {
            newContent = await Content.updateOne({contentId : contentDetails?.contentId} , {$set : {contentAdditionalNotes : contentDetails?.contentAdditionalNotes}})
        }
        else {
            newContent = await Content.updateOne({contentId : contentDetails?.contentId} , {$set : {Tags : contentDetails?.Tags}})
        }

        const updatedContent = await Content.find({contentId : contentDetails?.contentId});
        
        return NextResponse.json(updatedContent, {status : 201})
        
    }
    catch(err) {
        return NextResponse.json({
            message : `Something went wrong... ${err}`
        })
    }
   
}



// Content DELETE api endpoint =====================
export const DELETE = async (req) => {

    // extract data from the database
    const contentDetail = await req.json();

    try{

        // create databaes conneecition
        await dbConnect();

        // check required data availability
        if(!contentDetail?.contentId){
            return NextResponse.json({
                message : "Please provide required data..."
            }, {status : 404})
        }

        // check data availability 
        const contentCheck = await Content.find({contentId : contentDetail?.contentId});

        if(contentCheck.length == 0 ){
            return NextResponse.json({
                message : "There is no valid data from this id....."
            })
        }

        // delete content
        const processStatus = await Content.deleteOne({contentId : contentDetail?.contentId});

        if(processStatus) {
            return NextResponse.json({
                message : "Content succesfully removed..."
            }, {status : 200})
        }

        return NextResponse.json({
            message : "Somehthing went wrong while data removing process.."
        })
        
    }
    catch(err){
        return NextResponse.json({
            message : `Something went wrong... ${err}`
        })
    }
    
}