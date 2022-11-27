import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from '../context/Auth';

import { Dashboard, LoginAndRegister, History } from '../pages';

export function Router() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<LoginAndRegister />} />

        <Route path="*" element={<LoginAndRegister />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/history" element={<History />} />

      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
}
