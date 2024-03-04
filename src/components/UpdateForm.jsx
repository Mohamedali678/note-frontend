import { useState, useEffect } from "react"
import Header from "../components/Header"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useNavigate } from "react-router-dom";



function UpdateForm(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState(" ")

    const params = useParams()
    const navigate = useNavigate()


    const getSingleData = () => {
        
        
        axios.get(`http://localhost:1000/note/single/${params.id}`).then((response) => {
           setTitle(response.data.title)
            setDescription(response.data.description)           
        }).catch((error) => {
            console.log(error)
        })
    }


    useEffect(() => {
        getSingleData()
    },[])





    const updateNote = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:1000/note/update/${params.id}`, {
            "title": title,
            "description": description
        }).then(() => {
            alert("Note Updated successfully")
            navigate("/")
        }).catch((error) => {
            console.log(error)
        })
    }
    


    return <div>
        <Header />
        
        <div className="form-parent">
            <form>
                <input value={title} onChange={(e) => setTitle(e.target.value)}  type="text" placeholder="Enter title" /><br/>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="text"  rows="13" cols="52" placeholder="Enter description"  /><br />
                <button onClick={updateNote} >Update</button>
            </form>
        </div>
    <ToastContainer />
    </div>
}

export default UpdateForm