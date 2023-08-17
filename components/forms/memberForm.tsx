import { postMember } from "@/lib/api/members";
import { Member } from "@/lib/types/member";

export const CreateForm = (): JSX.Element => {
  const onClick = async () => {
    const idInput = document.getElementById("id") as HTMLInputElement;
    const studentIdInput = document.getElementById("student-id") as HTMLInputElement;
    const studentEmailInput = document.getElementById("student-email") as HTMLInputElement;
    const firstNameInput = document.getElementById("first-name") as HTMLInputElement;
    const lastNameInput = document.getElementById("last-name") as HTMLInputElement;
    const activeMemberSelect = document.getElementById("membership-status") as HTMLSelectElement;

    const member: Member = {
      id: parseInt(idInput.value),
      student_id: studentIdInput.value,
      student_email: studentEmailInput.value,
      first_name: firstNameInput.value,
      last_name: lastNameInput.value,
      active_member: activeMemberSelect.value === "True",
    };

    const resp = await postMember(member);
    console.log(resp);
  };

  return (
    <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        placeholder="0123456789"
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
          placeholder="0123456789"
          required
        />
      </div>

      <div>
        <label
          htmlFor="membership-status"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Active Member
        </label>
        <select id="membership-status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>False</option>
          <option>True</option>
        </select>
      </div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={onClick}
      >
        Submit
      </button>
    </form>
  );
};

export const EditForm = () => {

};
