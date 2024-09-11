import React, {useState} from 'react'
import Navbar from './projects/nav-bar'
import Main from './projects/main'
import './styles.css'

export default function App() {
    const [darkMode, setDarkMode] = useState(false)
    function toggleDarkMode () {
        setDarkMode(darkMode => !darkMode)
    }
    return(
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Main darkMode={darkMode}/>
        </div>
    )
}