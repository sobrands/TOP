import { Link } from "react-router-dom";

const DefaultProfile = () => {
  return (
    <>
      <p>Oh, nothing to see here!</p>
      <p>If you would like to visit other profiles:</p>
      <Link to="spinach">Spinach</Link>
      <Link to="popeye">Popeyes</Link>
    </>
  );
};

export default DefaultProfile;
