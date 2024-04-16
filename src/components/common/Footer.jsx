import { BiBuildingHouse } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-slate-200">
      <footer>
        <div className="flex flex-wrap gap-2">
          <div className="flex-1 basis-[10rem]">
            <Link to="/" className="flex-shrink-0 flex-align-center gap-x-1">
              <BiBuildingHouse className="text-3xl text-primary" />
              <h1 className="hidden md:block">MartVilla</h1>
            </Link>
            <div className="mt-3">
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                harum explicabo illo, magnam vitae expedita.
              </p>
              <div className="gap-5 my-6 flex-center-center">
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FiFacebook />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaTwitter />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaInstagram />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Features</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="/about-us">About</a>
              </li>
              <li className="my-3 text-muted">
                <a href="/services">Services</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Listing</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Information</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="/contact"> Contact</a>
              </li>
              <li className="my-3 text-muted">
                <a href="/team">Team</a>
              </li>
              <li className="my-3 text-muted">
                <a href="/faqs">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Documentation</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="/blog">Blog</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">License</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Pricacy Policy</a>
              </li>
            </ul>
          </div>

        </div>
      </footer>
      <div className="py-2 mt-3 text-center border-t text-muted border-dark">
        <p>
           All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;