import { React } from 'react';



export default function viewTask() {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3 border-b border-gray-200">
              S.No
            </th>
            <th scope="col" class="px-6 py-3 border-b border-gray-200">
              Client Name
            </th>
            <th scope="col" class="px-6 py-3 border-b border-gray-200">
              Task Type
            </th>
            <th scope="col" class="px-6 py-3 border-b border-gray-200">
              Task Deadline
            </th>
            <th scope="col" class="px-6 py-3 border-b border-gray-200">
              Assigned
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-[#E3F5FF] text-black">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-black whitespace-nowrap  border-b border-gray-200"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4 border-b border-gray-200">Silver</td>
            <td class="px-6 py-4 border-b border-gray-200">Laptop</td>
            <td class="px-6 py-4 border-b border-gray-200">Laptop</td>
            <td class="px-6 py-4 border-b border-gray-200">$2999</td>
          </tr>
          <tr class="bg-[#4D4D4D1A] text-black">
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap border-b border-gray-200"
            >
              Microsoft Surface Pro
            </th>
            <td class="px-6 py-4 border-b border-gray-200">White</td>
            <td class="px-6 py-4 border-b border-gray-200">
              Laptop PC
            </td>
            <td class="px-6 py-4 border-b border-gray-200">Laptop</td>
            <td class="px-6 py-4 border-b border-gray-200">$1999</td>
          </tr>
          <tr class="bg-[#E3F5FF] text-black">
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap  border-b border-gray-200"
            >
              Magic Mouse 2
            </th>
            <td class="px-6 py-4 border-b border-gray-200">Black</td>
            <td class="px-6 py-4 border-b border-gray-200">
              Accessories
            </td>
            <td class="px-6 py-4 border-b border-gray-200">Laptop</td>
            <td class="px-6 py-4 border-b border-gray-200">$99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export function updateTask() {
  return (
    <>
     <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3 border-b border-gray-200">
              S.No
            </th>
            <th scope="col" class="px-6 py-3 border-b border-gray-200">
              Client Name
            </th>
            <th scope="col" class="px-6 py-3 border-b border-gray-200">
              Task Type
            </th>
            <th scope="col" class="px-6 py-3 border-b border-gray-200">
              Task Deadline
            </th>
            <th scope="col" class="px-6 py-3 border-b border-gray-200">
              Assigned
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-[#E3F5FF] text-black">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-black whitespace-nowrap  border-b border-gray-200"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4 border-b border-gray-200">Silver</td>
            <td class="px-6 py-4 border-b border-gray-200">Laptop</td>
            <td class="px-6 py-4 border-b border-gray-200">Laptop</td>
            <td class="px-6 py-4 border-b border-gray-200">$2999</td>
          </tr>
          <tr class="bg-[#4D4D4D1A] text-black">
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap border-b border-gray-200"
            >
              Microsoft Surface Pro
            </th>
            <td class="px-6 py-4 border-b border-gray-200">White</td>
            <td class="px-6 py-4 border-b border-gray-200">
              Laptop PC
            </td>
            <td class="px-6 py-4 border-b border-gray-200">Laptop</td>
            <td class="px-6 py-4 border-b border-gray-200">$1999</td>
          </tr>
          <tr class="bg-[#E3F5FF] text-black">
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap  border-b border-gray-200"
            >
              Magic Mouse 2
            </th>
            <td class="px-6 py-4 border-b border-gray-200">Black</td>
            <td class="px-6 py-4 border-b border-gray-200">
              Accessories
            </td>
            <td class="px-6 py-4 border-b border-gray-200">Laptop</td>
            <td class="px-6 py-4 border-b border-gray-200">$99</td>
          </tr>
        </tbody>
      </table>
      <button type="button" className="bg-[#0038FF] text-center mt-6 p-2 rounded-md text-white ">Update Task</button>
    </div>
     <div className="mt-6 border-t bg-blue-200 mb-10">
        <div className="flex justify-center mb-6">
          <h2 className="text-2xl font-semibold text-center mt-4">Update a Category</h2>
        </div>

        <div className="flex justify-center mb-6">
          <form>
            
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 border-black-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-left text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Main Task Title
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 border-black-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-left text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Sub Task Title
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-700 mb-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
   

    
  );
}

export function addTask() {
  return (
    <>
      <div className="mt-6 border-t bg-blue-200 mb-10">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Client Name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><input
              type="text"
              name="price"
              id="price"
              className="mt-1 text-sm rounded-md border-b border-black bg-blue-200 outline-none leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              
            />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Deadline</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><input
              type="text"
              name="price"
              id="price"
              className="mt-1 text-sm rounded-md border-b border-black bg-blue-200 outline-none leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              
            /></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Assigne</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><input
              type="text"
              name="price"
              id="price"
              className="mt-1 text-sm rounded-md border-b border-black bg-blue-200 outline-none leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
             
            /></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Priority</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><select
              name="priority"
              id="priority"
              class="p-3 mt-1 text-sm rounded-md  border-b border-black bg-blue-200 outline-none leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              <option value="low" class="text-green-500">Low</option>
              <option value="high" class="text-red-500">High</option>
            </select>
            </dd>
          </div>

          <button type="button" className="bg-[#0038FF] text-center mb-5 mt-6 p-2 rounded-md text-white ">Create Category</button>

        </dl>
      </div>

      <div className="mt-6 border-t bg-blue-200 mb-10">
        <div className="flex justify-center mb-6">
          <h2 className="text-2xl font-semibold text-center mt-4">Create Category</h2>
        </div>

        <div className="flex justify-center mb-6">
          <form>
            
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 border-black-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-left text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Main Task Title
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 border-black-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-left text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Sub Task Title
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-700 mb-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>


    </>
  )
}

export function TaskProgress() {
  return (
    <>
       <div className="flex-col items-center mx-auto w-5/6 mt-2 sm:w-5/6 lg:w-2/3 md:p-6 max-h-96 sm:ml-38 sm:mr-auto md:ml-40 lg:ml-10">
      <button> {Array.from({ length: 4 }, (_, index) => (
        <div
          key={index}
          className="p-1 border rounded-lg shadow-lg bg-white text-black relative flex flex-col items-center mb-8 border-blue-600 "
          style={{ minWidth: '300px' }}
        >

          <div className="mb-2  flex items-center gap-6">
            <span
              role="img"
              aria-label="calendar"
              className="text-white text-4xl"
              style={{ marginLeft: '-5.5rem', marginBottom: '-.5rem' }}
            >
              <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.4861 0C22.979 0 25 2.18261 25 4.875V22.125C25 24.8174 22.979 27 20.4861 27H4.51389C2.02093 27 0 24.8174 0 22.125V4.875C0 2.18261 2.02093 0 4.51389 0H20.4861ZM22.9167 8.25H2.08333V22.125C2.08333 23.5748 3.17153 24.75 4.51389 24.75H20.4861C21.8285 24.75 22.9167 23.5748 22.9167 22.125V8.25ZM6.59722 17.25C7.55606 17.25 8.33333 18.0894 8.33333 19.125C8.33333 20.1606 7.55606 21 6.59722 21C5.63839 21 4.86111 20.1606 4.86111 19.125C4.86111 18.0894 5.63839 17.25 6.59722 17.25ZM12.5 17.25C13.4589 17.25 14.2361 18.0894 14.2361 19.125C14.2361 20.1606 13.4589 21 12.5 21C11.5411 21 10.7639 20.1606 10.7639 19.125C10.7639 18.0894 11.5411 17.25 12.5 17.25ZM6.59722 11.25C7.55606 11.25 8.33333 12.0894 8.33333 13.125C8.33333 14.1606 7.55606 15 6.59722 15C5.63839 15 4.86111 14.1606 4.86111 13.125C4.86111 12.0894 5.63839 11.25 6.59722 11.25ZM12.5 11.25C13.4589 11.25 14.2361 12.0894 14.2361 13.125C14.2361 14.1606 13.4589 15 12.5 15C11.5411 15 10.7639 14.1606 10.7639 13.125C10.7639 12.0894 11.5411 11.25 12.5 11.25ZM18.4028 11.25C19.3617 11.25 20.1389 12.0894 20.1389 13.125C20.1389 14.1606 19.3617 15 18.4028 15C17.4439 15 16.6667 14.1606 16.6667 13.125C16.6667 12.0894 17.4439 11.25 18.4028 11.25ZM20.4861 2.25H4.51389C3.17153 2.25 2.08333 3.42525 2.08333 4.875V6H22.9167V4.875C22.9167 3.42525 21.8285 2.25 20.4861 2.25Z" fill="black" />
              </svg>
            </span>

            <ul className="flex items-center">
              <li>
                <h2 className="text-1xl ml-10">GST Filing</h2>
              </li>
            </ul>
          </div>

          <div className="absolute top-0 right-0 m-2 text-black cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
              </svg>
            </svg>
          </div>

        </div>
      ))}</button>

    </div>
    </>
  )
}