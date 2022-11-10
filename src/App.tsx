import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import AboutUs from './routes/Home/AboutUs';
import Initial from './routes/Home/Initial';
import Product from './routes/Home/Product';
import Books from './routes/Home/Product/Books';
import Computer from './routes/Home/Product/Computer';
import Eletronic from './routes/Home/Product/Eletronic';
import NotFound from './routes/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Initial />} />
          <Route path="products" element={<Product />}>
            <Route index element={<Navigate to="/products/computers" />} />
            <Route path="/products/computers" element={<Computer />} />
            <Route path="/products/electronics" element={<Eletronic />} />
            <Route path="/products/books" element={<Books />} />
          </Route>
          <Route path="about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
