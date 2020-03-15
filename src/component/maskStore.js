import React, { useState, useEffect } from'react';
import PropTypes from "prop-types";



function MaskStore({name, addr, idx, type, stat}) {
    const [ stock, setStuck ] = useState({
        text : "",
        stat : ""
    })

    function stockStat() {
        let x, y;
        switch(stat) {
            case "plenty" :
                x = "많아유~";
                y = "100개 이상";
                setStuck({text : x, stat : y})
                break;
            case "some" : 
                x = "보통이슈.";
                y = "30개 이상 100개미만";
                setStuck({text : x, stat : y})
                break;
            case "few" :
                x = "얼마 남지 않았어오!";
                y = "2개 이상 30개 미만";
                setStuck({text : x, stat : y})
                break;
            case "empty" : 
                x = "없어유...";
                y = "1개 이하";
                setStuck({text : x, stat : y})
                break;
            default :
            setStuck({text : "나도 모르겠슈!", stat : ""})
        }
    }

    useEffect(()=>{
        stockStat();
    },[stat])
    return (
        <article className={`store store${idx} type${type} ${stat}`}>
            <div className="box">
                <h2>{name}</h2>
                <h3>{addr}</h3>
                <div className="stat">
                    <p>{stock.text}</p>
                    <span>{stock.stat}</span>
                </div>
            </div>
        </article>
    )
}

MaskStore.propTypes = {
    name: PropTypes.string.isRequired,
    addr: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    stat: PropTypes.string.isRequired
}

export default MaskStore;