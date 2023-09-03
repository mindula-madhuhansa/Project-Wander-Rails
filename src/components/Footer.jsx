import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const siteMapLinkArray = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Plan",
      to: "/plan",
    },
    {
      name: "About",
      to: "/",
    },
    {
      name: "Contact Us",
      to: "/",
    },
    {
      name: "Wallet",
      to: "/",
    },
  ];

  const SocialMediaLinksArray = [
    {
      to: "https://www.linkedin.com/",
      icon: <FaLinkedin />,
    },
    {
      to: "https://www.facebook.com/",
      icon: <FaFacebook />,
    },
    {
      to: "https://instagram.com/",
      icon: <FaInstagram />,
    },
    {
      to: "www.tiktok.com",
      icon: <FaYoutube />,
    },
  ];

  const handleSubscribe = () => {};

  return (
    <>
      <div className="w-full bg-primary text-white py-2 px-12">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-6 py-4">
          <div className="items-center col-span-2 justify-center flex flex-col mb-12 md-my-0">
            <img src={Logo} alt="logo" className="w-full h-auto" />
          </div>

          <div className="col-span-2 items-center justify-center flex flex-col md:col-span-1">
            <h6 className="font-bold uppercase py-2">Site Map</h6>
            <ol>
              {siteMapLinkArray.map((item, i) => {
                return (
                  <div className="ml-0" key={i}>
                    <Link to={item.to}>
                      <li className="text-base font-sans cursor-pointer">
                        {item.name}
                      </li>
                    </Link>
                  </div>
                );
              })}
            </ol>
          </div>

          <div className="col-span-2 md:col-span-3 pt-2 md:pt-2 ml-4">
            <p className="font-bold uppercase">Subscribe To Our Newsletter</p>
            <p className="py-4">
              The latest news, articles and resources will be sent to your inbox
              weekly
            </p>
            <form className="sm:flex-row">
              <input
                className="w-[480px] p-2 mr-4 rounded-md mb-2 border-2 border-secondary"
                type="email"
                placeholder="Enter your email"
              />
              <button
                className="py-2 px-8 mb-2 bg-primary"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr />
        <div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-white items-center">
          <p>2023 GPTForce, All rights reserved</p>
          <div className="flex justify-between sm:w-[300px] pt-4 text-2xl gap-2">
            {SocialMediaLinksArray.map((item, i) => {
              return (
                <a key={i} href={item.to} target="_blank" rel="noreferrer">
                  {item.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
