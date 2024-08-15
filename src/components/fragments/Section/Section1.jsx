export const Section1 = () => {
  return (
    <section className="flex flex-col items-center justify-center h-auto text-center bg-white md:text-left">
      <div className="relative w-full h-auto border-2 border-pink-600 ">
        <img
          src="/images/Landing.jpg"
          alt="Landing"
          className="object-cover object-right w-full h-64 md:h-96 lg:h-full md:object-center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full p-4 text-white border-2 border-black md:w-3/5 md:p-8">
          <div className="w-full border-2 border-yellow-300 2xl:w-4/5">
            <h1 className="text-xl font-bold leading-tight tracking-widest 2xl:tracking-wide md:text-4xl lg:text-5xl 2xl:text-7xl font-Inter md:leading-normal">
              Live <span className="font-InterBold">Your Best</span> Life Using
              <span className="font-InterBold"> Your Strengths</span>
            </h1>
            <p className="flex flex-col my-4 text-xs tracking-widest font-Inter md:text-base lg:text-lg">
              <span>
                Meet some of the people who have completed the Sagara Technology
              </span>
              <span>
                and use their results to maximize their potential at work and
              </span>
              <span>everywhere else.</span>
            </p>
            <button className="px-6 py-2 text-xs text-white rounded-md bg-customRed md:text-base lg:text-lg md:px-10 md:py-3">
              Get Certification
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-auto border-2 border-yellow-300">
        <div className="flex flex-col w-full my-8 border-2 border-black lg:flex-row lg:w-4/5">
          <div className="flex flex-col items-center justify-center w-full p-4 border-2 border-red-700 lg:items-start lg:w-1/4">
            <div className="w-1/3 h-1 mb-4 bg-black rounded"></div>
            <h3 className="text-xl font-bold font-Inter md:text-2xl">
              ABOUT US
            </h3>
          </div>
          <div className="w-full p-4 border-2 border-green-700 lg:w-3/4 md:p-8 font-Inter">
            <h4 className="text-xl font-semibold md:text-2xl text-customRed">
              SAGARA IT CERTIFICATION{" "}
            </h4>
            <p className="mt-4 mb-2 text-lg font-bold text-transparent md:text-3xl lg:text-5xl bg-clip-text bg-gradient-to-l from-customRed to-black">
              <span className="text-customRed font-InterBold">
                Join thousands
              </span>{" "}
              of professionals who have elevated their skills and carved out
              success in the technology industry. Start your journey to
              excellence with us today!
            </p>
            <p className="w-full text-sm text-gray-500 md:text-xl lg:text-2xl lg:w-4/5">
              Boost your career prospects in the digital era with
              industry-recognized information technology certifications from
              Sagara IT Certification.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// export const Section1 = () => {
//   return (
//     <section className="flex flex-col items-center justify-center h-auto text-center bg-white md:text-left">
//       <div className="relative w-full h-auto border-2 border-pink-600 md:h-1/2">
//         <img
//           src="/images/Landing.jpg"
//           alt="Landing"
//           className="object-cover w-full h-1/2 md:h-full"
//         />
//         <div className="absolute inset-0 flex flex-col items-center w-full text-white border-2 border-black md:w-3/5 md:justify-center">
//           <div className="w-4/5 border-2 border-yellow-300">
//             <h1 className="text-xl font-bold tracking-widest md:text-5xl 2xl:text-7xl font-Inter">
//               Live <span className="font-InterBold">Your Best</span> Life Using
//               <span className="font-InterBold"> Your Strengths</span>
//             </h1>
//             <p className="flex flex-col text-xs tracking-widest font-Inter md:text-base md:my-4 2xl:my-8">
//               <span>
//                 Meet some of the people who have completed the Sagara Technology
//               </span>
//               <span>
//                 and use their results to maximize their potential at work and
//               </span>
//               <span>everywhere else.</span>
//             </p>
//             <button className="px-10 py-3 text-xs text-white rounded-md bg-customRed md:text-base ">
//               Get Certification
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center justify-center w-full h-auto border-2 border-yellow-300">
//         <div className="flex w-4/5 my-8 border-2 border-black">
//           <div className="flex flex-col justify-center w-1/4 border-2 border-red-700">
//             <div className="w-1/3 h-1 mb-4 bg-black rounded"></div>
//             <h3 className="text-2xl font-bold font-Inter">ABOUT US</h3>
//           </div>
//           <div className="w-3/4 border-2 border-green-700 font-Inter">
//             <h4 className="text-2xl font-semibold text-customRed">
//               SAGARA IT CERTIFICATION{" "}
//             </h4>
//             <p className="mt-4 mb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-customRed to-black">
//               <span className="text-customRed font-InterBold">
//                 Join thousands
//               </span>{" "}
//               of professionals who have elevated their skills and carved out
//               success in the technology industry. Start your journey to
//               excellence with us today!
//             </p>

//             <p className="w-4/5 text-2xl text-gray-500 ">
//               Boost your career prospects in the digital era with
//               industry-recognized information technology certifications from
//               Sagara IT Certification.{" "}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
