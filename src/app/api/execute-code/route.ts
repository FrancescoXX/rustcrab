"use server";
import axios, { AxiosError } from "axios";

export async function POST(req: Request) {
  const { data } = await req.json();
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const res = await axios.post("https://api.jdoodle.com/v1/execute", data, {
      headers,
    });
    if (res.status === 200) {
      return Response.json(res.data, { status: 200 });
    }
  } catch (error) {
    return Response.json({ error: error as AxiosError }, { status: 500 });
  }
}
