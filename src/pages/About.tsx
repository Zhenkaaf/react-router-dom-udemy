import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <NavLink to="/contact">go to contact</NavLink>
    </div>
  );
};

export default About;
