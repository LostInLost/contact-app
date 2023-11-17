import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/_lib/prismaConnect";
import { Prisma } from "@prisma/client"
export async function POST(req: Request) {
    const data = await req.json()
    let user: Prisma.ContactCreateInput
    async function main() {
        prisma.contact.create({
            data: {
                fullname: data.fullname,
                email: data.email,
                message: data.message
            }
        })
    }
    main()
    return Response.json({
        success: true,
        data: data
    }, {
        status: 200
    })
}