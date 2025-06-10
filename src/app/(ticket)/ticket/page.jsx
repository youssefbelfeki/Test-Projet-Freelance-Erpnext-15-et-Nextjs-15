import { cookies } from "next/headers";
import AllTicketsList from "./AllTicketsList";

const AllTicketsPage = async () => {
  const cookieStore = await cookies();
  const sid = cookieStore.get("sid");
  if (!sid) {
    return <div>You must be logged in</div>;
  }

  return <AllTicketsList sid={sid} />;
};

export default AllTicketsPage;
