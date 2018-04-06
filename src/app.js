class Com extends React.Component{
    constructor(props){
        super(props);
        this.click = this.click.bind(this)
        this.state = {
            count:0,
            name:props.name
        }
    }
    
    getName(){
        return this.props.name;
    }

    click(){
        this.setState( preState=>{
            return { count:preState.count+1}
        } )


        //this.setState({ count:100 })
    }

    render(){
        return (
            <div> {this.state.name}: {  this.state.count }
            <button onClick={this.click.bind(this)}>Clickme</button>
            </div>
        )
    }
    
}

let appRoot = document.getElementById('app')
ReactDOM.render (<Com name={'erfan'}/>,appRoot)

