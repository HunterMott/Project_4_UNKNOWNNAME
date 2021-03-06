import { Link } from "react-router-dom";
import "../styles/Layout.css";
import Logo from "../img/logo.png";
import { Button } from "@material-ui/core";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header className="header">
        <Link to="/">
          <img className='logo' src={Logo} alt='GroupDeck'/>
        </Link>
        {currentUser ? (
          <div className='loggedinusername'>
            <p>{currentUser.username}</p>
            <Button size='small' onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <div className='loginlink'>
            <Link to="/login"><Button size='small'>Login</Button></Link>
            <Link to="/register"><Button size='small'>Register</Button></Link>
          </div>
        )}
        {currentUser && (
          <div className='navlinks'>
            <Link to="/eventcreate"><Button size='small'>Create Event</Button></Link>
            <br/>
            <Link to="/myevents"><Button size='small'>My Events</Button></Link>
          </div>
        )}
      </header>
      {props.children}
    </div>
  );
}
