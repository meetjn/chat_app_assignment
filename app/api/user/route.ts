import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export async function POST(req: NextRequest) {
    // Extract the body

    // axios.get("http://localhost:3000/signup")

    const body = await req.json();

    try{
        await client.user.create({
            data: {
                username: body.username,
                password: body.password
            }
        })
    
        //store the body in the database
    
        return Response.json({
            message: "You are logged in"
        })
    }
    catch (e) {
        NextResponse.json({
            message: "Error while signing up",
        }, {
            status: 411
        })
    }
}