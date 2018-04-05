let count = 0

let clicked = ()=>{
    count++;
    console.log('ksdskk');
    reRender()
}

let reRender =()=>{
    
    let template  = 
        <div> 
            <div>This is a </div>
            <p>count {count}</p>
            <button onClick={clicked}>ClickMe</button>
        </div>
    
    
    let appRoot   =   document.getElementById('app')
    ReactDOM.render (template,appRoot)
}
reRender()