import "../styles/Navbar.css"

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/"><img src="" /*ide jön a logo*//></Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Filmek+Sorozatok</Link>
            <Link to="/swipe" className="nav-link">Film "Tinder"</Link>
            <Link to="/login" className="nav-link">Belépés</Link>
            <Link to="/profile" className="nav-link">Fiókom</Link>
        </div>
    </nav>
}

export default NavBar