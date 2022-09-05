import { Routes, Route } from 'react-router-dom';
import { Dashboard, LoginAndRegister } from '../pages';

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginAndRegister />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}
