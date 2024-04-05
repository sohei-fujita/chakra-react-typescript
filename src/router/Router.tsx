import { memo, FC } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";

export const Router: FC = memo(() => {
  return (
    // <Routes>
    //   <Route path="/" element={<Login />} />
    //   <Route
    //     path="/home"
    //     element={homeRoutes.map((route) => (
    //       <Route key={route.path} path={route.path} element={route.children} />
    //     ))}
    //   />
    // </Routes>
    <Routes>
      <Route path="/" element={<Login />} />
      {homeRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
