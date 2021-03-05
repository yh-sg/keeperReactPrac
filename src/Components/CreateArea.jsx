import React, {useState} from "react";

function CreateArea(props) {

    const [contents, setContents] = useState({
        title: "",
        content: ""
    })

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
        <form>
            <input name="title" placeholder="Title" onChange={handleChange} value={contents.title}/>
            <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={contents.content}/>
            <button onClick={click}>+</button>
        </form>
        </div>
    );
}

export default CreateArea;
