import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import AboutUs from './routes/Home/AboutUs';
import Initial from './routes/Home/Initial';
import Product from './routes/Home/Product';
import NotFound from './routes/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Initial />} />
          <Route path="products" element={<Product />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
