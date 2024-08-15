export const Section3 = () => {
  return (
    <section className="flex flex-col items-center justify-center h-auto px-8 py-16 bg-white md:h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="w-1/3 h-1 mb-6 bg-customRed"></div>
        <h2 className="flex flex-col mb-8 text-2xl font-bold text-center md:text-4xl text-customRed">
          How Sagara <span>IT-Certification Works</span>
        </h2>
      </div>
      <div className="flex flex-col items-center w-full md:flex-row">
        <div className="flex justify-center w-full mb-8 md:w-1/2 md:mb-0">
          <img
            src="/images/orang.png"
            alt="How Sagara IT-Certification Works"
            className="w-2/3 h-auto rounded-full md:w-1/2"
          />
        </div>
        <div className="relative w-full px-4 md:w-1/2">
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start">
              <div className="relative flex-shrink-0">
                <div className="flex items-center justify-center p-2 mr-4 bg-white rounded-full shadow-xl">
                  <img
                    src="/Icons/people.png"
                    alt="Register Account"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold md:text-xl text-customRed">
                  #1 Register Account
                </h3>
                <p className="text-sm text-gray-700 md:text-lg">
                  Begin your journey by creating an account on Sagara IT
                  Certification platform.
                </p>
              </div>
            </div>

            {/* Dashed Line */}
            <div className="absolute bottom-0 z-0 justify-center hidden left-11 top-6 md:flex">
              <div className="w-px h-full border-l-2 border-dashed border-customRed"></div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start">
              <div className="relative flex-shrink-0">
                <div className="flex items-center justify-center p-2 mr-4 bg-white rounded-full shadow-xl">
                  <img
                    src="/Icons/cursor.png"
                    alt="Select the Type"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold md:text-xl text-customRed">
                  #2 Select the Type
                </h3>
                <p className="text-sm text-gray-700 md:text-lg">
                  Choose from a variety of IT certification options tailored to
                  your career goals.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start">
              <div className="relative flex-shrink-0">
                <div className="flex items-center justify-center p-2 mr-4 bg-white rounded-full shadow-xl">
                  <img
                    src="/Icons/card.png"
                    alt="Register and Pay"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold md:text-xl text-customRed">
                  #3 Register and Pay
                </h3>
                <p className="text-sm text-gray-700 md:text-lg">
                  Enroll in your chosen certification program by completing the
                  registration process.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start">
              <div className="relative flex-shrink-0">
                <div className="flex items-center justify-center p-2 mr-4 bg-white rounded-full shadow-xl">
                  <img
                    src="/Icons/list.png"
                    alt="Take Test"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold md:text-xl text-customRed">
                  #4 Take Test
                </h3>
                <p className="text-sm text-gray-700 md:text-lg">
                  Prepare for your certification exam and schedule a convenient
                  time to take the test.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start">
              <div className="relative flex-shrink-0">
                <div className="flex items-center justify-center p-2 mr-4 bg-white rounded-full shadow-xl">
                  <img
                    src="/Icons/topi.png"
                    alt="Get the Certificate"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold md:text-xl text-customRed">
                  #5 Get the Certificate
                </h3>
                <p className="text-sm text-gray-700 md:text-lg">
                  Upon successful completion of the exam, receive your
                  certification digitally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export const Section3 = () => {
//   return (
//     <section className="flex flex-col items-center justify-center h-screen px-8 py-16 bg-white">
//       <div className="flex flex-col items-center justify-center">
//         <div className="w-1/3 h-1 mb-6 bg-customRed"></div>
//         <h2 className="flex flex-col mb-8 text-3xl font-bold text-center md:text-4xl text-customRed">
//           How Sagara <span>IT-Certification Works</span>
//         </h2>
//       </div>
//       <div className="flex w-full">
//         <div className="flex justify-center md:w-1/2">
//           <img
//             src="/images/orang.png" // Ganti dengan path yang sesuai untuk gambar Anda
//             alt="How Sagara IT-Certification Works"
//             className="w-1/2 h-auto rounded-full"
//           />
//         </div>
//         <div className="relative mt-8 md:w-1/2 md:mt-0">
//           <div className="relative space-y-8">
//             {/* Langkah 1 */}
//             <div className="flex items-start">
//               <div className="relative flex-shrink-0">
//                 <div className="flex items-center justify-center p-2 mr-4 bg-red-100 rounded-full">
//                   <img
//                     src="/Icons/people.png" // Ganti dengan path yang sesuai untuk ikon Anda
//                     alt="Register Account"
//                     className="w-10 h-10"
//                   />
//                 </div>
//               </div>
//               <div className="flex-grow">
//                 <h3 className="text-xl font-semibold text-customRed">
//                   #1 Register Account
//                 </h3>
//                 <p className="text-lg text-gray-700">
//                   Begin your journey by creating an account on Sagara IT
//                   Certification platform.
//                 </p>
//               </div>
//             </div>

//             {/* Garis putus-putus */}
//             <div className="absolute bottom-0 z-0 flex justify-center left-8 top-8">
//               <div className="w-px h-full border-l-2 border-dashed border-customRed"></div>
//             </div>

//             {/* Langkah 2 */}
//             <div className="flex items-start">
//               <div className="relative flex-shrink-0">
//                 <div className="flex items-center justify-center p-2 mr-4 bg-red-100 rounded-full">
//                   <img
//                     src="/Icons/cursor.png" // Ganti dengan path yang sesuai untuk ikon Anda
//                     alt="Select the Type"
//                     className="w-10 h-10"
//                   />
//                 </div>
//               </div>
//               <div className="flex-grow">
//                 <h3 className="text-xl font-semibold text-customRed">
//                   #2 Select the Type
//                 </h3>
//                 <p className="text-lg text-gray-700">
//                   Choose from a variety of IT certification options tailored to
//                   your career goals.
//                 </p>
//               </div>
//             </div>

//             {/* Langkah 3 */}
//             <div className="flex items-start">
//               <div className="relative flex-shrink-0">
//                 <div className="flex items-center justify-center p-2 mr-4 bg-red-100 rounded-full">
//                   <img
//                     src="/Icons/card.png" // Ganti dengan path yang sesuai untuk ikon Anda
//                     alt="Register and Pay"
//                     className="w-10 h-10"
//                   />
//                 </div>
//               </div>
//               <div className="flex-grow">
//                 <h3 className="text-xl font-semibold text-customRed">
//                   #3 Register and Pay
//                 </h3>
//                 <p className="text-lg text-gray-700">
//                   Enroll in your chosen certification program by completing the
//                   registration process.
//                 </p>
//               </div>
//             </div>

//             {/* Langkah 4 */}
//             <div className="flex items-start">
//               <div className="relative flex-shrink-0">
//                 <div className="flex items-center justify-center p-2 mr-4 bg-red-100 rounded-full">
//                   <img
//                     src="/Icons/list.png" // Ganti dengan path yang sesuai untuk ikon Anda
//                     alt="Take Test"
//                     className="w-10 h-10"
//                   />
//                 </div>
//               </div>
//               <div className="flex-grow">
//                 <h3 className="text-xl font-semibold text-customRed">
//                   #4 Take Test
//                 </h3>
//                 <p className="text-lg text-gray-700">
//                   Prepare for your certification exam and schedule a convenient
//                   time to take the test.
//                 </p>
//               </div>
//             </div>

//             {/* Langkah 5 */}
//             <div className="flex items-start">
//               <div className="relative flex-shrink-0">
//                 <div className="flex items-center justify-center p-2 mr-4 bg-red-100 rounded-full">
//                   <img
//                     src="/Icons/topi.png" // Ganti dengan path yang sesuai untuk ikon Anda
//                     alt="Get the Certificate"
//                     className="w-10 h-10"
//                   />
//                 </div>
//               </div>
//               <div className="flex-grow">
//                 <h3 className="text-xl font-semibold text-customRed">
//                   #5 Get the Certificate
//                 </h3>
//                 <p className="text-lg text-gray-700">
//                   Upon successful completion of the exam, receive your
//                   certification digitally.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
