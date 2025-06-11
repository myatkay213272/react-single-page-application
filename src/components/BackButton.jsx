import { useNavigate } from "react-router-dom";
import Button from "./Button"; // Ensure the path is correct

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      onClick={() => navigate("/app/cities")}
      className="btn btn-secondary"
    >
      ← Back
    </Button>
  );
};

export default BackButton;
