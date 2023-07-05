import React, {useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick = ()=>{
    //console.log("Upper case was clicked"+text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to uppercase","success");
    }

   const handleLoClick = ()=>{
   /* console.log("Lower case was clicked"+text);*/
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to lowercase","success");
  }

   const handleOnChange = (event)=>{
    setText(event.target.value);    
   }

   const handleClear= ()=>{
    setText("");
    props.showAlert("text is cleared","success");
   }

   const handleCopy=()=>{

    navigator.clipboard.writeText(text);
    props.showAlert("copied to clipboard","success");
   }

   const handleSpace=()=>{
      let newTxt= text.split(/[ ]+/);
      setText(newTxt.join(" "));
      props.showAlert("in a right format","success");
   }

   const handleRev=()=>{
    let newTxt= text.split(" ").reverse().join(" ");
    setText(newTxt);
    props.showAlert("paragraph is reversed","success");
   }

   const handleSort= ()=>{
    let newtxt= text.split(" ").sort().join(" "); 
    setText(newtxt);
    props.showAlert("sorted para","success");
   }

   const [text, setText] = useState('');
 
  return (
    <>
    
    <div className='container' style={{color: props.mode==='dark' ? 'white': 'black'}}>
    <h1>{props.heading}</h1>
    <div className="form-group">
    <label htmlFor="myBox">Textarea</label>
    <textarea className="form-control" value={text} 
    onChange={handleOnChange} style={{
    backgroundColor: props.mode==="dark"?"rgb(26, 26, 59)":"white",color: props.mode==="dark"?'white':"black"}} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
    <button  disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to Lowercase</button>
    <button  disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleClear}>Clear the text</button>
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleSpace}>Remove extra space</button>
    <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleRev}>Reverse the Text</button>
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleSort}>Sort the Text</button>
    </div>

    <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
        <h2>Your text Summary</h2>
        <p>{text.trim()===""?0: text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"enter something"}</p>
    </div>
    </>
  )
}
