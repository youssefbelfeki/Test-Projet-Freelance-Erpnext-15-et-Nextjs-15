import { cookies } from "next/headers";
import AllLeadsForm from "./AllLeadsForm";

const AllLeadsPage = async () => {
  const cookieStore = await cookies();
  const sid = cookieStore.get("sid");
  if (!sid) {
    return <div>You must be logged in</div>;
  }

  return <AllLeadsForm sid={sid} />;
};

export default AllLeadsPage;
