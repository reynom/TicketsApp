import EditTicketForm from "@/app/(components)/EditTicketForm";

const getTicketById = async (id) => {
  console.log("Starting get ticket");
  try {

    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });

    console.log("Return1", res)

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log("Get Failed =  ", error);
  }
};

let updateTicketData = {};
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <EditTicketForm ticket={updateTicketData} />;
};

export default TicketPage;
