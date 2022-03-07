import { Link } from 'react-router-dom'

import Container from '../Container';

import logo from '../../images/costs_logo.png'
import styles from './Navbar.module.css'

function Navbar(){
    return(
        <header>
            <nav className={styles.navbar}>
                <Container>
                    <Link to="/">
                        <img src={logo} alt="Logo Costs" />    
                    </Link>

                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/projects">Projetos</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/company">Companhia</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/contact">Contato</Link>
                        </li>

                    </ul>
                </Container>
            </nav>
        </header>
    )
}

export default Navbar;