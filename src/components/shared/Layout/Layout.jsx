import Footer from './Footer/Footer';
import Nav from './Navbar/Nav';

const Layout = ({ children }) => (
  <div className="layout">
    <Nav />
    <div className="layout__children">{children}</div>
    <Footer />
  </div>
);

export default Layout;
