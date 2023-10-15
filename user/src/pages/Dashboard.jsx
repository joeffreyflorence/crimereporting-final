import Welcome from "../components/Welcome";
import Sidebar from "../components/Sidebar";
import AddAccident from "../components/accident/AddAccident";
import AddCrime from "../components/crimes/AddCrime";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate("/");
  const handleLogout = async () => {
    alert("Are you sure you want to logout");
    navigate("/");
    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:8080/api/users/logout`, {
      headers: {
        Authorization: `${token}`,
      },
    });
  };

  return (
    <div className="flex">
      <div className="w-5/6">
        <Welcome />
        <div className="flex flex-col gap-3 p-5">
          <AddAccident />
          <AddCrime />
        </div>
      </div>
      <div className="w-1/8 p-8 text-right">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
