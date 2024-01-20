import { useFormContext } from "react-hook-form";

const InputField = () => {
  const { register, watch } = useFormContext();
  console.log(watch("wali"));

  return (
    <div>
      <input type="text" {...register("wali")} />
    </div>
  );
};

export default InputField;
