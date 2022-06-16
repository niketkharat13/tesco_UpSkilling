import React, {useEffect, useLayoutEffect} from 'react';
import useScreenStorage from './useScreenStorage'
const LayoutEffect = (props) => {
    let a= useScreenStorage()
    console.log(a);
    
    
    // useLayoutEffect(() => {
    // }, []);
    return (
        <>
        </>
    )
    }
    export default LayoutEffect;