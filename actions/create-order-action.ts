"use server";

import { OrderSchema } from "@/src/features/auth/schemas/authSchema";
import { prisma } from "@/src/lib/prisma";

export async function createOrder(data: unknown) {
  const result = OrderSchema.safeParse(data);

  if (!result.success) {
    console.log("ZOD ERROR:", result.error.format());
    return {
      errors: result.error.issues,
    };
  }

  try {
    const {
      items,
      email,
      phone,
      receiverName,
      receiverLastName,
      rut,

      region,
      commune,
      street,
      number,
      apartment,

      status,
    } = result.data;

    const productIds = items.map((item) => item.productId);

    const products = await prisma.product.findMany({
      where: {
        id: { in: productIds },
      },
    });

    const productMap = new Map(products.map((p) => [p.id, p]));

    let calculatedSubtotal = 0;

    for (const item of items) {
      const product = productMap.get(item.productId);

      if (!product) {
        return {
          errors: [{ message: "Producto inválido" }],
        };
      }

      const price = product.discountPrice ?? product.price;
      calculatedSubtotal += price * item.quantity;
    }

    const calculatedTotal = calculatedSubtotal;

    await prisma.order.create({
      data: {
        email,
        phone,
        receiverName,
        receiverLastName,
        rut,

        region,
        commune,
        street,
        number,
        apartment,

        subtotal: calculatedSubtotal,
        total: calculatedTotal,
        status,

        items: {
          create: items.map((item) => {
            const product = productMap.get(item.productId)!;
            const price = product.discountPrice ?? product.price;

            return {
              productId: product.id,
              name: product.name,
              image: product.image,

              price,
              discountPrice: product.discountPrice,

              quantity: item.quantity,
            };
          }),
        },
      },
    });

    return { success: true };
  } catch (error) {
    console.error("CREATE ORDER ERROR:", error);
    return {
      errors: [{ message: "Error al crear la orden" }],
    };
  }
}