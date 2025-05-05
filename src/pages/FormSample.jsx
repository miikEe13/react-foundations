import { useState } from "react";
const FormSample = () => {
  // State for name and email
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState({});


  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submit

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(form);               // ✅ guardar
    setForm({ name: "", email: "" }); // ✅ limpiar
  }

  return (
    <div className="p-6 max-w-md mx-auto flex flex-col gap-4 items-center">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center">Contact Form</h2>

      {/* Form */}
      <div className="flex w-200">
        <form className="w-1/2" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name || ""}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1 mt-4">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email || ""}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your email"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
        <div className="p-8 w-1/2">
          <h2>Submitted</h2>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
        </div>
      </div>
    </div>
  );
};

export default FormSample;