import {useEffect, useState} from 'react'
import './App.css'
import Main from "./components/main.jsx";
import {createGlobalStyle} from "styled-components";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Header from "./components/Header.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PatchNotes from "./components/PatchNotes.jsx";
import Faq from "./components/FAQ.jsx";

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
      <Router>
          <DndProvider backend={HTML5Backend}>
              <div className="App">
                  <GlobalStyle theme={theme}/>
                  <Header/>
                  <Routes>
                      <Route path={'/'} element={<Main theme={theme}/>}/>
                      <Route path={'/faq'} element={<Faq/>}/>
                      <Route path={'/patch-notes'} element={<PatchNotes/>}/>

                  </Routes>
              </div>
          </DndProvider>
      </Router>
    )
}

export default App
