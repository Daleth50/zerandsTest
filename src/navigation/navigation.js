import * as React from "react";
import { Route, Routes } from "react-router";
import HomeComponent from "../app/pages/home";
import NotFound from "../app/pages/not-found";
import RepositoriesComponent from "../app/pages/repositories";
import UsersComponents from "../app/pages/users";

export default function Navigation(props) {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="users" element={<UsersComponents />} />
      <Route path="repositories" element={<RepositoriesComponent />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
