import { useState, useEffect } from "react";

const NoteForm = ({ onAddNote, noteToEdit, onUpdateNote, onClearNote }) => {
  const [note, setNote] = useState({ title: "", content: "", category: "" });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.title === "" || note.content === "" || note.category === "")
      return;

    if(noteToEdit) {
      onUpdateNote(note);
      onClearNote()
    } else {
      const newNote = {
        ...note,
        id: Date.now(),
      };
      onAddNote(newNote);
    }
    setNote({
      title: "",
      content: "",
      category: "",
    });
  };

  useEffect(() => {
    console.log(noteToEdit)
    if (noteToEdit) {
      setNote(noteToEdit);
    }
  }, [noteToEdit]);

  return (
    <>
      <form
        className="flex flex-col gap-4 p-6 border rounded-lg shadow-md bg-gray-50"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center">
          Create / Edit Note
        </h2>

        {/* Title input */}
        <input
          type="text"
          name="title"
          placeholder="Note Title"
          className="border border-gray-300 rounded px-3 py-2"
          onChange={handleChange}
          value={note.title}
        />

        {/* Content textarea */}
        <textarea
          name="content"
          placeholder="Note Content"
          className="border border-gray-300 rounded px-3 py-2"
          rows="3"
          onChange={handleChange}
          value={note.content}
        ></textarea>

        {/* Category select */}
        <select
          name="category"
          className="border border-gray-300 rounded px-3 py-2"
          value={note.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="Trabajo">Trabajo</option>
          <option value="Personal">Personal</option>
          <option value="Estudio">Estudio</option>
        </select>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {noteToEdit ? "Update Note" : "Save Note"}
        </button>
      </form>
    </>
  );
};

export default NoteForm;
