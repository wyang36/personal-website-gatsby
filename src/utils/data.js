import { faHome, faUser, faPalette, faBlog, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export const MENUS = [
    {
        label: 'Home',
        link: '/',
        icon: faHome
    },
    {
        label: 'About Me',
        link: 'about-me',
        icon: faUser
    },
    {
        label: 'Projects',
        link: 'projects',
        icon: faPalette
    },
    {
        label: 'Blog',
        link: 'blog',
        icon: faBlog
    },
    {
        label: 'Contact Me',
        link: 'contact',
        icon: faPaperPlane
    }
]