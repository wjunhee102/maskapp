import React, { useState, useEffect } from'react';
import MaskStore from "./maskStore";
import "./css/mask.css";
import { address } from '../link/address';
import useCallDate from '../hook/useCallDate';

function useInput(defaultValue) {
        const [value, setValue] = useState(defaultValue);
    
        const onChange = e => {
            const {
                target: { value }
            } = e;
            setValue(value);
        };
    
        return { value, onChange };
    }

function Mask() {
    const [ adrName, setAdrName] = useState(address["서울특별시 동대문구"]);
    const { data , error, isLoading, callUrl } = useCallDate(adrName);
    const aaa = useInput();
    const loadingStyle = {
        color : "#fff",
        position : 'absolute',
        left : '50%',
        top : '50%',
        transform : `translate(-50%, -50%)`
    }
    useEffect(()=> {
        document.title = '마스크 현황';
    })
    // function changeReign() {
    //     setAdrName();
    // }
    // console.log(aaa);
    useEffect(()=>{
        setAdrName(aaa.value)
    },[adrName, aaa.value])
    

    return (
        <div className="wrap">
            <div className="inner">
                <header className="header">
                    <h1 className="logo">
                        <span className="blind">로고</span>
                    </h1>
                    <nav className="gnb">
                    <select name="adr" {...aaa}>
                        <option value={address["서울특별시 동대문구"]}>서울특별시 동대문구</option>
                        <option value={address["서울특별시 노원구"]}>서울특별시 노원구</option>
                        <option value={address["서울특별시 마포구"]}>서울특별시 마포구</option>
                        <option value={address["경기도 의정부시"]}>경기도 의정부시</option>
                    </select>
                    <button type="button"
                        onClick={()=>{ 
                            callUrl();
                        }}
                    >
                        확인
                    </button>
                </nav>
                </header>
                
                { isLoading ? (
                    <div style={loadingStyle}>Loading...</div>
                ):(data.stores.map((ele, idx)=>(
                    <MaskStore 
                    name={ele.name}
                    addr={ele.addr}
                    idx={idx}
                    key={idx}
                    stat={ele.remain_stat}
                    type={ele.type}
                    />
                ))) }
            </div>
        </div>
    )
}

export default Mask;