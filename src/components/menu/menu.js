import { Link } from 'react-router-dom';
import styles from './menu.module.scss';
import { IoLibraryOutline } from 'react-icons/io5'
import { MdStarBorder } from 'react-icons/md'
import { MdSettings } from 'react-icons/md';

function Menu() {
    return(
        <div className={styles.menu}>
            <Link to="/"><div><IoLibraryOutline/></div></Link>
            <Link to="/arvostelut"><div><MdStarBorder /></div></Link>
            <Link to="/settings"><div><MdSettings /></div></Link>
        </div>
    );
}

export default Menu;