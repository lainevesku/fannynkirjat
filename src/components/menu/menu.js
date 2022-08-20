import styles from './menu.module.scss';
import { MdMenuBook } from 'react-icons/md';
import { MdStarBorder } from 'react-icons/md'
import { MdSettings } from 'react-icons/md';

function Menu() {
    return(
        <div className={styles.menu}>
            <div><MdMenuBook /></div>
            <div><MdStarBorder /></div>
            <div><MdSettings /></div>
        </div>
    );
}

export default Menu;