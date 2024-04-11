import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>hello</p>
      <button onClick={() => navigate("/", { replace: true })}>Go Back</button>
    </div>
  );
};

export default Dashboard;
