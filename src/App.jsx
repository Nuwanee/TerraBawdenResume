import './App.css'
import MyResume from './components/resume_contents.jsx'
import ImageBanner from './components/header.jsx'

function App() {

  return (
    <>
        <ImageBanner className={"website-header"}/>
        <MyResume />
    </>
  )
}

export default App
