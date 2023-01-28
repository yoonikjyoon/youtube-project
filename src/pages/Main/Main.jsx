import React from "react";
import styles from "./Main.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

export default function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
