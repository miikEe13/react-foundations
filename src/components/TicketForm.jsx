import { useEffect, useState } from "react";

const TicketForm = ({ onAddTicket, ticketToEdit, onUpdateTicket, clearTicketToEdit }) => {
  const [ticket, setTicket] = useState({ title: "", description: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ticket.title.trim() === "" || ticket.description.trim() === "") return;

    if (ticketToEdit) {
      onUpdateTicket(ticket);
      clearTicketToEdit(); // 👈 limpiamos ticketToEdit después de actualizar
    } else {
      const newTicket = {
        ...ticket,
        id: Date.now(),
      };
      onAddTicket(newTicket);
    }
    setTicket({ title: "", description: "" });
  };

  useEffect(() => {
    if (ticketToEdit) {
      setTicket({
        title: ticketToEdit.title,
        description: ticketToEdit.description,
        id: ticketToEdit.id, // Muy importante mantener el id para luego actualizar
      });
    }
  }, [ticketToEdit]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 border rounded shadow"
    >
      <h2 className="text-2xl font-semibold">Create / Edit Ticket</h2>
      <input
        type="text"
        name="title"
        placeholder="Ticket Title"
        className="border border-gray-300 rounded px-3 py-2"
        onChange={handleChange}
        value={ticket.title}
      />
      <textarea
        name="description"
        placeholder="Ticket Description (optional)"
        className="border border-gray-300 rounded px-3 py-2"
        onChange={handleChange}
        value={ticket.description}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {ticketToEdit ? "Update Ticket" : "Save Ticket"}
      </button>
    </form>
  );
};

export default TicketForm;
