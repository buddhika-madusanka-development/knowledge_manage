import { dbConnect } from "@/lib/db"
import RoadMap from "@/lib/models/RoadMap.model";
import { NextResponse } from "next/server";

// roadmap GET API endpoint ==============================
export const GET = async () => {
    
    try{

        // create database connection
        await dbConnect();

        // find data from the database
        const roadMaps = await RoadMap.find({});

        // check roadmaps are available or not
        if(roadMaps.length == 0) {
            return NextResponse.json({
                message : "Still there is no any roadmap details.."
            },
            {status : 400})
        }

        return NextResponse.json(roadMaps, {status : 200})
        
    }
    catch(err) {
        return NextResponse.json({
            message : `Something went wrong : ${err}`
        })
    }
    
}



// channel POST API endpoint ==============================
export const POST = async (req) => {

    const roadMapData = await req.json();

    // check reuired datais available or not 
    if(!(roadMapData?.roadMapId && roadMapData?.roadMapName && roadMapData?.roadMapSourceLink)) {
        return NextResponse.json({
            message : "Please provide all required data to save data..."
        })
    }

    try{

        // create database connection
        await dbConnect();

        const roadMapCheck = await RoadMap.find({roadMapSourceLink : roadMapData?.roadMapSourceLink});

        if(roadMapCheck.length != 0) {
            return NextResponse.json({
                message : "Roadmap already exists.."
            })
        }
        
        // create and insert data into database
        const newRoadMap = await RoadMap.create(roadMapData);
    
        if(newRoadMap) {
            return NextResponse.json(newRoadMap, {status : 201})
        }
        else{
            return NextResponse.json({
                message : "Something went wrong while data saving. Try again..."
            }, {status : 500})
        }

    }
    catch(err){
        return NextResponse.json({
            message : `Something went wrong ${err}`
        })
    }
    
}


// channel PATCH API endpoint ==============================
export const PATCH = async (req) => {

    // access request body to extract data
    const roadMapPatchData = await req.json();

    console.log(roadMapPatchData);
    
    // check required data available or not
    if(!(roadMapPatchData?.roadMapId && roadMapPatchData?.roadMapName || roadMapPatchData?.roadMapSourceLink)){
        return NextResponse.json({
            message : "Please provide required data to update process..."
        })
    }

    try{

        // create database connection
        await dbConnect();

        // check roadmas is available or not
        const roadMapTest = await RoadMap.findOne({roadMapId : roadMapPatchData?.roadMapId});

        if(!roadMapTest){
            return NextResponse.json({
                message : "There isn't any roadmap details from this id."
            })
        }

        let newRoadMap = null;

        // check what are the attributes are have to change
        if(roadMapPatchData?.roadMapName && roadMapPatchData?.roadMapSourceLink) {

            // change values
             newRoadMap = await RoadMap.updateOne({roadMapId : roadMapPatchData?.roadMapId}, {$set : {roadMapName : roadMapPatchData?.roadMapName, roadMapSourceLink : roadMapPatchData?.roadMapSourceLink}});

        }
        else if(roadMapPatchData?.roadMapName) {

            // change valuess
             newRoadMap = await RoadMap.updateOne({roadMapId : roadMapPatchData?.roadMapId}, {$set : {roadMapName : roadMapPatchData?.roadMapName}})
            
        }
        else{
            // change valuess
             newRoadMap = await RoadMap.updateOne({roadMapId : roadMapPatchData?.roadMapId}, {$set : {roadMapSourceLink : roadMapPatchData?.roadMapSourceLink}})

        }

        const changedRoadMap = await RoadMap.findOne({roadMapId : roadMapPatchData?.roadMapId});
        
        return NextResponse.json(changedRoadMap, {status : 201});

    }
    catch(err){
        return NextResponse.json({
            message : `Something went wrong... ${err}`
        })
    }
}



// channel DELETE API endpoint ==============================
export const DELETE = async (req) => {

    const roadMapDetails =  await req.json();

    // check required data availability
    if(!roadMapDetails?.roadMapId) {
        return NextResponse.json({
            message : "Please provide required data to complete process.."
        })
    }

    try{
        // check roadmap data already exist or not
        const roadMapTest = await getRoadMap(roadMapDetails?.roadMapId);

        // haven't any valid document 
        if(roadMapTest.length == 0) {
            return NextResponse.json({
                message : "There is no valid roadmap for this id.."
            })
        }

        // create database connection
        await dbConnect();

        // remove data from database
        const roadMapDeletion = await RoadMap.deleteOne({roadMapId : roadMapDetails?.roadMapId});
        
        if(!roadMapDeletion) {
            return NextResponse.json({
                message : "Someting went wrong while data deletion..."
            })
        }

        return NextResponse.json({
            message : "Successfully data removed.."
        })
        

    }
    catch(err) {
        return NextResponse.json({
            message : `Something went wrong... ${err}`
        })
    }
    
}




// function for return data ==================
const getRoadMap = async (roadMap_Id) => {

    try{

        // create database connection
        await dbConnect();

        // serach data
        const roadMaps =  await RoadMap.find({roadMapId : roadMap_Id})

        return roadMaps;
        
    }
    catch(err){
        console.log(`somthing went wrong... ${err}`)
    }
    
}