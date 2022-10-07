import { Link } from 'react-router-dom'
import { NavbarContainer, Navbar, Container} from '../styles/components'

const Header = () => {
    return (
        <NavbarContainer>
            <Container>
                <Navbar>
                    <h3 className='logo'>Home</h3>
                    <nav>
                        <Link to="/">ExchangeRates</Link> |{" "}
                        <Link to="converter">Currency Converter</Link>
                    </nav>
                </Navbar>
            </Container>
        </NavbarContainer>
    )
}

export default Header