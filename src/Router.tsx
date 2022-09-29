import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./DefaultLayout";
import { GiftCards } from "./pages/GiftCards";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Rewards } from "./pages/Rewards";
import { Stores } from "./pages/Stores";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/giftcards" element={<GiftCards />} />
        <Route path="/stores" element={<Stores />} />
      </Route>
    </Routes>
  )
}