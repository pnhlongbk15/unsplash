import Header from "./Header";
import Navbar from "./Navbar"

const Layout = ({ children }) => {
        return (
                <>
                        <Header />
                        <Navbar />
                        {children}
                </>
        )
}

export default Layout;