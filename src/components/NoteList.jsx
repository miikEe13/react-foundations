import NoteItem from "./NoteItem";

const NoteList = ({ notes }) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">Your Notes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notes.length === 0 ? (
          <div className="border border-yellow-400 bg-yellow-100 text-yellow-800 p-4 rounded flex items-center gap-2">
            <span>⚠️</span>
            <p>No notes yet. Start by creating one!</p>
          </div>
        ) : (
          notes.map((note, index) => <NoteItem key={index} note={note} />)
        )}
      </div>
    </div>
  );
};

export default NoteList;
