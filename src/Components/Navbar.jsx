import { useContext, useState } from "react";
import logo from "../assets/LocalBitesLogo.png";
import { TbDiscount2 } from "react-icons/tb";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import {useSelector} from "react-redux"

const Navbar = () => {
  const [register, setRegister] = useState("Sign In");
 
  const { loggedInUser } = useContext(UserContext)
  
  //subscribing to the selector

  const cartItems = useSelector((store)=>store.cart.items)
 
  return (
    <div>
      <nav className="flex w-full h-20 justify-between items-center shadow-md fixed top-0 bg-white z-10">
        <div className="w-14 h-14 ml-4">
          <img className="w-full h-full" src={logo} alt="Local Bites Logo" />
        </div>

        <div>
          <ul className="flex justify-between items-center gap-5 m-5 cursor-pointer text-lg">
            <li className="hover:text-green-600 ">
              <Link to="/">Home</Link>
            </li>

            <li className="flex items-center justify-center gap-1 hover:text-green-600">
              <TbDiscount2 style={{ width: "20px", height: "20px" }} />
              <Link to="/offers">Offers</Link>
            </li>

            <li className="hover:text-green-600">
              <Link to="/help">Help</Link>
            </li>
            <button
              className="hover:text-green-600"
              onClick={() => {
                register === "Sign In"
                  ? setRegister("Sign Out")
                  : setRegister("Sign In");
              }}
            >
              <Link to="/signing">{register}</Link>
            </button>
            <div>{loggedInUser}</div>

            <li className="flex items-center justify-center gap-1 hover:text-green-600">
              <CiShoppingCart style={{ width: "20px", height: "20px" }} />
              <Link to="/cart">Cart-{cartItems.length} items</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mt-24">{/* Content of your other components */}</div>
    </div>
  );
};

export default Navbar;
