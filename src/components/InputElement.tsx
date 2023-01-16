import { Dispatch, SetStateAction } from "react";
import styled from 'styled-components';
import { UserData } from "../app/interfaces";

export interface InputElementProps {
  value: string;
  name: string;
  type?: "text" | "password";
  label?: string;
  setValue: Dispatch<SetStateAction<UserData>>;
}

export const InputElement= ({ value, name, type, label, setValue }: InputElementProps) => {
  return (
    <StyledLabel>
      {label}
      <StyledInput
        value={value}
        name={name}
        type={type}
        onChange={e => setValue(prevState => ({ ...prevState, [name]: e.target.value }))}
        autoComplete="on"
      />
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
`;

const StyledInput = styled.input`
  width: 240px;
  height: 40px;
  font-weight: 700;
  font-size: 14px;
  background-color: #646464;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 8px;
  margin: 0.25rem 0 1rem;
`;
