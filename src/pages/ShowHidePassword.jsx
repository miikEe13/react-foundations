import { useState } from "react";

const ShowHidePassword = () => {
  const [type, setType] = useState("password");
  const [form, setForm] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState({});

  const handleClick = () => {
    setType(type === "password" ? "text" : "password");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email.trim() === "" || form.password.trim() === "") return;
    setSubmitted(form);
    setForm({ email: "", password: "" });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto flex flex-col gap-6 items-center">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center">Show/Hide Password</h2>

      <form onSubmit={handleSubmit} className="w-full flex gap-6">
        {/* Form section */}
        <div className="flex flex-col gap-4 w-1/2">
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded px-3 py-2"
            onChange={handleChange}
            value={form.email}
          />

          <div className="flex items-center gap-2">
            <input
              type={type}
              name="password"
              placeholder="Enter your password"
              className="flex-grow border border-gray-300 rounded px-3 py-2"
              onChange={handleChange}
              value={form.password}
            />
            <button
              type="button"
              onClick={handleClick}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
            >
              {type === "password" ? "Show" : "Hide"}
            </button>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition w-full"
          >
            Submit Form
          </button>
        </div>

        {/* Info section */}
        <div className="p-4 border-l w-1/2">
          <h2 className="text-xl font-semibold mb-2">Submitted Info</h2>
          {submitted.email && (
            <>
              <p className="text-gray-700">Email: {submitted.email}</p>
              <p className="text-gray-700">Password: {submitted.password}</p>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default ShowHidePassword;
