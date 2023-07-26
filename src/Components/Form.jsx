import React from 'react';
import Navbar from './Navbar'
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm('mrgwzjwl');
  if (state.succeeded) {
    return (
      <p className='text-xl font-medium font-quicksand flex justify-center text-center my-24'>
        Thanks for Contacting.<br /> We will get back to you as soon as possible
      </p>
    );
  }

  return (
    <div className='my-16'>
      <h1 className="flex text-2xl font-semibold items-center justify-center font-montserrat">Get In Touch For Bookings/ Enquiries</h1>
      <h2 className="flex text-lg font-base items-center justify-center mb-8 mt-1 font-raleway">Send us a message to book or for more info.</h2>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md font-montserrat">
          <div className="mb-4 ">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              required // Add the 'required' attribute
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded"
              required // Add the 'required' attribute
            />
            <ValidationError
              prefix="Phone Number"
              field="phone"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block mb-2">
              Location
            </label>
            <input
              id="location"
              type="text"
              name="location"
              className="w-full p-2 border border-gray-300 rounded"
              required // Add the 'required' attribute
            />
            <ValidationError
              prefix="Location"
              field="location"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="datetime" className="block mb-2">
              Date & Time
            </label>
            <input
              id="datetime"
              type="text"
              name="datetime"
              className="w-full p-2 border border-gray-300 rounded"
              required // Add the 'required' attribute
            />
            <ValidationError
              prefix="Date & Time"
              field="datetime"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="eventType" className="block mb-2">
              Event Type
            </label>
            <input
              id="eventType"
              type="text"
              name="eventType"
              className="w-full p-2 border border-gray-300 rounded"
              required // Add the 'required' attribute
            />
            <ValidationError
              prefix="Event Type"
              field="eventType"
              errors={state.errors}
              className="text-red-500"
            />
          </div>

          {/* Dropdown menu with 4 options */}
          <div className="mb-4">
            <label htmlFor="extraInfo" className="block mb-2">
              Select Package:
            </label>
            <select
              id="extraInfo"
              name="extraInfo"
              className="w-full p-2 border border-gray-300 rounded"
              required // Add the 'required' attribute if needed
            >
              <option value="">Select an option</option>
              <option value="bronze">Bronze</option>
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
              <option value="option4">Different Timing (Add Extra Info)</option>
            </select>
            <ValidationError
              prefix="Option"
              field="extraInfo"
              errors={state.errors}
              className="text-red-500"
            />
          </div>

          {/* Text box for extra information */}
          <div className="mb-4">
            <label htmlFor="extraTextBox" className="block mb-2">
              Extra Information
            </label>
            <textarea
              id="extraTextBox"
              name="extraTextBox"
              className="w-full p-2 border border-gray-300 rounded"
              rows="2"
               // Add the 'required' attribute if needed
            />
            <ValidationError
              prefix="Extra Information"
              field="extraTextBox"
              errors={state.errors}
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-[#bc9e86] hover:text-white text-[#562812] font-semibold font-montserrat py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
