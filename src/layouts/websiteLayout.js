import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const WebsiteLayout = () => {
    return ( <div>
        <Navbar/>
        <div className="pt-32 bg-background">
        <Outlet/>

        </div>
        <Footer/>
    </div> );
}
 
export default WebsiteLayout;