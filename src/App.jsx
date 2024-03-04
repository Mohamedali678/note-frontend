
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import AddNote from "./pages/AddNote"
import UpdateForm from "./components/UpdateForm"
function App(){

    return <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="addnote" element={<AddNote />} />
        <Route path="/updatenote/:id" element={<UpdateForm />} />
    </Routes>
}

export default App