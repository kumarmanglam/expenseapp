import React from "react";
import Layout from "../components/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Expenses from "../Pages/Expenses";
import Income from "../Pages/Income";
import Investments from "../Pages/Investments";
import Subscription from "../Pages/Subscription";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import ForgotPassword from "../Pages/ForgotPassword";

function RouterContainer() {
  return (
    <Routes>
      <Route path={"/signin"} element={<SignIn />} />
      <Route path={"/signup"} element={<SignUp />} />
      <Route path={"/forgotpassword"} element={<ForgotPassword />} />
      <Route path={"/"} element={<Layout />}>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expenses />} />
        <Route path="/investment" element={<Investments />} />
        <Route path="/subscription" element={<Subscription />} />
        {/* <Route path="/setting" element={<Setting />} /> */}
      </Route>
    </Routes>
  );
}

export default RouterContainer;
