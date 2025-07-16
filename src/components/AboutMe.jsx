import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBrain,
  faLightbulb,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutMe() {
  return (
    <section id="aboutme" className="pt-20 pb-30 bg-gray-100 px-4 md:px-20 ">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
        AboutMe
      </h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
      <p className="text-center text-gray-600 mb-10">
        Discover more about who I am, my professional experiences, and my passions.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ประวัติการศึกษาและประสบการณ์ */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Education</h3>
          <ul className="mb-6">
            <li className="mb-2 flex items-start">
              <span className="mt-1 w-2 h-2 rounded-full bg-blue-600 mr-3"></span>
              <div>
                <p className="font-medium text-gray-700">2021-2025</p>
                <p className="font-semibold text-gray-800">
                  Bachelor of Science in Computer Science
                </p>
                <p className="text-gray-500 text-sm">
                  Suratthani Rajabhat University
                </p>
              </div>
            </li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mb-4">Experience</h3>
          <ul>
            <li className="flex items-start">
              <span className="mt-1 w-2 h-2 rounded-full bg-blue-600 mr-3"></span>
              <div>
                <p className="font-medium text-gray-700">June 24, 2024 – October 24, 2024</p>
                <p className="font-semibold text-gray-800">Intern</p>
                <p className="text-gray-500 text-sm">Office Of Surat Thani Central Rubber Market</p>
                <p className="text-gray-600 text-sm mt-1">
                  Developed web applications using PHP, MySQL, HTML, CSS, Chart.js, and JavaScript.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* เกี่ยวกับตัวฉัน */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            AboutMe
          </h3>
          <p className="text-gray-700 mb-4">
            Greetings!
I am a newly graduated programmer with a strong passion for software development.
I thrive on learning emerging technologies and leveraging them to tackle complex challenges.
          </p>
          <p className="text-gray-700 mb-4">
            I have expertise in web application development using PHP, HTML, JavaScript, and CSS.
I am currently expanding my skills by learning React, Express.js, Node.js, and Tailwind CSS.
I also possess a solid understanding of SQL and experience working with MySQL databases.
          </p>
          <p className="text-gray-700 mb-6">
           My objective is to develop myself into a skilled and reliable software developer, dedicated to creating valuable and user-centered solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <FontAwesomeIcon icon={faLightbulb} /> Problem-solving
            </span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <FontAwesomeIcon icon={faCode} /> Time management
            </span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <FontAwesomeIcon icon={faBrain} /> Adaptability to new technologies
            </span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <FontAwesomeIcon icon={faUsers} /> Teamwork
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
