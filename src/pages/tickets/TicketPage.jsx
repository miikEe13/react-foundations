import { useState } from "react";

import TicketForm from "../../components/ticket/TicketForm";
import TicketList from "../../components/ticket/TicketList";

const TicketPage = () => {
  const [ticketList, setTicketList] = useState([]);
  const [ticketToEdit, setTicketToEdit] = useState(null);

  const addTicket = (ticket) => {
    if (!ticket) return;
    console.log(ticket);
    setTicketList([...ticketList, ticket]);
  };

  const removeTicket = (id) => {
    if (!id) return;
    console.log(id);
    setTicketList(ticketList.filter((ticket) => ticket.id !== id));
  };

  const getTicketToEdit = (ticket) => {
    if (!ticket) return;
    setTicketToEdit(ticket);
  }

  const updateTicket = (ticketUpdated) => {
    if (!ticketUpdated) return;
    setTicketList(ticketList.map(ticketToUpdate => ticketToUpdate.id === ticketUpdated.id ? {...ticketToUpdate, ...ticketUpdated} : ticketToUpdate))
  }

  const clearTicketToEdit = () => {
    setTicketToEdit(null);
  };
  

  return (
    <>
      {console.log(ticketList)}
      <div className="max-w-4xl mx-auto p-6 flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-center">Ticket Management</h1>

        <TicketForm onAddTicket={addTicket} ticketToEdit={ticketToEdit} onUpdateTicket={updateTicket} clearTicketToEdit={clearTicketToEdit} />
        <TicketList tickets={ticketList} onRemove={removeTicket} onGetTicketToEdit={getTicketToEdit} />
      </div>
    </>
  );
};

export default TicketPage;
