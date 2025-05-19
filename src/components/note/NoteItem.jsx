const NoteItem = ({note, onRemoveNote, onGetNoteToEdit}) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col gap-2 shadow-md bg-white">
      <h2>ID: {note.id}</h2>
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-gray-700 text-sm">{note.content}.</p>
      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded w-max">
        {note.category}
      </span>

      <div className="flex gap-2 mt-4">
        <button 
        onClick={(() => onGetNoteToEdit(note))}
        className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-500 transition">
          Edit
        </button>
        <button 
          onClick={() => onRemoveNote(note.id)}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition">
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
