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
                x = "충분합니다.";
                y = "100개 이상";
                setStuck({text : x, stat : y})
                break;
            case "some" : 
                x = "보통입니다.";
                y = "30개 이상 100개미만";
                setStuck({text : x, stat : y})
                break;
            case "few" :
                x = "얼마 남지 않았습니다.";
                y = "2개 이상 30개 미만";
                setStuck({text : x, stat : y})
                break;
            case "empty" : 
                x = "남지 않았습니다.";
                y = "1개 이하";
                setStuck({text : x, stat : y})
                break;
            default :
            setStuck({text : "확인되지 않았습니다.", stat : "오류"})
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