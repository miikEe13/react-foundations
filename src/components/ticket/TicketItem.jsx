const TicketItem = ({ ticket, onRemoveItem, onGetTicketToEdit }) => {
  const handleRemove = (id) => {
    console.log(id)
    onRemoveItem(id);
  };

  const handleUpdate = (ticket) => {
    console.log('ticket to updat', ticket)
    onGetTicketToEdit(ticket)
  }

  return (
    <div className="border rounded p-4 flex flex-col gap-2 shadow">
      <h2>ID: {ticket.id}</h2>
      <h3 className="text-lg font-bold">{ticket.title}</h3>
      <p className="text-sm text-gray-600">{ticket.description}</p>

      <div className="flex gap-2 mt-4">
        <button
            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
            onClick={() => handleUpdate(ticket)}
        >
            Edit
        </button>
        <button
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
          onClick={() =>handleRemove(ticket.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TicketItem;
