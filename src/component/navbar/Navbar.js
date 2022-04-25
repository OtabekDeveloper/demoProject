import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div className="container mb-5">
                <nav className="navbar navbar-expand-lg navbar-light row">
              
                        <div className="col-md-4">
                            <Link to="/" className="navbar-brand">Navbar</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="col-md-8 collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="row d-flex justify-content-between">
                                <div className="col-md-6">
                                    <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    </form>
                                </div>
                                <div className="col-md-6">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <Link to="/" className="nav-link">Home</Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link to="/change" className="nav-link">ChangeStyle</Link>
                                        </li>

                                        <li className="nav-item active">
                                            <Link to="/login" className="nav-link">Login</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>



                        </div>

              



                </nav>
            </div>
        </>
    )
}

export default Navbar