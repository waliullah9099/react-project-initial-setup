import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

type TRef = HTMLButtonElement;
type TVarient = "solid" | "ghost" | "outline";
type TButtonOptions = {
  varient?: TVarient;
};
type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;

const Button = forwardRef<TRef, TButton>(
  ({ className, varient = "solid", ...rest }, ref) => {
    const getVarient = (varient: TVarient) => {
      switch (varient) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";

        default:
          return "btn-solid";
      }
    };
    return (
      <div>
        <button
          {...rest}
          ref={ref}
          className={cn(getVarient(varient), className)}
        >
          Click
        </button>
      </div>
    );
  }
);

export default Button;
