import { useState } from "react";
import NoteForm from "../../components/note/NoteForm";
import NoteList from "../../components/note/NoteList";

const NotesPage = () => {
  const [noteList, setNoteList] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState(null)

  const addNote = (note) => {
    if (!note) return;
    setNoteList([...noteList, note]);
  };

  const removeNote = (id) => {
    if(!id) return;
    setNoteList(noteList.filter(note => note.id !== id))
  }

  const getNoteToEdit = (note) => {
    console.log('note to edit', note)
    setNoteToEdit(note)
  }

  const updateNote = (noteUpdated) => {
    if(!noteUpdated) return;
    setNoteList(
      noteList.map((note => note.id === noteUpdated.id ? {...note, ...noteUpdated} : note))
    )
  }
  
  const clearNoteToEdit = () => {
    setNoteToEdit(null);
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
            <NoteForm onAddNote={addNote} noteToEdit={noteToEdit} onUpdateNote={updateNote} onClearNote={clearNoteToEdit}/>
          </div>

          {/* Right side: List */}
          <div className="w-2/3">
            <NoteList notes={noteList} onRemoveNote={removeNote} onGetNoteToEdit={getNoteToEdit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesPage;
