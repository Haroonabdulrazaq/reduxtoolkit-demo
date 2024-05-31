import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DevTool } from "@hookform/devtools";

export const YupYouTubeForm = () => {
    type FormValues = {
    username: string;
    email: string;
    channel: string;
  }

  const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Email format is not valid").required("Email is required"),
    channel: yup.string().required("Channel is required")
  });
  const form = useForm<FormValues>({
    defaultValues: {
      username: '',
      email:'',
      channel: ''
    },
    mode: "all",
    resolver: yupResolver(validationSchema)
  });
  const {handleSubmit, formState, register } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log('Form Submitted', data);
  }
  return (
    <div>
      <h1>Yup YouTube Form</h1>

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