import { useLocation, useNavigate, useParams } from "react-router-dom";

const Movie = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || {
    from: "Unknown",
  };
  console.log("from***", from);
  //http://localhost:3000/movie/33?lang=ru&api=999
  console.log("location***", location); //получим get params в search
  console.log("params***", params);
  return (
    <>
      <div>Movie, parametr {params.movieId}</div>
    </>
  );
};

export default Movie;
