import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  height: 13.75rem;
  background-color: ${(({ theme }) => theme['gray-700'])};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 0.75rem;
  }
`

interface HeaderTitleProps {
  variant: 'blue-500' | 'purple-700';
}

export const HeaderTitle = styled.h1<HeaderTitleProps>`
  font-size: 2.5rem;
  color: ${(({ theme, variant }) => theme[variant])};
`