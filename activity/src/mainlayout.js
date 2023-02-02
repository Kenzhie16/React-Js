import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

function MainLayout() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer />
    </>
  );
}
export default MainLayout;
