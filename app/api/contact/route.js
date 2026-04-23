import connectDB from "@/lib/db";
import Enquiry from "@/app/models/Enquiry";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();
        const data = await req.json();
        const { name, email, subject, phone, message } = data;


        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }
        if (!phone && !email) {
            return NextResponse.json({ error: 'Phone or email is required' }, { status: 400 });
        }

        const newEnquiry = await Enquiry.create({ name, email, phone, subject, message });

        return NextResponse.json({ success: true, message: 'Enquiry created successfully' }, { status: 201 });

    } catch (error) {
        console.error("Error in contact route:", error);
        return NextResponse.json({ error: error.message || 'Failed to create enquiry' }, { status: 500 });
    }
}