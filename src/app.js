
var user  = 'Erfan'
var userAge = 80;

let getAge = (userAge_)=>{
    return userAge_;
}

var template  = 
    <div> 
        <p>This is a test paragraph</p>
        <div>{getAge(userAge)}</div>
        <div>{userAge>19?<b>big</b>:'small'}</div>
        <div></div>
        <div> blue color {user.toUpperCase()}</div>
    </div>


var appRoot   =   document.getElementById('app')
ReactDOM.render (template,appRoot)