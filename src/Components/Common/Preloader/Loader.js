import React from "react";
import './Loader.css'
import s from './Loader.css'

const Loader = () => (
    <div className={s.loaderWrapper}>
        <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
)
export default Loader;