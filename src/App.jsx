import {useEffect, useState} from 'react'
import './App.css'
import Main from "./components/main.jsx";
import {createGlobalStyle} from "styled-components";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme === 'light' ? 'white' : '#0a1731'};
    color: ${props => props.theme === 'light' ? 'black' : 'white'};
  }

  div {
    border-color: ${props => props.theme === 'light' ? 'black' : 'white'} !important;
  }
`;


function App() {
    const [theme, setTheme] = useState('light');
    const [count, setCount] = useState(0)

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 18 || hour < 6) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <GlobalStyle theme={theme}/>
                <Main theme = {theme}/>
            </div>
        </DndProvider>
    )
}

export default App
