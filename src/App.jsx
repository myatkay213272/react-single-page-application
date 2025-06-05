import Homepage from './Pages/Homepage';
import Pricing from './Pages/Pricing';
import Product from './Pages/Product';
import PageNotFound from './Pages/PageNotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
