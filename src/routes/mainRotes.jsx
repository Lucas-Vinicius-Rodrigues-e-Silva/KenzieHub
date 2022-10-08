import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

export const Application = () => {
  const [user, setUser] = useState(null);
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard user={user} />}/>
      </Routes>
    </AnimatePresence>
  );
};
