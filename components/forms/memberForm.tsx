import { deleteMember, patchMember, postMember } from "@/lib/api/members";
import { Member } from "@/lib/types/member";

interface FormProps {
  member?: Member;
  on_click: () => void;
}

export const CreateForm: React.FC<FormProps> = ({ on_click: on_close }): JSX.Element => {
  const createClick = async () => {
    const idInput = document.getElementById("id") as HTMLInputElement;
    const studentIdInput = document.getElementById("student-id") as HTMLInputElement;
    const studentEmailInput = document.getElementById("student-email") as HTMLInputElement;
    const firstNameInput = document.getElementById("first-name") as HTMLInputElement;
    const lastNameInput = document.getElementById("last-name") as HTMLInputElement;
    const activeMemberSelect = document.getElementById("membership-status") as HTMLSelectElement;

    const post: Member = {
      id: parseInt(idInput.value),
      student_id: studentIdInput.value,
      student_email: studentEmailInput.value,
      first_name: firstNameInput.value,
      last_name: lastNameInput.value,
      active_member: activeMemberSelect.value === "True",
    };

    const resp = await postMember(post);
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
            type="id"
            id="id"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="student-id"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Student ID
          </label>
          <input
            type="id"
            id="student-id"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="0123456789"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="student-email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Student Email
          </label>
          <input
            type="email"
            id="student-email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="abcd123@live.rhul.ac.uk"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-6">
          <label
            htmlFor="first-name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="first name"
            required
          />
          </div>

          <div className="mb-6">
            <label
              htmlFor="last-name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="last name"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="membership-status"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Active Member
          </label>
          <select
            id="membership-status"
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

export const EditForm: React.FC<FormProps> = ({ member, on_click: on_close }): JSX.Element => {
  const editClick = async () => {
    const idInput = document.getElementById("id") as HTMLInputElement;
    const studentIdInput = document.getElementById("student-id") as HTMLInputElement;
    const studentEmailInput = document.getElementById("student-email") as HTMLInputElement;
    const firstNameInput = document.getElementById("first-name") as HTMLInputElement;
    const lastNameInput = document.getElementById("last-name") as HTMLInputElement;
    const activeMemberSelect = document.getElementById("membership-status") as HTMLSelectElement;

    const patch: Member = {
      id: parseInt(idInput.value),
      student_id: studentIdInput.value,
      student_email: studentEmailInput.value,
      first_name: firstNameInput.value,
      last_name: lastNameInput.value,
      active_member: activeMemberSelect.value === "True",
    };

    const resp = await patchMember(patch);
    console.log(resp);
    on_close();
  };

  const deleteClick = async () => {
    const idInput = document.getElementById("id") as HTMLInputElement;

    const resp = await deleteMember(parseInt(idInput.value));
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
            aria-label="disabled input"
            className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={member?.id}
            disabled
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="student-id"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Student ID
          </label>
          <input
            type="id"
            id="student-id"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="0123456789"
            defaultValue={member?.student_id}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="student-email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Student Email
          </label>
          <input
            type="email"
            id="student-email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="abcd123@live.rhul.ac.uk"
            defaultValue={member?.student_email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-6">
          <label
            htmlFor="first-name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="first name"
            defaultValue={member?.first_name}
            required
          />
          </div>

          <div className="mb-6">
            <label
              htmlFor="last-name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="last name"
              defaultValue={member?.last_name}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="membership-status"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Active Member
          </label>
          <select
            id="membership-status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={member?.active_member ? "True" : "False"}
          >
            <option>False</option>
            <option>True</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={editClick}
          >
            Submit
          </button>

          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={deleteClick}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};
