import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm('mrgwzjwl');
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false); // Track whether the form has been submitted

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Send the review data
    const formData = {
      name: e.target.name.value,
      eventInfo: e.target.eventInfo.value,
      review,
    };

    // You can handle form submission with formData here

    // Example: Send the form data to Formspree
    await handleSubmit(e);

    // Optionally, reset the form fields
    e.target.name.value = '';
    e.target.eventInfo.value = '';
    setReview('');
    setSubmitted(true); // Set the submitted state to true
  };

  return (
    <div className='my-16'>
      <div className="flex justify-center mx-4">
        {submitted ? ( // Show a thank you message if the form has been submitted
          <p className='text-xl text-[#3e1d0e] font-medium font-quicksand flex justify-center text-center my-24'>
            Thank you for leaving a review!
          </p>
        ) : (
          <form onSubmit={handleFormSubmit} className="w-full max-w-md font-montserrat">
            <div className="mb-4 ">
              <label htmlFor="name" className="block mb-2 text-[#3e1d0e]">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="eventInfo" className="block mb-2 text-[#3e1d0e]">
                Event Information
              </label>
              <input
                id="eventInfo"
                type="text"
                name="eventInfo"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <ValidationError
                prefix="Event Information"
                field="eventInfo"
                errors={state.errors}
                className="text-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="review" className="block mb-2 text-[#3e1d0e]">
                Review
              </label>
              <textarea
                id="review"
                name="review"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              />
              <ValidationError
                prefix="Review"
                field="review"
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
        )}
      </div>
    </div>
  );
}

export default Form;
