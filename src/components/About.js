import React from 'react'


export default function About(props) {
 //const [myStyle,setmyStyle]=useState({color: "black",
 //backgroundColor: "white",})
 //const [btnText,setbtnText]=useState("light mode enable")
    
 /* let toggleStyle = ()=>{
    if(myStyle.color ==="white"){
    setmyStyle({
    color: "black",
    backgroundColor: "white"
    })
    setbtnText("dark mode enable")
    }
    else
    {
    setmyStyle({
    color: "white",
    backgroundColor: "black",
    border: '1px solid white'
    })
    setbtnText("light mode enable")
    }  
    }
    let togglePink = ()=>{
    if(myStyle.color ==="white"){
    setmyStyle({
    color: "black",
    backgroundColor: "pink"
    })
    } 
        else if(myStyle.color ==="black")
           {
               setmyStyle({
                  color: "black",
                  backgroundColor: "pink"
              })
           }  
    else{
    setmyStyle({
    color: "black",
    backgroundColor: "white"
    })
    }   
    } */
    let myStyle ={
        color: props.mode==='dark'?'white': 'black',
        backgroundColor: props.mode=== 'dark'?'#20203e':"white",
        border: "2px solid white"
    }
  
return(
    <div className='container' >
    <h1 style={{color: props.mode==="dark"?"white":"black"}}>About Us</h1>
    <div className="accordion" id="accordionExample">
    <div className="card" style={myStyle}>
    <div className="card-header" id="headingOne">
    <h5 className="mb-0">
    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         Analyze Your text
    </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample" style={myStyle}>
    <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
    </div>
    </div>
    <div className="card" style={myStyle}>
    <div className="card-header" id="headingTwo">
    <h5 className="mb-0">
    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         Free to use
    </button>
    </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card" style={myStyle}>
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Browser Compatiblef
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-2"> 
<button className='btn btn-primary' onClick={toggleStyle}>{btnText}</button>
</div>
<div className="container my-2"> 
<button className='btn btn-primary' onClick={togglePink}>pink mode enable</button>
</div> */}
</div>
)
}
