// import Footer from "./Footer"
// import Navbar from "./Navbar"


// const Layout = ({children}) =>{
//     return (
//         <>
//         <Navbar/>
//         <main>{children}</main>
//         <Footer/>
//         </>
//     )
// }

// export default Layout;

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main  style={{  minHeight: '80vh' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;