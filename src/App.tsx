import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/reusableFoem";
import Container from "./components/ui/Container";
import { z } from "zod";

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TTest>();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  type TTest = z.infer<typeof TestSchema>;

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <div className="w-full max-w-md ">
            <label className=" block text-xl mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-sm "
              type="name"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm"> Name is required</span>
            )}
          </div>
          <Input
            register={register("email")}
            errors={errors}
            label={"Email"}
            type={"email"}
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </Container>
  );
}

export default App;
