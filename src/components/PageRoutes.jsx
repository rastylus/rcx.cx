
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function ProfileRoutes() {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/test" element={<Test />} />
          <Route path="/dice" element={<Dice />} />
    </Routes>
  );
}

export default ProfileRoutes;
