import React from 'react';
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { register, formState, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>({
    defaultValues: {
      email: '',
      password: '',
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
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

function App() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default App;
