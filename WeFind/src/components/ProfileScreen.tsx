import Breadcrumb from './Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import userSix from '../images/user/user-06.png';
import { useState } from 'react';

const ProfileScreen = () => {
  const [fatherName, setFatherName] = useState("John Doe");
  const [dateOfBirth, setDateOfBirth] = useState("January 1, 1990");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("Uploaded file:", file);
    // Handle file upload logic here
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Profile" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mt-12 p-4">
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative mx-auto w-full max-w-30 bg-white/20 p-1 backdrop-blur sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">
              <img src={userSix} alt="profile" className="w-full h-auto" />
              <label
                htmlFor="profile"
                className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
              >
                <svg
                  className="fill-current"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG Paths */}
                </svg>
                <input
                  type="file"
                  name="profile"
                  id="profile"
                  className="sr-only"
                />
              </label>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              Mohammad Umar
            </h3>
            <p className="font-medium">Software Engineer</p>
            <p className="font-medium">Father's Name: {fatherName}</p>
            <p className="font-medium">Date of Birth: {dateOfBirth}</p>
            <div className="mx-auto mt-4 bg-blue-50 py-2 px-4 rounded-lg inline-block">
              <label htmlFor="cv-upload" className="block text-center">Upload CV:</label>
              <input type="file" id="cv-upload" className="block mx-auto mt-2" onChange={handleFileUpload} />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProfileScreen;
