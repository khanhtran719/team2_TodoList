import React, {Component} from "react";
import {Link} from "react-router-dom";
import imgTeam from '../../Team1.jpg';

class TeamScreen extends Component{
    render(){
        return(
            <div style={{width: "100%"}}>
                <img style={{width: "900px" ,marginLeft: "300px"}} src={imgTeam} alt="Thành Viên Nhóm"/>
            </div>
        );
    }
}
export default TeamScreen;