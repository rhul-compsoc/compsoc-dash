import { postMember } from "@/lib/api/members";
import { Member } from "@/lib/types/member";
import { useState } from "react";

export const CreateForm = (): JSX.Element => {
  const [member, setMember] = useState<Member>({
    id: undefined,
    student_id: '',
    student_email: '',
    first_name: '',
    last_name: '',
    active_member: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value, type } = event.target;

    const newValue = type === 'checkbox' ? (event.target as HTMLInputElement).checked : value;

    setMember((prevMember) => ({
      ...prevMember,
      [id]: newValue,
    }));
  };

  const handleSubmit = async () => {
    try {
      const resp = await postMember(member);
      console.log(resp);
    } catch (error) {
      console.error('Error posting member:', error);
    }
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
          value={member.id !== undefined ? member.id.toString() : ''}
          onChange={handleInputChange}
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
          value={member.student_id}
          onChange={handleInputChange}
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
          value={member.student_email}
          onChange={handleInputChange}
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
        value={member.first_name}
        onChange={handleInputChange}
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
          value={member.last_name}
          onChange={handleInputChange}
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
        <select
          id="membership-status"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={member.active_member ? 'True' : 'False'}
          onChange={handleInputChange}
        >
          <option>False</option>
          <option>True</option>
        </select>
      </div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export const EditForm = () => {

};
