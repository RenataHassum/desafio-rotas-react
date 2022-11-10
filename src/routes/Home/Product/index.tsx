import { Outlet } from 'react-router-dom';
import HeaderProduct from './HeaderProduct';

export default function Product() {
  return (
    <div className="container sub-title">
      <HeaderProduct />
      <Outlet />
    </div>
  );
}
