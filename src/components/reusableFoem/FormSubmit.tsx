import { useContext } from "react";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { FormElementContext } from ".";

export const FormSubmit = () => {
  const { double } = useContext(FormElementContext);
  return (
    <div>
      <div
        className={cn(" grid grid-cols-1 justify-items-center gap-5 my-6 ", {
          "md:grid-cols-2": double,
        })}
      >
        <div className=" w-full max-w-md md:col-start-2 flex md:justify-end">
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
