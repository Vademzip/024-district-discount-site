import {Suspense, useEffect, useState} from 'react'
import './App.css'
import HomePage from "./components/HomePage.jsx";
import {createGlobalStyle} from "styled-components";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Header from "./components/Header.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PatchNotes from "./components/PatchNotes.jsx";
import Faq from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";

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
                    <Header theme={theme}/>
                    <main style={{
                        minHeight: 'calc(100vh - 75px - 93px)'
                    }}>
                        <Routes>
                            <Route path={'/'} element={<HomePage theme={theme}/>}/>
                            <Route path={'/faq'} element={<Faq theme={theme}/>}/>
                            <Route path={'/patch-notes'} element={<PatchNotes theme={theme}/>}/>
                        </Routes>
                    </main>
                    <Footer theme={theme}/>
                </div>
            </DndProvider>
        </Router>
    )
}

export default App
