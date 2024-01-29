import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

const schema = z
  .object({
    name: z.object({
      first: z.string({ required_error: 'first name is required' }).min(2, {
        message: 'first name must be at least 2 characters',
      }),
      last: z.string().promise(),
    }),
  })
  .required();

type Profile = z.infer<typeof schema>;

export function UserProfile() {
  const { register, handleSubmit, control } = useForm<Profile>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log('data', data);
      })}
    >
      <Controller
        name="name.first"
        control={control}
        render={(firstNameProps) => {
          const { error: firstNameError } = firstNameProps.fieldState;
          return (
            <div>
              <label htmlFor="firstName">first name</label>
              <input id="firstName" {...firstNameProps.field} />
              {firstNameError && (
                <div style={{ color: 'red' }}>{firstNameError.message}</div>
              )}
            </div>
          );
        }}
      />
      <div>
        <label htmlFor="lastName">last name</label>
        <input id="lastName" {...register('name.last')} />
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
}
