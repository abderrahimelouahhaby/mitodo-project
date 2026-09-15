import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/require-auth";
import prisma from "@/lib/prisma";

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: RouteContext) {
  const session = await requireAuth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { user } = session;
  const { id } = await params;

  const body = await request.json();
  const { title, content }: { title?: string; content?: string } = body ?? {};

  const data: { title?: string; content?: string } = {};
  if (typeof title === "string") data.title = title;
  if (typeof content === "string") data.content = content;

  try {
    const note = await prisma.note.update({
      where: { id, userId: user.id },
      data,
    });
    return NextResponse.json(note);
  } catch {
    return NextResponse.json({ error: "Note not found" }, { status: 404 });
  }
}

export async function DELETE(_request: Request, { params }: RouteContext) {
  const session = await requireAuth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { user } = session;
  const { id } = await params;

  try {
    await prisma.note.delete({
      where: { id, userId: user.id },
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Note not found" }, { status: 404 });
  }
}