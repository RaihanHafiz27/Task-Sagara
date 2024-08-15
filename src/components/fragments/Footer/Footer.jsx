import FacebookIcon from "../../../assets/facebook";
import InstagramIcon from "../../../assets/instagram";
import LinkedinIcon from "../../../assets/linkedin";
import TwitterIcon from "../../../assets/twitter";

export const Footer = () => {
  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="container grid grid-cols-1 gap-12 px-6 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/images/logo.png"
              alt="Sagara Tech Logo"
              className="mr-3 w-14 h-14"
            />
            <h2 className="text-2xl font-InterBold">
              SAGARA <br /> TECH
            </h2>
          </div>
          <p className="mb-6 text-sm text-gray-400 lg:text-base">
            Plan, build, grow digital products. Continuously delivering impact.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-gray-400"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white hover:text-gray-400"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white hover:text-gray-400"
            >
              <LinkedinIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-gray-400"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Pages</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                IT Certification
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Careers */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Careers</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Front End Developer
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Back End Developer
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Quality Assurance
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                UI/UX Design
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-400 lg:text-base">
            <li>
              <i className="mr-2 fas fa-phone-alt"></i> +62 856-4097-7356
            </li>
            <li>
              <i className="mr-2 fas fa-envelope"></i> consult@sagara.asia
            </li>
            <li>
              <i className="mr-2 fas fa-map-marker-alt"></i> South Jakarta and
              Bandung, Indonesia
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-sm text-center text-gray-600 lg:text-base">
        &copy; 2024 PT. Sagara Asia Teknologi
      </div>
    </footer>
  );
};

// import FacebookIcon from "../../../assets/facebook";
// import InstagramIcon from "../../../assets/instagram";
// import LinkedinIcon from "../../../assets/linkedin";
// import TwitterIcon from "../../../assets/twitter";

// export const Footer = () => {
//   return (
//     <footer className="py-8 text-white bg-gray-900">
//       <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-4">
//         {/* Logo and Description */}
//         <div>
//           <div className="flex items-center mb-4">
//             <img src="/images/logo.png" alt="" className="mr-4 w-14 h-14" />
//             <h2 className="flex flex-col text-2xl font-InterBold">
//               SAGARA <span>TECH</span>
//             </h2>
//           </div>
//           <p className="flex flex-col">
//             Plan, build, grow digital products. Continuously{" "}
//             <span>delivering impact.</span>
//           </p>
//           <div className="flex mt-4 space-x-4">
//             <a href="#" className="text-white hover:text-gray-400">
//               <FacebookIcon />
//             </a>
//             <a href="#" className="text-white hover:text-gray-400">
//               <TwitterIcon />
//             </a>
//             <a href="#" className="text-white hover:text-gray-400">
//               <LinkedinIcon />
//             </a>
//             <a href="#" className="text-white hover:text-gray-400">
//               <InstagramIcon />
//             </a>
//           </div>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="mb-4 text-lg font-bold">Pages</h3>
//           <ul>
//             <li className="mb-2 hover:text-gray-400">
//               <a href="#">IT Certification</a>
//             </li>
//             <li className="mb-2 hover:text-gray-400">
//               <a href="#">Careers</a>
//             </li>
//             <li className="mb-2 hover:text-gray-400">
//               <a href="#">FAQ</a>
//             </li>
//             <li className="hover:text-gray-400">
//               <a href="#">Terms & Conditions</a>
//             </li>
//           </ul>
//           {/*  */}
//         </div>

//         {/* Pages */}
//         <div>
//           <h3 className="mb-4 text-lg font-bold">Careers</h3>
//           <ul>
//             <li className="mb-2 hover:text-gray-400">
//               <a href="#">Front End Developer</a>
//             </li>
//             <li className="mb-2 hover:text-gray-400">
//               <a href="#">Back End Developer</a>
//             </li>
//             <li className="mb-2 hover:text-gray-400">
//               <a href="#">Quality Assurance</a>
//             </li>
//             <li className="hover:text-gray-400">
//               <a href="#">UI/UX Design</a>
//             </li>
//           </ul>
//         </div>

//         {/* Careers */}
//         <div>
//           <h3 className="mb-4 text-lg font-bold">Contact</h3>
//           <p className="mb-2">
//             <i className="mr-2 fas fa-phone-alt"></i> +62 856-4097-7356
//           </p>
//           <p className="mb-2">
//             <i className="mr-2 fas fa-envelope"></i> consult@sagara.asia
//           </p>
//           <p>
//             <i className="mr-2 fas fa-map-marker-alt"></i> South Jakarta and
//             Bandung, Indonesia.
//           </p>
//           {/* <h3 className="mb-4 text-lg font-bold">Careers</h3>
//         <ul>
//           <li className="mb-2 hover:text-gray-400">
//             <a href="#">Front End Developer</a>
//           </li>
//           <li className="mb-2 hover:text-gray-400">
//             <a href="#">Back End Developer</a>
//           </li>
//           <li className="mb-2 hover:text-gray-400">
//             <a href="#">Quality Assurance</a>
//           </li>
//           <li className="hover:text-gray-400">
//             <a href="#">UI/UX Design</a>
//           </li>
//         </ul> */}
//         </div>
//       </div>
//       <div className="mt-8 text-center text-gray-600">
//         &copy; 2024 PT. Sagara Asia Teknologi
//       </div>
//     </footer>
//   );
// };
