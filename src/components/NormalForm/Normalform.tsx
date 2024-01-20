import { FieldValues, useForm, FormProvider } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, TNormalForm } from "./Validation";
import InputField from "./InputField";

const Normalform = () => {
  const methods = useForm<TNormalForm>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = methods;
  const double = true;
  console.log(watch("name"));

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn("border border-gray-300 shadow-sm mt-4 mx-auto p-5", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
      >
        <div
          className={cn(" grid grid-cols-1 justify-items-center gap-5", {
            "md:grid-cols-2": double,
          })}
        >
          <div className="w-full max-w-md">
            {/* <label className=" block text-xl mb-1" htmlFor="name">
              Name
            </label>
            <input className="" type="text" id="name" {...register("name")} /> */}
            <InputField />
          </div>
          <div className="w-full max-w-md ">
            <label className=" block text-xl mb-1" htmlFor="email">
              Eamil
            </label>
            <input
              className="w-full rounded-sm "
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500"> Email is required</span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label className=" block text-xl mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="w-full rounded-sm "
              type="text"
              id="password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label className=" block text-xl mb-1" htmlFor="password">
              District
            </label>
            <select>
              <option value="select">Select</option>
              <option value="one">One</option>
              <option value="one">Two</option>
              <option value="one">Three</option>
              <option value="one">Four</option>
            </select>
          </div>
          {/* <div className="w-full max-w-md">
          <label className=" block text-xl mb-1" htmlFor="password">
          Send Message
          </label>
          <textarea></textarea>
        </div> */}
        </div>
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
      </form>
    </FormProvider>
  );
};

export default Normalform;
