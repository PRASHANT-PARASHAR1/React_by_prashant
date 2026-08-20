import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Hello {user}</h1>

      <button onClick={() => setUser("Rahul")}>
        Change User
      </button>
    </>
  );
}

export default Profile;