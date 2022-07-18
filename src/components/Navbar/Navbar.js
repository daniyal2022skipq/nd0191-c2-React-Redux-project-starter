import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { useDispatch } from "react-redux";
import { logOut } from "../../slices/authSlice";
import { useSelector } from "react-redux";
const Navbar = () => {
  const users = useSelector((state) => state.user.users);
  const authUser = useSelector((state) => state.auth.authUser);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logOut());
  };

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/dashboard" activestyle="true">
            Dashboard
          </NavLink>
          <NavLink to="/add" activestyle="true">
            New
          </NavLink>
          <NavLink to="/leaderboard" activestyle="true">
            Leaderboard
          </NavLink>
          <img src={users[authUser]?.avatarURL} className="userimg" alt='img'></img>
          <span className="welcome">Welcome, {users[authUser].name}</span>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/" onClick={logoutHandler}>
            Log Out
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
