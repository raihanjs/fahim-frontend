import { Outlet } from "react-router";
import Header from "../Pages/Shared/Header/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
