import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "gatsby"
import {MENUS} from '../utils/data'
import Item from './navbarItem'

const styles = {
    leftMenu: {
        width: '200px',
        height: 'calc(100vh - 50px)',
        position: 'fixed',
        top: 50,
        paddingLeft: 16
    },
}

const NavbarLeft = ({theme}) => {
    return (
        <div style={styles.leftMenu}>
            {MENUS.map(item => <Item key={item.link} theme={theme} {...item} />)}
        </div>
        )
}

export default NavbarLeft