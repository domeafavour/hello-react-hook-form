import React from 'react';
import { Controller, useForm } from 'react-hook-form';

export function UserProfile() {
  const { register, handleSubmit, control } = useForm<{
    name: {
      first: string;
      last: string;
    };
  }>();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log('data', data);
      })}
    >
      <Controller
        name="name.first"
        control={control}
        rules={{
          required: 'first name is required',
          minLength: {
            value: 2,
            message: 'first name must be at least 2 characters',
          },
        }}
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
