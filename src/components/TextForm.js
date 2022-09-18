import React,{useState} from 'react'

export default function TextForm(props) {
    // Upper Case
    const handleUpClick = ()=>{
        // console.log("Upper Case was clicked");
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to Upper Case!', 'success')
    }
    // Lower Case
    const handleLowClick = ()=>{
        // console.log("Lower Case was clicked");
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to Lower Case!', 'success')
    }
    // Trim Text
    const trimText = ()=>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
        props.showAlert('Removed extra spaces!', 'success')
    }
    // Clear Text
    const clearText = ()=>{
        // console.log("Lower Case was clicked");
        let newText = ''
        setText(newText)
        props.showAlert('Text cleared!', 'success')
    }
    // const handleDefault = ()=>{
    //     setText(text)
    // }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    return (
        <>
        <div className='container' style={{color:props.mode==='light'?'#042743':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>ToUpperCase</button>
            {/* <button className="btn btn-primary mx-4" onClick={handleDefault}>DefaultCase</button> */}
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>ToLowerCase</button>
            <button className="btn btn-primary mx-2" onClick={trimText}>Trim</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
        </div>

        <div className="container my-3" style={{color:props.mode==='light'?'#042743':'white'}}>
            <h2>Your text reading summary</h2>
            <p><b>{text.split(" ").length}</b> Words and <b>{text.length}</b> Characters</p>
            <p><b>{(.008 * text.split(" ").length).toFixed(2)}</b> Minutes to read on average</p>
        <h2>Preview</h2 >
        <p>{text.length>0?text:'Write something in the textbox to preview'}</p>
        </div>
        </>
    )
}
