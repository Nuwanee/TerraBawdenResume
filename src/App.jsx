import './App.css'
import MyResume from './components/resume_contents.jsx'
import ImageBanner from './components/header.jsx'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import ImageGallery from "./components/gallery.jsx";

function Home() {
    return (
        <>
            <ImageBanner className={"website-header"} />
            <MyResume/>
        </>

    )
}

function Gallery() {
    return (
        <>
            <br/>
            <h1>Gallery</h1>
            <ImageGallery />
        </>

    )
}

function App() {

    return (
        <BrowserRouter>
            <nav className={"navbar"}>
                <Link to={"/"}>Home</Link> | {" "}
                <Link to={"/gallery"}>Gallery</Link>

            </nav>

            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/gallery"} element={<Gallery />}/>
            </Routes>

        </BrowserRouter>
    )
}

export default App
