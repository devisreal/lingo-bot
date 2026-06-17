import "./NotFoundPage.scss";
import { useNavigate } from "react-router-dom";
import NotFoundImage from "../../assets/images/not-found-image.svg";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <img
        className="not-found__image"
        src={NotFoundImage}
        alt="Not Found Image"
      />
      <h3 className="not-found__text">Page not found</h3>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="not-found__button"
      >
        Go Home
      </button>
    </div>
  );
}
