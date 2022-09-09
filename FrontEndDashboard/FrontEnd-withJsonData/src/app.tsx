import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import ApplicationReview from "./pages/review/[applicationIndex]";
import ApplicationManual from "./pages/manual/[applicationIndex]";
import Details from "./pages/details/[applicationIndex]";

export default function App() {
  localStorage.setItem("notificationsCount", "4");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/review" element={<ApplicationReview />}>
        <Route path=":applicationIndex" element={<ApplicationReview />}></Route>
      </Route>
      <Route path="/manual" element={<ApplicationManual />}>
        <Route path=":applicationIndex" element={<ApplicationManual />}></Route>
      </Route>
      <Route path="/details" element={<Details />}>
        <Route path=":applicationIndex" element={<Details />}></Route>
      </Route>
    </Routes>
  );
}
