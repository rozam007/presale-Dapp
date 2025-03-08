import React from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Lanunchpad from "../pages/Launchpad";
import CreatePresale from '../pages/CreatePresale/index'
import Claim from "../pages/Claim/index"
import Admin from "../pages/admin/index"
import Presale from "../pages/presale/index"

export default (
  <Routes>
    <Route exact path="/" element={<Lanunchpad />} />
    <Route path="/createPresale" element={<CreatePresale/>} />
    <Route path="/claim" element={<Claim/>} />
    <Route path="/admin" element={<Admin/>} />
    <Route path="/presale/:presaleAddress" element={<Presale/>} />
    {/* <Route path="/" element={<Home />} /> */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);
