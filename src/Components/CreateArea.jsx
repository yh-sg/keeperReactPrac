import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [contents, setContents] = useState({
        title: "",
        content: ""
    })

    const [show, setShow] = useState(false)

    function clickShow(){
        setShow(true);
    }

    function handleChange(event){
        const {name, value} = event.target;
        
        setContents(prevContents=>{
            return{
                ...prevContents,
                [name]: value
            }
        })
    }

    function click(event){
        event.preventDefault();
        props.add(contents)
        setContents({
            title: "",
            content: ""
        })
    }

    return (
        <div>
        <form className="create-note">
            {show&&<input name="title" placeholder="Title" onChange={handleChange} value={contents.title}/>}
            <textarea name="content" onClick={clickShow} placeholder="Take a note..." rows={show?3:1} onChange={handleChange} value={contents.content}/>
            <Zoom in={show}>
                <Fab onClick={click}><AddIcon/></Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;
