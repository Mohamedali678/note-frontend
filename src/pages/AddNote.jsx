import { useState } from "react"
import Header from "../components/Header"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddNote(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const registerNote = (event) => {

        event.preventDefault()

        axios.post("http://localhost:1000/api/create", {
            "title": title,
            "description": description
        }).then(() => {
            toast("Note added successfully", {
                position: "top-right",
                hideProgressBar: false,
                autoClose: 1000,
                onClose: () =>    navigate("/")
            })
        
        }).catch((error) => {
            console.log(error)
        })
    }


    



    return <div>
        <Header />
        
        <div className="form-parent">
            <form>
                <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" placeholder="Enter title" /><br/>
                <textarea type="text" value={description} onChange={(event) => setDescription(event.target.value)} rows="13" cols="52" placeholder="Enter description"  /><br />
                <button onClick={registerNote}>Save</button>
            </form>
        </div>
    <ToastContainer />
    </div>
}

export default AddNote