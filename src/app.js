var Com = (props)=>{
    return(
        <div>
            {props.name}
        </div>
    )
}


let appRoot = document.getElementById('app')
ReactDOM.render (<Com name={'erfan'}/>,appRoot)

