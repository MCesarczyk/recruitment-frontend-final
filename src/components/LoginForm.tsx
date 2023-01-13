import { useState, FormEvent } from 'react';
import { UserData } from '../app/types';
import { Button } from './Button';
import { InputElement } from './InputElement';

export const LoginForm = () => {
  const [user, setUser] = useState<UserData>({ username: '', password: '' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputElement
        value={user.username}
        name="username"
        label={"Username"}
        setValue={setUser}
      />
      <InputElement
        value={user.password}
        name="password"
        type={"password"}
        label={"Password"}
        setValue={setUser}
      />
      <Button
        primary
        disabled={false}
      >
        Log in
      </Button>
    </form>
  )
};
