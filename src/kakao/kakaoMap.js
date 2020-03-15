import React, { useEffect, useRef } from "react";
import axios from"axios";
import useCallDate from"../hook/useCallDate";
 

function KakaoMap() {
    // const container = useRef();
    // const { data, error, isLoading, callUrl } = useCallDate("//dapi.kakao.com/v2/maps/sdk.js?appkey=6884dcb93514aef5629fb3ef696417af")
    // useEffect(()=>{
    //     const {kakao} = window;
    //         var options = {
    //             center : new kakao.maps.LatLng(33.450701, 126.570667),
    //             level: 3
    //         };
    //         var map = new kakao.maps.Map(container, options);
    // },[container])
    // useEffect(()=>{
    //     let el = document.getElementById('map');
    //     let map = new daum.maps.Map(el, {
    //         center: new daum.maps.LatLng(35.157588, 129.058822)
    //     });
    // },[]);

    return(
        <div className="kakao">
            <div id="mapa"  style={{width:'500px',height:'400px'}}></div>
        </div>
    )
}


export default KakaoMap;
