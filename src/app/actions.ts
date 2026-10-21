import { prisma } from "@/lib/prismaDB";

export async function validateCoupon(code: string) {
  try {

    if (!code) {
      return {
        success: false,
        message: "Kod kuponu jest wymagany",
      };
    }

    const coupon = await prisma.coupon.findFirst({
      where: {
        code: code,
      }
    });

    if (!coupon) {
      return {
        success: false,
        message: "Kod nie został znaleziony",
      };
    }

    if (coupon.timesRedemed >= coupon.maxRedemptions) {
      return {
        success: false,
        message: "Zbyt wiele razy uzyto kodu",
      };
    }

    return {
      success: true,
      data: {
        discount: coupon.discount,
        code: coupon.code,
      },
    }
  } catch (error: any) {
    console.log("Błąd podczas walidacji kuponu:", error?.stack || error);
    return {
      success: false,
      message: "Błąd podczas walidacji kuponu:",
    };
  }
}