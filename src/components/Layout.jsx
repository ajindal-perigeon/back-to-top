// app/components/Layout.jsx
import { Outlet } from '@remix-run/react';
import BackToTop from './BackToTop'; // Adjust path based on your file structure

const Layout = () => {
  return (
    <div>
      <header>
        <h1>My Shopify Store</h1>
      </header>

      <main>
        <Outlet /> {/* Renders page-specific content */}
      </main>

      {/* Add Back to Top button globally */}
      <BackToTop />

      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  );
};

export default Layout;
