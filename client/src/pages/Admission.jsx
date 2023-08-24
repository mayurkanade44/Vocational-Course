import { useState } from "react";

const Admission = () => {
  const [next, setNext] = useState("Personal Information");

  return (
    <div className="m-5">
      <div className="flex items-center justify-center">
        <div className="w-full px-8 xl:w-10/12">
          <div className="bg-gray-100 py-5">
            <h1 className="text-c#c026d3 pb-5 text-center text-lg font-semibold text-teal-700">
              Application form for admission to Pest Control Application
              Technology
            </h1>
            <div className="flex flex-wrap items-center justify-center">
              <div className="relative mt-4 h-16 w-52 md:mt-0">
                <img
                  src="https://i.ibb.co/DwNs7zG/Steps.png"
                  alt="step1"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 m-0 flex w-full flex-col items-center justify-center px-6">
                  <p className="w-full text-sm font-medium leading-4 text-white">
                    Sign Up
                  </p>
                  <p className="mt-1 w-full text-xs leading-none text-white">
                    Personal information
                  </p>
                </div>
              </div>
              <div className="relative mt-4 h-16 w-52 md:mt-0">
                <img
                  src="https://i.ibb.co/wNZ4nzy/Steps2.png"
                  alt="step2"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 m-0 flex w-full flex-col items-center justify-center px-6">
                  <p className="w-full text-sm font-medium leading-4 text-indigo-800">
                    Education
                  </p>
                  <p className="mt-1 w-full text-xs leading-none text-indigo-800">
                    Educational details
                  </p>
                </div>
              </div>
              <div className="relative mt-4 h-16 w-52 md:mt-0">
                <img
                  src="https://i.ibb.co/c2k4Gbr/Steps3.png"
                  alt="step3"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 m-0 flex w-full flex-col items-center justify-center px-6">
                  <p className="w-full text-sm font-medium leading-4 text-gray-700">
                    Documents
                  </p>
                  <p className="mt-1 w-full text-xs leading-none text-gray-500">
                    Upload documents
                  </p>
                </div>
              </div>
              <div className="relative mt-4 h-16 w-52 lg:mt-0">
                <img
                  src="https://i.ibb.co/XCdjrhm/Steps4.png"
                  alt="step4"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 m-0 flex w-full flex-col items-center justify-center px-6">
                  <p className="w-full text-sm font-medium leading-4 text-gray-700">
                    Payment
                  </p>
                  <p className="mt-1 w-full text-xs leading-none text-gray-500">
                    Final Payment
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:px-24">
            {next === "Personal Information" ? (
              <>
                <h1 className="my-8 pr-2 text-center text-2xl font-medium leading-5 text-gray-800">
                  Personal Information
                </h1>
                <div className="flex justify-between border-b border-gray-200 pb-8 lg:flex">
                  <div>
                    <div className="mt-4 items-center md:flex lg:mt-0">
                      <div className="md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="firstName"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="firstName"
                          placeholder="John"
                        />
                      </div>
                      <div className="ml-10 md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="middleName"
                        >
                          Middle Name
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="middleName"
                          placeholder="Michel"
                        />
                      </div>
                      <div className="ml-10 md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="lastName"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="lastName"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="mt-8 items-center md:flex">
                      <div className="md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="emailAddress"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="emailAddress"
                          placeholder="youremail@example.com"
                        />
                      </div>
                      <div className="mt-4 md:ml-10 md:mt-0 md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="phone"
                        >
                          Phone number
                        </label>
                        <input
                          type="name"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="phone"
                          placeholder="123-1234567"
                        />
                      </div>
                      <div className="mt-4 md:ml-10 md:mt-0 md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="alternate"
                        >
                          Alternate Phone number
                        </label>
                        <input
                          type="name"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="phone"
                          placeholder="123-1234567"
                        />
                      </div>
                    </div>
                    <div className="mt-8 items-center md:flex">
                      <div className="md:w-56">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="emailAddress"
                        >
                          Date Of Birth
                        </label>
                        <input
                          type="date"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="emailAddress"
                        />
                      </div>
                      <div className="ml-10 md:w-44">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="emailAddress"
                        >
                          Gender
                        </label>
                        <select
                          type="select"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="emailAddress"
                          placeholder="Select"
                        >
                          <option>Male</option>
                          <option>Female</option>
                          <option>Prefer Not To Say</option>
                        </select>
                      </div>
                      <div className="ml-10 md:w-32">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="emailAddress"
                        >
                          Blood Group
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="emailAddress"
                          placeholder="A+"
                        />
                      </div>
                      <div className="ml-10 md:w-44">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="emailAddress"
                        >
                          Do You Have A Disability?
                        </label>
                        <select
                          type="select"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="emailAddress"
                          placeholder="Select"
                        >
                          <option>No</option>
                          <option>Yes</option>
                        </select>
                      </div>
                    </div>
                    <div className="items-center md:flex lg:mt-8">
                      <div className="md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="nationality"
                        >
                          Nationality
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="firstName"
                          placeholder="Indian"
                        />
                      </div>
                      <div className="md:ml-10 md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="religion"
                        >
                          Religion
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="firstName"
                          placeholder=""
                        />
                      </div>
                      <div className="ml-10 md:w-44">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="caste"
                        >
                          Caste
                        </label>
                        <select
                          type="select"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="emailAddress"
                          placeholder="Select"
                        >
                          <option>General</option>
                          <option>SC</option>
                          <option>ST</option>
                          <option>OBC</option>
                        </select>
                      </div>
                    </div>
                    <div className="items-center md:flex lg:mt-8">
                      <div className="md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="fatherFirstName"
                        >
                          Father Full Name
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="firstName"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="ml-10 md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="fatherMiddleName"
                        >
                          Mother Full Name
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="middleName"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="ml-10 md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="motherMiddleName"
                        >
                          Annual Income Of Parents
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="middleName"
                          placeholder="In Rupees"
                        />
                      </div>
                    </div>
                    <div className="items-center md:flex lg:mt-8">
                      <div className="md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="motherFirstName"
                        >
                          Guardian Full Name
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="firstName"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="ml-10 md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="motherMiddleName"
                        >
                          Relationship With Guardian
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="middleName"
                          placeholder="Son/Daughter"
                        />
                      </div>
                      <div className="ml-10 md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="motherMiddleName"
                        >
                          Annual Income Of Guardian
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="middleName"
                          placeholder="In Rupees"
                        />
                      </div>
                    </div>
                    <div className="mt-8 items-center md:flex">
                      <div className="md:w-80">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="firstName"
                        >
                          Full Address
                        </label>
                        <textarea
                          type="name"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="firstName"
                          placeholder="Your Full Address"
                          rows={5}
                        />
                      </div>
                      <div className="ml-10 md:w-56">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="firstName"
                        >
                          City
                        </label>
                        <input
                          type="name"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="firstName"
                          placeholder="Mumbai"
                        />
                      </div>
                      <div className="ml-10 md:w-56">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="firstName"
                        >
                          Pincode
                        </label>
                        <input
                          type="name"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="firstName"
                          placeholder="400054"
                        />
                      </div>
                    </div>
                    <button
                      className="mt-4 rounded-lg bg-blue-700 px-4 py-1 text-lg text-white hover:bg-blue-600"
                      onClick={() => setNext("Education")}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            ) : next === "Education" ? (
              <>
                <h1 className="mb-4 mt-5 text-center text-2xl font-medium leading-5 text-gray-800">
                  Educational Information
                </h1>
                <div className="flex justify-between border-b border-gray-200 pb-8 lg:flex">
                  <div>
                    <div className="items-center md:flex lg:mb-8">
                      <div className="md:w-36">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="fatherFirstName"
                        >
                          10th Percentage
                        </label>
                        <input
                          type="number"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="firstName"
                        />
                      </div>
                      <div className="ml-10 md:w-52">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="fatherMiddleName"
                        >
                          10th Board Name
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="middleName"
                          placeholder="Board Name Of 10th"
                        />
                      </div>
                      <div className="pl-10  md:w-48">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="fatherFirstName"
                        >
                          10+2 Percentage
                        </label>
                        <input
                          type="number"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="firstName"
                        />
                      </div>
                      <div className="ml-10 md:w-52">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="fatherMiddleName"
                        >
                          10+2 Board Name
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="middleName"
                          placeholder="Board Name Of 10+2"
                        />
                      </div>
                    </div>
                    <div className="items-center md:flex lg:mb-8">
                      <div className="md:w-52">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="fatherFirstName"
                        >
                          Graduation Percentage
                        </label>
                        <input
                          type="number"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="firstName"
                        />
                      </div>
                      <div className="ml-10 md:w-56">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="fatherMiddleName"
                        >
                          Graduation University Name
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="middleName"
                          placeholder="Your university name"
                        />
                      </div>
                    </div>
                    <div className="mt-4 items-center md:flex lg:mt-0">
                      <div className="w-full">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="university"
                        >
                          Name of the last University / Council / Board
                          Examination passed
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="firstName"
                          placeholder="West Bengal University"
                        />
                      </div>
                      <div className="ml-10 md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="middleName"
                        >
                          Year Of Passing
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="middleName"
                          placeholder="2023"
                        />
                      </div>
                      <div className="ml-10 md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="lastName"
                        >
                          Roll Number
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="lastName"
                          placeholder="123"
                        />
                      </div>
                    </div>
                    <div className="items-center md:flex lg:mt-8">
                      <div className="md:w-52">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="university"
                        >
                          Registration No. with year
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="firstName"
                          placeholder=""
                        />
                      </div>
                      <div className="ml-10 md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="middleName"
                        >
                          Marks Obtained (best of 4 subjects)
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="middleName"
                          placeholder="Marks obtained / total marks"
                        />
                      </div>
                      <div className="ml-10 md:w-72">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="lastName"
                        >
                          Academic institution last attended
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="lastName"
                          placeholder="Serampore College"
                        />
                      </div>
                    </div>
                    <div className="items-center md:flex lg:mt-8">
                      <div className="">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="university"
                        >
                          Name of the any other vocational course(if attended)
                        </label>
                        <input
                          type="text"
                          className="mt-3 w-full rounded border border-gray-200 bg-gray-100 p-3 text-sm font-medium leading-none text-gray-800 focus:border-gray-600 focus:outline-none"
                          aria-labelledby="firstName"
                          placeholder="Carpenter, Electrician"
                        />
                      </div>
                    </div>
                    <button
                      className="mt-5 rounded-lg bg-blue-700 px-4 py-1 text-lg text-white hover:bg-blue-600"
                      onClick={() => setNext("Upload")}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            ) : next === "Upload" ? (
              <>
                <h1 className="mt-5 text-center text-2xl font-medium leading-5 text-gray-800">
                  Upload Documents
                </h1>
                <div className="flex justify-between border-b border-gray-200 pb-8 lg:flex">
                  <div>
                    <div className="items-center md:flex lg:mt-8">
                      <div className="w-64">
                        <label
                          className="text-sm font-medium leading-none text-gray-800"
                          id="university"
                        >
                          Passport Size Photo
                        </label>
                        <input type="file" className="mt-1" />
                      </div>
                      <div className="ml-10 md:w-64">
                        <div className="w-64">
                          <label
                            className="text-sm font-medium leading-none text-gray-800"
                            id="university"
                          >
                            Address Proof (Aadhar Card)
                          </label>
                          <input type="file" className="mt-1" />
                        </div>
                      </div>
                      <div className="ml-10 md:w-64">
                        <div className="w-72">
                          <label
                            className="text-sm font-medium leading-none text-gray-800"
                            id="university"
                          >
                            Cast certificate if any
                          </label>
                          <input type="file" className="mt-1" />
                        </div>
                      </div>
                    </div>
                    <div className="items-center md:flex lg:mt-8">
                      <div className="w-64">
                        <label
                          className="text-sm font-medium leading-none text-gray-800"
                          id="university"
                        >
                          10th Marksheet
                        </label>
                        <input type="file" className="mt-1" />
                      </div>
                      <div className="w-64">
                        <label
                          className="text-sm font-medium leading-none text-gray-800"
                          id="university"
                        >
                          10+2 Marksheet
                        </label>
                        <input type="file" className="mt-1" />
                      </div>
                      <div className="ml-10 md:w-64">
                        <div className="w-64">
                          <label
                            className="text-sm font-medium leading-none text-gray-800"
                            id="university"
                          >
                            Graduation Marksheet
                          </label>
                          <input type="file" className="mt-1" />
                        </div>
                      </div>
                    </div>
                    <div className="md:w-64 mt-8">
                      <div className="w-72">
                        <label
                          className="text-sm font-medium leading-none text-gray-800"
                          id="university"
                        >
                          Vocational Certification If Any
                        </label>
                        <input type="file" className="mt-1" />
                      </div>
                    </div>
                    <button
                      className="mt-5 rounded-lg bg-blue-700 px-4 py-1 text-lg text-white hover:bg-blue-600"
                      onClick={() => setNext("Payment")}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="my-4 flex items-center justify-center">
                <div>
                  <h1 className="text-center text-2xl font-medium leading-5 text-gray-800">
                    Payment
                  </h1>
                  <label className="my-5 mb-3 flex w-[420px] space-x-2">
                    <input
                      type="checkbox"
                      name="checked-demo"
                      className="form-tick bg-check mr-3 mt-1 h-5 w-12 appearance-none rounded-md border border-gray-300 bg-white checked:border-transparent checked:bg-green-600 focus:outline-none"
                    />
                    <span className="font-normal">
                      Hereby i declare that the information & documents provided
                      are true, complete and correct to the best of my knowledge
                      and belief.
                    </span>
                  </label>
                  <button
                    className="mt-8 ml-20 rounded-lg bg-green-700 px-4 py-1 text-lg text-white hover:bg-blue-600"
                    onClick={() => setNext("Payment")}
                  >
                    <a href="https://seramporecollege.ac.in/">
                      Proceed Towards Payment
                    </a>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admission;