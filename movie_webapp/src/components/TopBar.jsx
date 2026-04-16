import '../styles/topbar.css'
import SearchBar from './SearchBar'

function TopBar(){

    return (
        <>
            <div className="topbar-container">
                <p>Welcome</p>
                <SearchBar />
            </div>
        </>
    )
}

export default TopBar;