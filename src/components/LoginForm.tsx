import { useState, FormEvent, useEffect } from 'react';
import { UserData } from '../app/interfaces';
import { Button } from './Button';
import { InputElement } from './InputElement';

interface LoginFormProps {
  onSubmit: (user: UserData) => void;
};

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [user, setUser] = useState<UserData>({ username: '', password: '' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(user);
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
        type='submit'
        disabled={false}
      >
        Log in
      </Button>
    </form>
  )
};
