import styled from "styled-components";

import desktopBgBlur from "../assets/blur-left-right.png";
import mobileBgBlur from "../assets/blur-mobile.png";

export const LayoutContainer = styled.div`
  background-image: url(${mobileBgBlur});
  background-size: cover;
  color: ${({ theme }) => theme.colors["base-text"]};

  @media (min-width: 1024px) {
    background-image: url(${desktopBgBlur});
    background-size: cover;
  }
`;
