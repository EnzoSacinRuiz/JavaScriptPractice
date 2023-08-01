import React from "react";
import {connect} from 'react-redux';
import { aumentarContador } from "../Redux/action";

class Contador extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>Contador!</h1>
                <h3>{this.props.count}</h3>
                <button onClick={this.props.aumentarContador}>AUMENTAR</button>
            </div>
        )
    }

};
const mapStateToProps = (state)=>{
    return{
        count: state.count
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        aumentarContador: ()=> dispatch(aumentarContador())
    }
};

export default connect(
    mapStateToProps,   // Me permite traer info del estado global y que el componente lo reciba por props
    mapDispatchToProps) // Me permite despachar acciones.
    (Contador)