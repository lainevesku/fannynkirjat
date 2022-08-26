import { Link } from 'react-router-dom';
import styles from './menu.module.scss';
import { IoLibraryOutline } from 'react-icons/io5'
import { GiNotebook } from 'react-icons/gi'
import { MdSettings } from 'react-icons/md';

function Menu() {
    return(
        <div className={styles.menu}>
            <Link to="/"><div><IoLibraryOutline/></div></Link>
            <Link to="/arvostelut"><div><GiNotebook /></div></Link>
            <Link to="/settings"><div><MdSettings /></div></Link>
        </div>
    );
}

export default Menu;