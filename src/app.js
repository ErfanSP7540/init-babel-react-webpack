class Com extends React.Component{
    constructor(props){
        super(props);
        this.click = this.click.bind(this)
    }
    
    getName(){
        return this.props.name;
    }

    click(){
        console.log(this.props.name);
    }

    render(){
        return (
            <div> name: {  this.getName() }
            <button onClick={this.click.bind(this)}>Clickme</button>
            </div>
        )
    }
    
}

let appRoot = document.getElementById('app')
ReactDOM.render (<Com name={'erfan'}/>,appRoot)

