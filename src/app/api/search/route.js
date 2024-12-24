import { dbConnect } from "@/lib/db";
import Content from "@/lib/models/Content.model";
import { NextResponse } from "next/server";

export const GET = async (req) => {

  try{

    const url = new URL((await req).url);
    const query = url.searchParams.get("query");

    await dbConnect();

    const data = await Content.find({$text: {$search: query , $caseSensitive: false}});

    if(data.length == 0) {
      return NextResponse.json({
        message : "There is no valid data related to search.."
      }, {status : 404});
    }
    
    return NextResponse.json(data, {status : 200});
  }
  catch(err){
    return NextResponse.json({message: `Something went wrong ${err}`});
  }

};
