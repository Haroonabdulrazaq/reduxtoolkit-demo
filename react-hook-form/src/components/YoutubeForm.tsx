import { useEffect } from 'react';
import { useForm, useFieldArray, FieldErrors } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string,
    facebook: string
  },
  phoneNumbers: string[],
  phNumbers: {
    number: string
  }[],
  age: number,
  dob: Date
};

export const YouTubeForm = () => {

  const form = useForm<FormValues>({
    defaultValues: {
      username: '',
      email: '',
      channel: '',
      social: {
        twitter: '',
        facebook: ''
      },
      phoneNumbers: ["1234345542", "679434345542"],
      phNumbers: [{number: ''}],
      age: 0,
      dob: new Date(), // Date Tue May 28 2024 15:42:20 GMT+0100
    }
  });

  const { register, control, handleSubmit, formState, watch, getValues, setValue } = form;

  const { errors, dirtyFields, touchedFields, isDirty } = formState;
  console.log('dirtyFields', dirtyFields);
  console.log('touchedFields', touchedFields);
  console.log('isDirty', isDirty);
  // const watchUsername = watch();

 const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control 
  })

  const handleGetValues = () =>{
    console.log('GetValues', getValues("social.facebook"));
  }
  const handleSetValues = () =>{
    setValue("social.facebook", "new value", {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true
    });
  }
  const onSubmit = (data: FormValues) => {
    console.log(data);
  }

  const onError = (errors: FieldErrors<FormValues>) =>{
    console.log(errors);
  }

  useEffect(()=>{
    const subscribe = watch((value)=> {
      console.log("value", value);
    });
    return ()=> subscribe.unsubscribe();
  }, [])

  return (
    <div>
      <h1>YouTube Form </h1>
      {/* <h3>Watched Value {JSON.stringify(watchUsername)}</h3> */}

      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div className='form-control'>    
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username", {
            required: "Username is required",
          })} />
          <p className='error'>{errors.username?.message}</p>
        </div>
        <div className='form-control'>         
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" {...register("email", {
            pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email format"
            }, validate: {
              notAdmin: (fieldValue) => {
                return ( fieldValue !== 'admin@example.com' || 'Enter a different email address')
              },
              notBlacklisted: (fieldValue) => {
                return ( !fieldValue.endsWith('@baddomain.com') || 'This domain is not supported!')
              }
            }
          })} />
          <p className='error'>{errors.email?.message}</p>
        </div> 
        <div className='form-control'>
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel", {
            required: "Channel is required",
          })} />
          <p className='error'>{errors.channel?.message}</p>
        </div>
        <div className='form-control'>
          <label htmlFor="twitter">Twitter</label>
          <input type="text" id="twitter" {...register("social.twitter", {
            disabled: Boolean(watch("channel") === ''),
            required: {
              value: true,
              message: "Twitter is required mdfka" 
            }
          })} />
          <p className='error'>{errors.social?.twitter?.message}</p>
        </div>
        <div className='form-control'>
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebook" {...register("social.facebook", {
            required: {
             value: true,
              message: "Facebook is required mdfka"
            }
          })} />
          <p className='error'>{errors.social?.facebook?.message}</p>
        </div>
        <div className='form-control'>
          <label htmlFor="primary-phone">Primary phone number</label>
          <input type="text" id="primary-phone" {...register("phoneNumbers.0", {
            required: "Primary phone number is required",
          })} />
          <p className='error'> {errors?.phoneNumbers?.["0"]?.message}</p>
        </div>
        <div className='form-control'>
          <label htmlFor="secondary-phone">Secondary phone number</label>
          <input type="text" id="secondary-phone" {...register("phoneNumbers.1", {
            required: "Secondary phone number is required",
          })} />
          <p className='error'> {errors?.phoneNumbers?.["1"]?.message}</p>
        </div>
        <div>
          <label htmlFor="">List of phone numbers</label>
          <div>
              {fields.map((field, index) => (
                  <div className='form-control' key={field.id}>
                    <input type="text" {...register(`phNumbers.${index}.number` as const )} />
                    {index > 0 && <button type='button' onClick={()=> remove(index) }>Remove</button>}
                  </div>
                ))}
                <button type='button' onClick={()=> append({number: ""})}>+Add phone number</button>
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor="age">Age</label>
          <input type="text" id="age" {...register("age", {
            valueAsNumber: true,
            required: "Age is required",
          })} />
          <p className='error'>{errors.age?.message}</p>
        </div>
        <div className='form-control'>
          <label htmlFor="dob">DOB</label>
          <input type="date" id="dob" {...register("dob", {
            valueAsDate: true,
            required: "Dob is required",
          })} />
          <p className='error'>{errors.dob?.message}</p>
        </div>  
        <button>Submit</button>
        <button type='button' onClick={handleGetValues}>Get Value</button>
        <button type='button' onClick={handleSetValues}>Set Value</button>
      </form>
      <DevTool control={control}/>
    </div>
  );
};
