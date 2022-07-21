import { Link } from "react-router-dom";
function About() {
  return (
    <div className="about">
      <h1>About This Project: </h1>
      <p>responsive todo app with cool features created with react js</p>
      <p>sepehr iravani kazar 2022/7/21</p>
      <p>mail : sepehriravani1@gmail.com</p>

      <p>
        <Link to={{ pathname: "/" }}>Back to home</Link>
      </p>
    </div>
  );
}

export default About;
