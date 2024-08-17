import React from "react";

function LocationSearchForm() {
  return (
    <>
      <div className="sm:w-2/3 sm:relative sm:bottom-16 mx-auto p-6 bg-white shadow-lg rounded-lg">
        <form className="space-y-4 sm:space-y-0 sm:flex gap-5 items-center justify-between">
          
          {/* Location Input */}
          <div className="sm:w-full">
            <label
              htmlFor="location"
              className="block text-lg  font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              className="mt-1 block w-full px-3 py-2 border-b border-black  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter location"
            />
          </div>

          {/* TYpe */}
          <div className="sm:w-full">
            <label
              htmlFor="type"
              className="block text-lg font-medium text-gray-700"
            >
              Type
            </label>
            <select
              id="Type"
              className="mt-1 block w-full px-3 py-2 border-b border-black bg-white  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-smd"
            >
              <option value="">Select Property</option>
              <option value="Rental">Rental</option>
              <option value="Sale">Sale</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          {/* Category Select */}
          <div className="sm:w-full">
            <label
              htmlFor="category"
              className="block text-lg font-medium text-gray-700"
            >
              Category
            </label>
            <select
              id="category"
              className="mt-1 block w-full px-3 py-2 border-b border-black bg-white  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-smd"
            >
              <option value="">Select category</option>
              <option value="restaurant">Restaurant</option>
              <option value="shopping">Shopping</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="sm:w-full">
            <button
              type="submit"
              className="w-full bg-gray-700 mt-10 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LocationSearchForm;
