import Content from "@/lib/models/Content.model";
import { NextResponse } from "next/server"

export const GET = async (req, {params}) => {

    const id = (await params).content_id;
    console.log("content id is " + id)

    const contentData = await Content.find({contentId : id});
    
    return NextResponse.json({
        message : "youtube single content api....",
        contentData
    })
}
