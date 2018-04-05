class SubCom extends React.Component{
    render(){
        return(
            <p>
                title={this.props.title}
            </p>
        )
    }
}
class SupCom extends React.Component{
    render(){
        return(
            <div>
                <SubCom title={'first'}/>
                <SubCom title={'second'}/>
                <SubCom title={'third'}/>
            </div>
        )
    }
}

let appRoot = document.getElementById('app')
ReactDOM.render (<SupCom />,appRoot)

