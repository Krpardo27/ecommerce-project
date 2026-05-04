import { FormHTMLAttributes } from "react";
import clsx from "clsx";

type Props = FormHTMLAttributes<HTMLFormElement>;

export default function Form(props: Props) {
  const { children, className } = props;

  return (
    <form
      {...props}
      className={clsx(
        "w-full",
        "flex flex-col",
        "p-3 md:p-6",
        "space-y-6",
        "transition-all duration-200",
        className
      )}
    >
      {children}
    </form>
  );
}
