
function Header () {
  return (
    <header>
      <div className="head">
        <div className="app_icon">
          <img src={process.env.PUBLIC_URL + '/app-icon.png'} alt="to-do-list" />
        </div>
        <div className="app_name">
          <h1 className="main_heading">Zaruri Kam</h1>
          <p>To-Do-List</p>
        </div>
      </div>
    </header>
  )
};

export default Header;