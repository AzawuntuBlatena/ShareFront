import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
//import Navbar from "../Navbar";
const Heator = ({children}) =>{
  return(
    <>
<Navbar/>
{children}
<Footer/>
</>
  );
};
export default Heator;