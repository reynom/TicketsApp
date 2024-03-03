import EditTicketForm from "@/app/(components)/EditTicketForm";

const getTicketById = async (id) => {
  console.log("Starting get ticket");
  try {
    console.log("Starting get ticket try");
    const url = process.env.URL + `/api/Tickets/` ;
    console.log("Second URL :", url);
    const res = await fetch(process.env.URL + `/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

let updateTicketData = {};
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    // TODO Problem Here
    console.log("get ticket ID = ", params.id);
    console.log("Got Here: ", updateTicketData);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <EditTicketForm ticket={updateTicketData} />;
};

export default TicketPage;
