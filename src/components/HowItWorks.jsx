
import { FaUserGraduate, FaChalkboardTeacher, FaBookOpen, FaCertificate } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 dark:text-white">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1: Sign Up */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center">
              <FaUserGraduate className="text-4xl text-blue-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold dark:text-white">Sign Up</h3>
          </div>

          {/* Step 2: Explore Courses */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center">
              <FaBookOpen className="text-4xl text-blue-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold dark:text-white">Explore Courses</h3>
          </div>

          {/* Step 3: Learn & Engage */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center">
              <FaChalkboardTeacher className="text-4xl text-blue-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold dark:text-white">Learn & Engage</h3>
          </div>

          {/* Step 4: Get Certified */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center">
              <FaCertificate className="text-4xl text-blue-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold dark:text-white">Get Certified</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;






// import { FaUserGraduate, FaChalkboardTeacher, FaBookOpen, FaCertificate } from "react-icons/fa";

// const HowItWorks = () => {
//   return (
//     <section className="py-16 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 dark:text-white">
//           How It Works
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Step 1: Sign Up */}
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
//             <div className="flex justify-center">
//               <FaUserGraduate className="text-4xl text-blue-500 mb-4" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2 dark:text-white">Sign Up</h3>
//             <p className="text-gray-600 dark:text-gray-300">
//               Create your account in just a few steps. It's quick, easy, and free!
//             </p>
//           </div>

//           {/* Step 2: Explore Courses */}
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
//             <div className="flex justify-center">
//               <FaBookOpen className="text-4xl text-blue-500 mb-4" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2 dark:text-white">Explore Courses</h3>
//             <p className="text-gray-600 dark:text-gray-300">
//               Browse through a wide range of courses tailored to your interests and goals.
//             </p>
//           </div>

//           {/* Step 3: Learn & Engage */}
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
//             <div className="flex justify-center">
//               <FaChalkboardTeacher className="text-4xl text-blue-500 mb-4" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2 dark:text-white">Learn & Engage</h3>
//             <p className="text-gray-600 dark:text-gray-300">
//               Access video lectures, quizzes, and assignments. Interact with instructors and peers.
//             </p>
//           </div>

//           {/* Step 4: Get Certified */}
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
//             <div className="flex justify-center">
//               <FaCertificate className="text-4xl text-blue-500 mb-4" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2 dark:text-white">Get Certified</h3>
//             <p className="text-gray-600 dark:text-gray-300">
//               Earn a certificate upon course completion to showcase your new skills.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;