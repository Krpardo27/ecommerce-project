import { InputHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

const FormInput = forwardRef<HTMLInputElement, Props>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={clsx(
          "w-full rounded-xl px-4 py-3 text-sm transition",
          "bg-white text-black placeholder:text-black/40",
          "border border-black/20",
          "focus:outline-none focus:border-[#DB4444] focus:ring-2 focus:ring-[#DB4444]/20",
          error && "border-red-500 focus:border-red-500 focus:ring-red-200",
          props.disabled && "bg-black/5 text-black/40 cursor-not-allowed",
          className
        )}
      />
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;