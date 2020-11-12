import React, {useState} from "react";
import PaperPic from "../images/paper.png";
import RockPic from "../images/rock.png";
import ScissorsPic from "../images/scissors.png";
import Button from "@material-ui/core/Button";

const randoEmo = () =>{
    const emojis = [ScissorsPic, RockPic, PaperPic];
    const random = Math.floor(Math.random()*3);
    return emojis[random];
};





const Results = () =>{










    return(
        <>
            {/*  <img src={randoEmo()} />
            <Button onClick={() =>{setCounter(1)}}>Play Again</Button> */}
        </>
    )
}


export default Results;