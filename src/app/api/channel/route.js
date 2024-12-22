import { dbConnect } from "@/lib/db"
import Channel from "@/lib/models/Channels.model";
import { NextResponse } from "next/server"


// channel GET API endpoint ==============================
export const GET = async () => {

   try{
    // create connectoin with database
    await dbConnect();

    //access data from the database
    const channelData = await Channel.find({});
    
    // check chanel details are available
    if(channelData.length == 0) {
        return NextResponse.json({
            message : "There is no any channels.."
        })
    }

    // return channel data
    return NextResponse.json(channelData, {
        status : 200
    })

   }
   catch(err) {
    return NextResponse.json({
        messge : `Something went wrong ${err}` 
    },
    {
        status : 500
    })
   }
}



// channel POST API endpoint ==============================
export const POST = async (req) => {

    // access body data
    const data = await req.json();
    
    // check all the reuired body data is available or not
    if( !(data?.channelId && data?.channelName && data?.channelLink)){
        return NextResponse.json({
             message : "there are no required attribute to add data into database"
        })
    }

    // all reqired data is avaiable
    try{

        // create database connectoin
        await dbConnect();

        // check channel is already exists or not
        const checkData = await Channel.find({ channelLink : data?.channelLink });
        
        if(checkData.length != 0 ){
            return NextResponse.json({
                message : "Channel data already exists...."
            })
        }

        // add data into database
        const newChannel = await Channel.create(data);
        
        if(newChannel) {
            return NextResponse.json( newChannel, {status : 201})
        }
        else{
            return NextResponse.json({
                message : "Something went wrong please try again..."
            })
        }

    }
    catch(err){
        return NextResponse.json({
            messaeg : `Something went wrong... ${err}` 
        })
    }
    
}