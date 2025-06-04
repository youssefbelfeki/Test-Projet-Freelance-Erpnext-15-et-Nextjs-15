
import { cookies } from "next/headers";
import AllLeadsForm from "./AllLeadsForm";


const AllLeadsPage = () => {
  const sid = cookies().get("sid")?.value;
  if (!sid) {
    return <div>You must be logged in</div>;
  }

  return <AllLeadsForm sid={sid} />;
};

export default AllLeadsPage;
