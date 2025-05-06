const NoteItem = ({note}) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col gap-2 shadow-md bg-white">
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-gray-700 text-sm">This is the note content...</p>
      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded w-max">
        Category
      </span>

      <div className="flex gap-2 mt-4">
        <button className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-500 transition">
          Edit
        </button>
        <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition">
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
