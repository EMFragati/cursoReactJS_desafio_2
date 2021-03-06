const NavBar = () => {
    return(        
        <nav className="navbar navbar-expand-xl navbar-prymary bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/" target="_blank">Manga Storm</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarWithDropdown" aria-controls="navbarWithDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse show" id="navbarWithDropdown">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/" target="_blank">Inicio</a>
                    </li>
            
                    <li className="nav-item">
                        <a className="nav-link" href="/" target="_blank">Novedades</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Catálogo
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="/" target="_blank">Shonen</a></li>
                            <li><a className="dropdown-item" href="/" target="_blank">Shojo</a></li>
                            <li><a className="dropdown-item" href="/" target="_blank">Seinen</a></li>
                        </ul>
                    </li>
    
                </ul>
                </div>
            </div>
        </nav>       
    )
};

export default NavBar;