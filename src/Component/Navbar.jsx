const Navbar = ({ setCategory }) => {
  return (
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://edition.cnn.com/us">News Live</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link"style={{ cursor: "pointer" }} onClick={()=>setCategory("Business")}>Business</div>
              </li>
              <li className="nav-item">
                <div className="nav-link"style={{ cursor: "pointer" }} onClick={()=>setCategory("Health")}>Health</div>
              </li>
              <li className="nav-item">
                <div className="nav-link"style={{ cursor: "pointer" }} onClick={()=>setCategory("Technology")}>Technology</div>
              </li>
              <li className="nav-item">
                <div className="nav-link"style={{ cursor: "pointer" }} onClick={()=>setCategory("Entertainment")}>Entertainment</div>
              </li>
              <li className="nav-item">
                <div className="nav-link"style={{ cursor: "pointer" }} onClick={()=>setCategory("Sports")}>Sports</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar