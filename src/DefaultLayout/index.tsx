import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import useElementSize from "../hooks/useElementSize";
import { LayoutContainer } from "./styles";

interface MyContextProps {
  BrowserWidthSmall: boolean
}

export const MyContext = createContext({} as MyContextProps)

export function DefaultLayout() {
  const [boxRef, { width }] = useElementSize();
  const BrowserWidthSmall = width <= 1024

  return (
    <MyContext.Provider value={{ BrowserWidthSmall }}>
      <LayoutContainer ref={boxRef}>
        <Header />
        <Outlet />
      </LayoutContainer>
    </MyContext.Provider>
  )
}