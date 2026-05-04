"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckoutSummary from "./CheckoutSummary";
import { CheckoutInput, CheckoutSchema } from "../../auth/schemas/authSchema";
import { Form } from "@/src/shared/components/forms";
import CheckoutDetailsForm from "./CheckoutDetailsForm";
import { useStore } from "@/src/store";
import { createOrder } from "@/actions/create-order-action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function CheckoutContainer() {
  const methods = useForm<CheckoutInput>({
    resolver: zodResolver(CheckoutSchema),
    mode: "onChange",
  });

  const router = useRouter();

  const clearCart = useStore((state) => state.clearCart)

  const onSubmit = async (formData: CheckoutInput) => {
    const cart = useStore.getState().cart;

    const subtotal = cart.reduce((acc, item) => {
      const price = item.discountPrice ?? item.price;
      return acc + price * item.quantity;
    }, 0);

    const payload = {
      ...formData,
      items: cart.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      })),
      subtotal,          
      total: subtotal, 
    };


    const response = await createOrder(payload);

    if (response?.errors) {
      response.errors.forEach((e) => toast.error(e.message));
      return;
    }

    clearCart()
    toast.success("Pedido realizado correctamente");
    router.push("/order/success");
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-10 ">
          <CheckoutDetailsForm />
          <CheckoutSummary />
        </div>
      </Form>
    </FormProvider>
  );
}
