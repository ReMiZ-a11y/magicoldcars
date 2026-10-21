import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prismaDB";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      orderId,
      status,
      totalPrice,
      userId,
      userEmail,
      productQuantity,
      orderTitle,
      country,
      city,
      postalCode,
      line1,
      line2,
      products,
    } = body;

    // Basic validation
    if (
      !orderId ||
      !status ||
      !userEmail ||
      !productQuantity ||
      !country ||
      !city ||
      !products
    ) {
      return NextResponse.json(
        { success: false, message: "Brak wymaganych pól" },
        { status: 400 }
      );
    }

    const order = await prisma.order.create({
      data: {
        orderId,
        status,
        totalPrice,
        userId,
        userEmail,
        productQuantity,
        orderTitle,
        country,
        city,
        postalCode,
        line1,
        line2,
        products,
      },
    });

    return NextResponse.json(
      { success: true, message: "Zamówienie zostało pomyślnie utworzone", order },
      { status: 201 }
    );
  } catch (error: any) {
    console.log(error?.stack || error,'Błąd podczas tworzenia zamówienia')
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}