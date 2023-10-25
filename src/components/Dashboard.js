import React from "react";
import Nav from "./Nav";
import { useState } from "react";
import viewTask, { TaskProgress, addTask } from "../utils/DashboardContent";
import { updateTask } from "../utils/DashboardContent";

function Dashboard() {
  const sidebarContent = [
    {
      id: 1,
      name: "Dashboard",
      image: (
        <svg
          className="w-5 h-5 hover:text-[#F24E1E]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Projects",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 hover:text-[#F24E1E]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Tasks",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hover:text-[#F24E1E]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      ),
    },
  ];

  const [clickedButton, setClickedButton] = useState("Add task"); // State to store the clicked button name

  function updateClickedButton(buttonName) {
    setClickedButton(buttonName);
  }

  return (
    <div className="App">
      <Nav />

      <div className="md:grid grid-cols-5 gap-4">
        {" "}
        {/* Grid with 5 columns */}
        <div className="col-span-1">
          {" "}
          {/* Sidebar */}
          <div className="desktop-sidebar bg-[#27005D] shadow hidden md:block">
            {/* Sidebar start */}
            <div className="desktop-sidebar bg-[#27005D] shadow hidden md:block">
              <button
                data-drawer-target="sidebar-multi-level-sidebar"
                data-drawer-toggle="sidebar-multi-level-sidebar"
                aria-controls="sidebar-multi-level-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-black rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
                {/* <span className="text-2xl text-white  ml-3">AudiXpress</span> */}
                <div className="fixed font-semibold right-3 flex">
                  <span>
                    <img
                      src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1691403598.1697040533&semt=sph"
                      className="h-6 mr-2 rounded-2xl -p-9"
                      alt="Profile logo"
                    />
                  </span>
                  <span className="text-1xl ">Dharsh</span>
                </div>
              </button>

              <aside
                id="sidebar-multi-level-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
              >
                <div className="h-full px-3 py-4 overflow-y-auto bg-[#27005D]">
                  <ul className="space-y-2 font-medium">
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group"
                      >
                        <span className="ml-3">Task Manager</span>
                      </a>
                    </li>
                    <div className="mt-28">
                      <ul className="mt-28">
                        {sidebarContent.map((item) => (
                          <li key={item.id} className="mt-3 ml-3">
                            <a
                              href="#"
                              className="flex items-center p-2 rounded-lg text-white hover:bg-white hover:text-black group"
                            >
                              {item.image}
                              <span className="flex-1 ml-3 whitespace-nowrap">
                                {item.name}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ul>
                </div>
              </aside>
            </div>
            {/* sidebar end */}
          </div>
        </div>
        <div className="col-span-4 md:mx-24 mx-5">
          {" "}
          <p className="mt-6 md:mt-20 text-black text-2xl mx-auto">
            Good Morning Dharsh !!
          </p>
          <p className="text-black mb-6 md:mb-20 mx-auto md:mx-0">
            Today Oct 05, 2023
          </p>
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2 md:gap-9">
            <button
              type="button"
              className="p-5 text-center bg-[#E3F5FF] rounded-md"
              onClick={() => updateClickedButton("Add task")}
            >
              Add task
            </button>
            <button
              type="button"
              className="p-5 text-center bg-[#E3F5FF] rounded-md"
              onClick={() => updateClickedButton("View task")}
            >
              View task
            </button>
            <button
              type="button"
              className="p-5 text-center bg-[#E3F5FF] rounded-md"
              onClick={() => updateClickedButton("Update task")}
            >
              Update task
            </button>

            <button
              type="button"
              className="p-5 text-center bg-[#E3F5FF] rounded-md"
              onClick={() => updateClickedButton("Task progress")}
            >
              Task progress
            </button>
          </div>
          <div className="mt-20 container mx-auto text-center">
            {clickedButton === "View task" && (
              <>

                {viewTask()}
              </>
            )}
            {clickedButton === "Update task" && (
              <>

                {updateTask()}
              </>
            )}

            {clickedButton === "Add task" && (
              <>

                {addTask()}
              </>
            )}

            {clickedButton === "Task progress" && (
              <>

                {TaskProgress()}
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
