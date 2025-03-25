import { Link } from "react-router-dom";
import "./navbar.scss"; // Optional for styling

const Navbar = () => {
  return (
    <div className="nav">
      <nav className="navbar justify-around">
       {/* <p className="nav_heading  ">Jadoo</p>  */}

       <img
                className="myimage"
                src="/images/Jadoo.svg"
                alt="Description of the image"
                width={115} height={34}
              />

        <ul className="nav_ul ">
          <li className="hover:animate-bounce  
          ">
            <Link to="/" className="nav_content text-black ">
            Desitnations
            </Link>
          </li>
          <li className="hover:animate-bounce text-black-900  
          ">
            <Link to="/about" className="nav_content  text-black">
            Hotels
            </Link>
          </li>

          <li className="hover:animate-bounce text-black-900  
          ">
            <Link to="/contactform" className="nav_content  text-black">
              {" "}
              Flights
            </Link>
          </li>
          <li className="hover:animate-bounce text-black-900  
          ">
            <Link to="/contactform" className="nav_content  text-black">
              {" "}
              Bookings
            </Link>
          </li>
          <li className="hover:animate-bounce text-black-900  
          ">
            <Link to="/contactform" className="nav_content  text-black">
              {" "}
              Login
            </Link>
          </li>
          <li className="hover:animate-bounce text-black-900  
          ">
            <Link to="/contactform" className="nav_content  text-black">
              {" "}
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
