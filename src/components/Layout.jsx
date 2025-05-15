import { Outlet } from '@remix-run/react';
import BackToTop from './BackToTop'; 

const Layout = () => {
  return (
    <div>
      <header>
        <h1>My Shopify Store</h1>
      </header>

      <main>
        <Outlet /> 
      </main>

      <BackToTop />

      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  );
};

export default Layout;
