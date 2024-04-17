import { Link, useParams } from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import Popeye from "./Popeye";
import Spinach from "./Spinach";

const Profile = () => {
  const { name } = useParams();
  let profile = null;
  switch (name) {
    case "popeye":
      profile = <Popeye />;
      break;
    case "spinach":
      profile = <Spinach />;
      break;
    default:
      profile = <DefaultProfile />;
      break;
  }
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      <hr />
      {profile}
      {!name && <Link to="/">Back</Link>}
    </div>
  );
};

export default Profile;
