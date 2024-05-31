import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DevTool } from "@hookform/devtools";

export const ZodYouTubeForm = () => {
    type FormValues = {
    username: string;
    email: string;
    channel: string;
  }

  const validationSchema = z.object({
    username: z.string().nonempty("Username is required"),
    email: z.string().nonempty("Email is required").email("Email format is not valid"),
    channel: z.string().nonempty("Channel is required")
  });

  const form = useForm<FormValues>({
    defaultValues: {
      username: '',
      email:'',
      channel: ''
    },
    mode: "all",
    resolver: zodResolver(validationSchema)
  });
  const {handleSubmit, formState, register } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log('Form Submitted', data);
  }
  return (
    <div>
      <h1>Zod YouTube Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username", {
            required: "Username is required",
          })} />
          <p className="error">{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email format"
            }
          })} />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel", {
            required: "Channel is required",
          })} />
          <p className="error">{errors.channel?.message}</p>
        </div>

        <button>Submit</button>
      </form>
      <DevTool control={form.control} />
    </div>
  );
};