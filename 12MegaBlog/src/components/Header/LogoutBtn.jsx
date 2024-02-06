import { useDispatch } from "react-redux";
import { logout } from "../../app/features/auth/authSlice";
import authService from "../../appwrite/auth";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) =>
        console.log(
          "LogoutBtn :: logoutHandler :: authService :: Error :: ",
          error
        )
      );
  };

  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Log Out
    </button>
  );
}

export default LogoutBtn;
