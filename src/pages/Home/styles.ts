import styled from "styled-components";

export const HomeContainer = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 2rem;
  max-width: 490px;
  height: 90vh;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 1024px) {
    justify-content: flex-end;
    gap: 6vh;
    max-width: 60rem;
  }

  .firstText {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.5rem;
    letter-spacing: 0.02em;
  }

  div > p {
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.875rem;
    letter-spacing: -0.05rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (min-width: 1024px) {
      font-size: 5rem;
      line-height: 6rem;
    }
  }

  div > p + p {
    color: ${({ theme }) => theme.colors["base-bg"]};
    text-shadow: -1px -1px 0 ${({ theme }) => theme.colors["brand-primary"]},
      1px -1px 0 ${({ theme }) => theme.colors["brand-primary"]},
      -1px 1px 0 ${({ theme }) => theme.colors["brand-primary"]},
      1px 1px 0 ${({ theme }) => theme.colors["brand-primary"]};
  }

  > img {
    width: 100%;

    @media (min-width: 1024px) {
      height: 50vh;
    }
  }
`;

export const HomeContentContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
