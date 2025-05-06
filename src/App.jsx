import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import MirrorInput from './pages/MirrorInput';
import Counter from './pages/Counter';
import Toggle from './pages/Toggle'
import List from './pages/List';
import Todo from './pages/Todo';
import FormSample from './pages/FormSample';
import ShowHidePassword from './pages/ShowHidePassword'
import CharCounter from "./pages/CharCounter"
import TicketPage from './pages/TicketPage';
import NotePage from './pages/NotesPage';

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
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/mirror" element={<MirrorInput />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/list" element={<List />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/form" element={<FormSample />} />
        <Route path="/char-counter" element={<CharCounter />} />
        <Route path="/tickets" element={<TicketPage />} />
        <Route path="notes" element={<NotePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;