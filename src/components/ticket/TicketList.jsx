import TicketItem from "./TicketItem";

const TicketList = ({ tickets, onRemove, onGetTicketToEdit }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Your Tickets</h2>
      {tickets.map((ticket, index) => (
        <TicketItem key={index} ticket={ticket} onRemoveItem={onRemove} onGetTicketToEdit={onGetTicketToEdit}/>
      ))}
    </div>
  );
};

export default TicketList;
