import { useState } from "react";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

const NotesPage = () => {
  const [noteList, setNoteList] = useState([]);

  const addNote = (note) => {
    if (!note) return;
    setNoteList([...noteList, note]);
  };

  return (
    <>
      {console.log('noteList',noteList)}
      <div className="max-w-6xl mx-auto p-6 flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-center">Notes Manager</h1>

        {/* Two-column layout */}
        <div className="flex gap-8">
          {/* Left side: Form */}
          <div className="w-1/3">
            <NoteForm onAddNote={addNote} />
          </div>

          {/* Right side: List */}
          <div className="w-2/3">
            <NoteList notes={noteList}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesPage;
