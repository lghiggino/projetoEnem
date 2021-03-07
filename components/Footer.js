import Link from 'next/link'
import footerStyle from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={footerStyle.footer}>
            <ul>
                <li>
                    <Link href="http://www.github.com/lghiggino">Project made by Leonardo Ghiggino</Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer