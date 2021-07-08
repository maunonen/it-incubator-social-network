import React from 'react'
import loading from "../../../assets/img/loader.gif";

export type PreloaderType = {

}

const Preloader = (props : any) => {
    return  <>
                <img src={loading}/>
            </>
}

export default Preloader