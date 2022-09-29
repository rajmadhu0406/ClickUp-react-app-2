import React, { useEffect }  from 'react';

// import { useEffect } from "react";
const Close = () => {

    useEffect(()=>{
        // if(!window.localStorage.getItem('code')){
        //     var code = window.location?.search?.split('=')[1]
        //     window.localStorage.setItem('code',JSON.stringify(code))
        // }
    },[])

    return ( 
        <div>
            Hey this is a close page
        </div>
     );
}
 
export default Close;