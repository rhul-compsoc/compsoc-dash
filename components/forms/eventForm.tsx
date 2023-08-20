import { postEvent } from "@/lib/api/events";
import { Event } from "@/lib/types/event";

interface FormProps {
  event?: Event;
  on_click: () => void;
}

export const CreateForm: React.FC<FormProps> = ({ on_click: on_close }) => {
  const createClick = async () => {
    const idInput = document.getElementById("id") as HTMLInputElement;
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const descriptionInput = document.getElementById("description") as HTMLInputElement;
    const dayInput = document.getElementById("day") as HTMLInputElement;
    const monthInput = document.getElementById("month") as HTMLInputElement;
    const yearInput = document.getElementById("year") as HTMLInputElement;
    const hourInput = document.getElementById("hour") as HTMLInputElement;
    const minuteInput = document.getElementById("minute") as HTMLInputElement;
    const attendanceInput = document.getElementById("attendance") as HTMLInputElement;
    const membersOnlySelect = document.getElementById("members-only") as HTMLSelectElement;

    const post: Event = {
      id: parseInt(idInput.value),
      name: nameInput.value,
      description: descriptionInput.value,
      date: {
        day: dayInput.value,
        month: monthInput.value,
        year: yearInput.value
      },
      time: {
        minute: minuteInput.value,
        hour: hourInput.value
      },
      attendance: parseInt(attendanceInput.value),
      members_only: membersOnlySelect.value === "True"
    };

    const resp = await postEvent(post);
    console.log(resp);
    on_close();
  };

  return (
    <div className="max-w-[480px] uppercase mx-auto mt-48 fixed inset-0 z-50">
      <div className="relative flex">
        <button
          type="button"
          className="ml-auto right-0 mb-2 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          data-dismiss-target="#toast-success"
          aria-label="Close"
          onClick={() => on_close()}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
          </svg>
        </button>
      </div>

      <form>
        <div className="mb-6">
          <label
            htmlFor="id"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ID
          </label>
          <input
            type="text"
            id="id"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Event"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            style={{ height: "60px", resize: "none" }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-6">
          <label
            htmlFor="day"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Day
          </label>
          <input
            type="text"
            id="day"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="00"
            required
          />
          </div>

          <div className="mb-6">
            <label
              htmlFor="month"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Month
            </label>
            <input
              type="text"
              id="month"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="00"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="year"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Year
            </label>
            <input
              type="text"
              id="year"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0000"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-6">
          <label
            htmlFor="minute"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Minute
          </label>
          <input
            type="text"
            id="minute"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="00"
            required
          />
          </div>

          <div className="mb-6">
            <label
              htmlFor="hour"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Hour
            </label>
            <input
              type="text"
              id="hour"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="00"
              required
            />
          </div>
        </div>

        <div className="mb-6">
            <label
              htmlFor="attendance"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Attendance
            </label>
            <input
              type="text"
              id="attendance"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="12345"
              required
            />
          </div>

        <div className="mb-6">
          <label
            htmlFor="members-only"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Members Only
          </label>
          <select
            id="members-only"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>False</option>
            <option>True</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={createClick}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export const EditForm: React.FC<FormProps> = ({ event, on_click: on_close }) => {
  return (
    <div>
      
    </div>
  );
};
