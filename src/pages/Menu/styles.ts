import styled from "styled-components";

export const MenuContainer = styled.div``;

export const MenuItemContent = styled.li`
  background: ${({ theme }) => theme.colors["base-bg"]};
  color: ${({ theme }) => theme.colors["detail-lightGrey"]};
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["detail-darkGrey"]};
  border-left: 2px solid transparent;

  :hover {
    color: ${({ theme }) => theme.colors["base-menuText"]};
    border-left: 2px solid ${({ theme }) => theme.colors["brand-primary"]};
    transition: 50ms;
  }
`;
