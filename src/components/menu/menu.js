import styles from './menu.module.scss';
import { IoLibraryOutline } from 'react-icons/io5'
import { MdStarBorder } from 'react-icons/md'
import { MdSettings } from 'react-icons/md';

function Menu() {
    return(
        <div className={styles.menu}>
            <div><IoLibraryOutline/></div>
            <div><MdStarBorder /></div>
            <div><MdSettings /></div>
        </div>
    );
}

export default Menu;