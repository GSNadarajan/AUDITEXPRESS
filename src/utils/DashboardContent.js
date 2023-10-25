import React from "react";

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
    );
  }

 
