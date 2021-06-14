import React from 'react'
import loading from "../../../img/lodading.gif";

export type PreloaderType = {

}

const Preloader = (props : any) => {
    return  <>
                <img src={loading}/>
            </>
}

export default Preloader