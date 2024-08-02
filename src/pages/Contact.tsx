import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Возвращает на предыдущую страницу
  };
  return (
    <>
      <h1>Contact</h1>
      <button onClick={goBack}>Go to previous page</button>
      <button
        onClick={() =>
          navigate("/movie/33", { state: { from: "ContactPage" } })
        }
      >
        Go to Movie page with param 33
      </button>
    </>
  );
};

export default Contact;
