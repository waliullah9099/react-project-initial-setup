export const Input = ({ register, label, errors, type }) => {
  return (
    <div className="w-full max-w-md ">
      <label className=" block text-xl mb-1" htmlFor="email">
        {label}
      </label>
      <input
        className="w-full rounded-sm "
        type={type}
        id="email"
        {...register}
      />
      {errors.email && <span className="text-red-500"> Email is required</span>}
    </div>
  );
};
