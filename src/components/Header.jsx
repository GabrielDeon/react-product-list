import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass, faCartShopping, faHeart} from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className='header'>
      <header>
        <div className='headerLeft'>
          <img className='headerLogo' src='header_Logo.png'></img>
          <a href=''>Compass</a>
        </div>
        <div className='headerMid hover-effect'>
          <a href=''>Home</a>
          <a href=''>Shop</a>
          <a href=''>About</a>
          <a href=''>Contact</a>
        </div>
        <div className='headerRight'>        
          <a href=''><FontAwesomeIcon className='headerIcon' icon={faUser} /></a>
          <a href=''><FontAwesomeIcon className='headerIcon' icon={faMagnifyingGlass} /></a>
          <a href=''><FontAwesomeIcon className='headerIcon' icon={faHeart} /></a>
          <a href=''><FontAwesomeIcon className='headerIcon' icon={faCartShopping} /></a>
        </div>
      </header>
    </div>
  );
}

export default Header;
