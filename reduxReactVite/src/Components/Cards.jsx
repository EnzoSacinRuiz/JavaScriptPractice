import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../Redux/action";

class Cards extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getUsers()
    };

    render(){
        return(
            <div>
                <h1>Todos los usuarios!</h1>
                {
                    this.props.users.map((user)=>{
                        return(
                            <div>
                                <p>{ user.name }</p>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
};

const mapStateToProps = (state)=>{
    return{
        users: state.users
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        getUsers: ()=> dispatch(getUsers())
    }
};

export default connect(
     mapStateToProps,   // Me permite traer info del estado global y que el componente lo reciba por props
     mapDispatchToProps) // Me permite despachar acciones.)
     (Cards)