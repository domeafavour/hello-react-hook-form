import React from 'react';
import { useForm, Controller } from 'react-hook-form';

export function LoginForm() {
  const { register, formState, handleSubmit, control } = useForm<{
    email: string;
    password: string;
    remember: boolean;
  }>({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  return (
    <form
      onSubmit={handleSubmit((values) => {
        console.log('formState', formState);
        console.log('values', values);
      })}
    >
      <div>
        <label htmlFor="email">Email</label>
        <input {...register('email')} id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input {...register('password')} type="password" id="password" />
      </div>
      <div>
        <label htmlFor="remember">Remember</label>
        <Controller
          name="remember"
          control={control}
          render={(props) => {
            return (
              <input
                // {...props.field}
                ref={props.field.ref}
                name={props.field.name}
                checked={props.field.value}
                onChange={props.field.onChange}
                onBlur={props.field.onBlur}
                disabled={props.field.disabled}
                type="checkbox"
                id="remember"
              />
            );
          }}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}
