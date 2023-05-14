import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import { useState } from 'react';

import { CheckoutScreen, HomeScreen, SigninScreen, SignupScreen, ContactScreen, BlogScreen, BiographyScreen, ProductDetail, CartScreen } from './pages';


import Footer from './components/Footer';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from './helper/PrivateRoute';

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <>
        <ToastContainer />
        <div
          className={
            sidebarIsOpen
              ? 'd-flex flex-column site-container active-cont'
              : 'd-flex flex-column site-container'
          }
        >
          <Header sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
            <main>
              <Container className="mt-3">
                <Routes>
                  <Route path="/" element={<HomeScreen />} />
                  <Route path="/signin" element={<SigninScreen />} />
                  <Route path="/signup" element={<SignupScreen />} />
                  <Route path="/contact" element={<ContactScreen />} />
                  <Route path="/about" element={<BiographyScreen />} />
                  <Route path="/blog" element={<BlogScreen />} />
                  <Route path='/product/:id' element={<ProductDetail />} />
                  <Route path='/cart/:id?' element={<CartScreen />} />
                  <Route element={<PrivateRoute />}>
                    <Route path='/checkout' element={<CheckoutScreen />} />
                  </Route>
                  <Route path="*" element={<div>Not Found</div>} />
                </Routes>
              </Container>
            </main>
          <Footer />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
