import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 10vh;
  border-bottom: 1px solid ${({ theme }) => theme.colors["detail-darkGrey"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  @media (min-width: 1024px) {
    border: none;
    margin: auto;
    padding-top: 2rem;
    max-width: 100vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    > div {
      display: flex;
      justify-content: flex-end;
      margin-right: 4rem;
    }

    > button {
      display: flex;
      justify-content: flex-start;
      margin-left: 4rem;
    }
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: ${({ theme }) => theme.colors["base-menuText"]};
`;
