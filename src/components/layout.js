import React, {useState} from "react"
import favicon from '../images/favicon.ico'
import Helmet from 'react-helmet'
import * as themes from '../styles'
import {getSeasonByMonth} from '../utils/datetime'
import Navbar from './navbar'

export default function Layout({ children }) {
    const [theme, setTheme] = useState(themes[getSeasonByMonth()])
    const {colorTheme0, colorTheme1, colorContent1} = theme
    const styles = {
        width: '100vw',
        height: '100vh',
        backgroundImage: `linear-gradient(to bottom right, ${colorTheme0}, ${colorTheme1})`,
        color: colorContent1
    }
    return (
        <div style={styles}>
            <Helmet>
                <link rel="icon" href={favicon} />
                <title>Kira Yang - Web Developer</title>
            </Helmet>
            <style jsx="true" global="true">{`
                body {
                    margin: 0px;
                    padding: 0px;
                }
            `}</style>
            <Navbar theme={theme} />
            {children}
        </div>
    )
}