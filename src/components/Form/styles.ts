import { styled } from "styled-components";

export const FormContainer = styled.form`
  margin-top: -1.5rem;
  display: flex;
  gap: 0.5rem;
  width: 100%;
`

export const Input = styled.input`
  padding: 1rem;
  flex: 1;
  border-radius: 8px;
  color: ${(({ theme }) => theme['gray-100'])};
  border: 1px solid ${(({ theme }) => theme['gray-700'])};
  background-color: ${(({ theme }) => theme['gray-500'])};

  &:focus, &:focus-visible {
    outline: 1px solid ${(({ theme }) => theme['gray-700'])};
  }
`

export const Button = styled.button`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background ease-out 300ms;
  color: ${(({ theme }) => theme['gray-100'])};
  background-color: ${(({ theme }) => theme['blue-700'])};

  &:hover {
    background-color: ${(({ theme }) => theme['blue-500'])};
  }

  &:disabled {
    cursor: no-drop;
    background-color: ${(({ theme }) => theme['gray-400'])};
  }
`