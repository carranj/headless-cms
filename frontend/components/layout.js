import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children, categories, seo }) => (
  <>
  <div className="d-flex flex-column min-vh-100">
    <div className="container-fluid flex-grow">
      <Nav />
      {children}
    </div>
    <Footer />
  </div>
  </>
)

export default Layout
