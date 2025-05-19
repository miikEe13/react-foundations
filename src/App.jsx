import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import MirrorInput from './pages/basics/MirrorInput';
import Counter from './pages/basics/Counter';
import Toggle from './pages/basics/Toggle'
import List from './pages/list/List';
import Todo from './pages/forms/Todo';
import FormSample from './pages/forms/FormSample';
import ShowHidePassword from './pages/forms/ShowHidePassword'
import CharCounter from "./pages/basics/CharCounter"
import TicketPage from './pages/tickets/TicketPage';
import NotePage from './pages/notes/NotesPage';
import NotesPageWithStorage from './pages/notes/NotesPageWithStorage';

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 flex gap-4 bg-gray-200">
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/mirror">Mirror Input</Link>
        <Link to="/toggle">Toggle</Link>
        <Link to="/list">List</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/form">Form</Link>
        <Link to="/password">Password</Link>
        <Link to="/char-counter">CharCounter</Link>
        <Link to="/tickets">Ticket Management</Link>
        <Link to="/notes">Note Manager</Link>
        <Link to="/notes-storage">Notes con Storage</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/mirror" element={<MirrorInput />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/list" element={<List />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/form" element={<FormSample />} />
        <Route path="/password" element={<ShowHidePassword />} />
        <Route path="/char-counter" element={<CharCounter />} />
        <Route path="/tickets" element={<TicketPage />} />
        <Route path="/notes" element={<NotePage/>}/>
        <Route path="/notes-storage" element={<NotesPageWithStorage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;