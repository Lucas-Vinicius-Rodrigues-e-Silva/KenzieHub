import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import { TechsProvider } from "../contexts/TechsContext";

export const Application = () => {
  
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="/dashboard" element={ <TechsProvider> <Dashboard /> </TechsProvider> }/>
      </Routes>
    </AnimatePresence>
  );
};
