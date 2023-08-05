import { styled } from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ListInfoContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`

interface ListInfoTitleProps {
  variant: 'blue-500' | 'purple-500'
}

export const ListInfoTitle = styled.h2<ListInfoTitleProps>`
  font-weight: 700;
  font-size: 0.875rem;
  color: ${({ theme, variant }) => theme[variant]};
`

export const ListInfoBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.125rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  background-color: ${({ theme }) => theme['gray-400']};
`

export const ListEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem;

  > img {
    padding: 1rem;
  }

  > h1 {
    font-weight: 700;
  }

  > p {
    font-weight: 400;
  }

  > h1, > p {
    text-align: center;
    font-size: 1rem;
    line-height: 1.4;
    color: ${({ theme }) => theme['gray-300']};
  }
`

export const ListContentContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-self: stretch;
  margin-top: 1.5rem;
  flex-direction: column;

  > div {
    display: flex;
    align-items: flex-start;
    padding: 1rem;
    gap: 0.75rem;
    border-radius: 10px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
    border: 1px solid ${({ theme }) => theme['gray-400']};
    background-color: ${({ theme }) => theme['gray-500']};
  }
`

export const ListContent = styled.label`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4;
  flex: 1;
  display: flex;
  gap: 0.75rem;
  position: relative;
  color: ${({ theme }) => theme['gray-100']};

  & input {
    width: 0;
    height: 0;
    margin-right: 1.75rem;
  
    &::after {
      content: '';
      width: 20px;
      height: 20px;
      border-radius: 50%;
      top: 0;
      left: 0;
      position: absolute;
      display: block;
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme['blue-500']};
    }

    &:checked::after {
      border: none;
      width: 22px;
      height: 22px;
      background-color: ${({ theme }) => theme['purple-700']};
    }

    &:checked + span::before {
      content: '';
      display: block;
      width: 12px;
      height: 2px;
      position: absolute;
      top: 10px;
      left: 7px;
      background-color: white;
      transform: rotate(140deg);
    }

    &:checked + span::after {
      content: '';
      display: block;
      width: 6px;
      height: 2px;
      position: absolute;
      top: 11px;
      left: 5px;
      background-color: white;
      transform: rotate(70deg);
    }
  }
`

export const ListDelete = styled.button`
  cursor: pointer;
  background: transparent;
  padding: 0.5rem;
  border: none;
`
