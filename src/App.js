import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./Components/Header";

const App = () => {
  return (
    <div className="bg-neutral-900">
      <Router>
        {/* Шапка сайта и Роутинг */}
        <Header />
        <AppRoutes />
      </Router>
    </div>
  );
};

export default App;
