
import { useState, useEffect } from "react"
import Header from "../components/Header"
import axios from "axios"
import {MdDelete} from "react-icons/md"
import {AiFillEdit} from "react-icons/ai"
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import {Link } from "react-router-dom"

function Home(){


    const [notes, setNotes] = useState([])

    const getAllNotes = () => {
        axios.get("http://localhost:1000/notes").then((response) => {
                setNotes(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getAllNotes()
    },[])



    const deleteNote = (id) => {

        axios.delete(`http://localhost:1000/note/delete/${id}`).then(() => {
            toast("Note deleted successfully", {
                position: "top-right",
                hideProgressBar: false,
                autoClose: 1000,
              
            })
            getAllNotes()
        }).catch((error) => {
            console.log(error)
        })

    }



    return <div>
        <Header />

        <div className="box-parent">

            {
                notes.map((note, index) => (
                    <div className="box">
                  <h4> {note.title.substring(0, 20)} </h4>
                  <p> {note.description.substring(0, 160)} </p>
                  <div className="icons" >
                  <MdDelete onClick={ ()=> deleteNote(note._id) } className="deleteBtn" />
                 <Link to={`/updatenote/${note._id}`}>  <AiFillEdit  className="deleteBtn" /> </Link>
                </div>
                 </div>
                ))
            }

        </div>
        <ToastContainer />
       
    </div>
}

export default Home