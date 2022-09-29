import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors["base-text"]};
  padding: 0.75rem 2rem;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors["brand-primary"]};
  border-radius: 6px;
  text-transform: uppercase;
  width: 13rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
