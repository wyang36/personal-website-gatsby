import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeatherAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import {MENUS} from '../utils/data'
import Item from './navbarItem'
import LeftMenu from './navbarLeft'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const styles = {
    topbar: {
        width: '100vw',
        height: '50px',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'space-between',
    },
    topbarLeft: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 16,
        
    },
    topbarRight: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: 16
    }
}

const Navbar = ({theme}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const breakpoints = useBreakpoint();

    return (<header style={styles.topbar}>
        <div style={styles.topbarLeft} onClick={() => setIsMobileMenuOpen(prevState => !prevState)}>
            {breakpoints.s ? <FontAwesomeIcon icon={faBars} size="lg" /> : <FontAwesomeIcon icon={faFeatherAlt} size="lg"/>}
        </div>
        {breakpoints.s ? isMobileMenuOpen ? <LeftMenu theme={theme} /> : null : <div style={styles.topbarRight}>{MENUS.map(item => <Item key={item.link} theme={theme} {...item} />)}</div>}
    </header>)
}

export default Navbar