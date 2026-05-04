"use client";

import { useFormContext } from "react-hook-form";
import { useStore } from "@/src/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FormInput, FormLabel} from "@/src/shared/components/forms";
import FormErrors from "@/src/shared/components/forms/FormErrors";
import { CheckoutInput } from "../../auth/schemas/authSchema";
import { chileRegions } from "@/src/data/chile";
import FormSearchSelect from "@/src/shared/components/forms/FormSearchSelect";
import { formatRUT} from "@/src/utils/formatRUT";

export default function CheckoutDetailsForm() {
  const {
    register,
    watch,
    setValue,
    formState: { errors, isValid, isDirty },
  } = useFormContext<CheckoutInput>();

  const cart = useStore((state) => state.cart);
  const router = useRouter();

  const selectedRegion = watch("region");
  const rutField = register("rut");

  const communes =
    chileRegions.find((r) => r.code === selectedRegion)?.communes ?? [];

  const communeOptions = communes.map((c) => ({
    label: c,
    value: c,
  }));

  console.log({
    isValid,
    isDirty,
    errors,
    values: watch(),
  });

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/cart");
    }
  }, [cart, router]);

  return (
    <div className="space-y-6 bg-white rounded-md shadow-md p-5">
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-black">Contacto</h3>
        {/* RECEPTOR */}
        <div className="space-y-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <FormLabel>Nombre</FormLabel>
              <FormInput {...register("receiverName")} />
              {errors.receiverName && (
                <FormErrors>{errors.receiverName.message}</FormErrors>
              )}
            </div>

            <div>
              <FormLabel>Apellido</FormLabel>
              <FormInput {...register("receiverLastName")} />
              {errors.receiverLastName && (
                <FormErrors>{errors.receiverLastName.message}</FormErrors>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* RUT */}
            <div>
              <FormLabel>RUT</FormLabel>
              <FormInput
                maxLength={10}
                {...rutField}
                onChange={(e) => {
                  const clean = e.target.value
                    .toLowerCase()
                    .replace(/[^0-9k]/g, "")
                    .slice(0, 9);

                  const formatted = formatRUT(clean);

                  setValue("rut", formatted, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }}
              />
              {errors.rut && <FormErrors>{errors.rut.message}</FormErrors>}
            </div>

            {/* EMAIL */}
            <div>
              <FormLabel>Email</FormLabel>
              <FormInput {...register("email")} />
              {errors.email && <FormErrors>{errors.email.message}</FormErrors>}
            </div>

            {/* TELÉFONO */}
            <div>
              <FormLabel>Teléfono</FormLabel>
              <FormInput {...register("phone")} />
              {errors.phone && <FormErrors>{errors.phone.message}</FormErrors>}
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-black/10 pt-4" />

      {/* DIRECCIÓN */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-black">Dirección de envío</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* REGIÓN */}
          <div>
            <FormLabel>Región</FormLabel>

            <FormSearchSelect
              options={chileRegions.map((r) => ({
                label: r.name,
                value: r.code,
              }))}
              value={watch("region")}
              onChange={(val) =>
                setValue("region", val, {
                  shouldValidate: true,
                  shouldDirty: true,
                })
              }
              placeholder="Selecciona una región"
            />

            {errors.region && <FormErrors>{errors.region.message}</FormErrors>}
          </div>

          {/* COMUNA */}
          <div>
            <FormLabel>Comuna</FormLabel>

            <FormSearchSelect
              options={communeOptions}
              value={watch("commune")}
              onChange={(val) =>
                setValue("commune", val, {
                  shouldValidate: true,
                  shouldDirty: true,
                })
              }
              placeholder="Selecciona una comuna"
              disabled={!selectedRegion}
            />

            {errors.commune && <FormErrors>{errors.commune.message}</FormErrors>}
          </div>
        </div>

        {/* CALLE / NÚMERO */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <FormLabel>Calle</FormLabel>
            <FormInput {...register("street")} />
            {errors.street && <FormErrors>{errors.street.message}</FormErrors>}
          </div>

          <div>
            <FormLabel>Número</FormLabel>
            <FormInput {...register("number")} />
            {errors.number && <FormErrors>{errors.number.message}</FormErrors>}
          </div>
        </div>

        {/* APARTAMENTO */}
        <div>
          <FormLabel>Depto / Oficina</FormLabel>
          <FormInput {...register("apartment")} />
        </div>
      </div>
    </div>
  );
}
