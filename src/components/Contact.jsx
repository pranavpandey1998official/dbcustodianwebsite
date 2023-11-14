import React, { useRef } from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiBuildingOffice2, HiEnvelope } from "react-icons/hi2";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_b1r54dj', 'template_z4mhbrc', form.current, '7JjXr3jMzT5SmZaJI'
      )
      .then(
        (result) => {
            form.current.reset();
            toast.success("Email send Successfully")
        },
        (error) => {
            console.log(error.text);
            toast.error(error.text);
        }
      );
  };
  return (
    <section
      id="contact"
      className="pt-16 flex flex-col items-center  justify-center px-6"
    >
    <Toaster />
      <div className="grid grid-cols-2 max-w-2xl lg:max-w-7xl gap-4 md:grid-cols-4 ">
        <div className="bg-gray-100 p-16 col-span-2 ">
          <div className="text-4xl  lg:text-6xl text-gray-700 font-black pb-16">
            Contact Us
          </div>
          <div className="text-l lg:text-xl py-4 text-gray-600">
            Contact us today for a free consultation to discuss your database
            consulting needs. We would be happy to answer your questions and
            provide you with a customized proposal.
          </div>
          <div className="flex py-2">
            <FaLinkedinIn size={24} className="text-gray-400 mr-4" />
            <p className="text-gray-600">sample linkedin </p>
          </div>
          <div className="flex py-2">
            <HiEnvelope size={24} className="text-gray-400 mr-4" />
            <p className="text-gray-600">sample linkedin </p>
          </div>
          <div className="flex py-2">
            <HiBuildingOffice2 size={24} className="text-gray-400 mr-4" />
            <p className="text-gray-600">sample linkedin </p>
          </div>
          <div className="flex py-2">
            <FaTwitter size={24} className="text-gray-400 mr-4" />
            <p className="text-gray-600">sample linkedin </p>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto mt-16 col-span-2  max-w-xl sm:mt-20"
        >
          <p className="text-xl pb-8">
            Let us help you optimize your database performance and achieve your
            business goals.
          </p>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div class="pt-6 w-full border-t border-gray-300 my-12">
        <p class="text-center text-gray-500">
          © 2023 DB Custodian, LLP. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
