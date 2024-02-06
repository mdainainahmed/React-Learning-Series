import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  // conditional return
  if (!user) return <div>Please Login</div>;

  return (
    <div>
      Welcome {user.username}, your Password: {user.password}
    </div>
  );
}

export default Profile;
