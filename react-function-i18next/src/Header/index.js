import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {useTranslation, withTranslation} from "react-i18next";

function Index(props) {
    const onChangeLan = (e) => {
        localStorage.setItem('lang', e.target.value);
        props.onChangeLanMain(e.target.value);
        setlang(e.target.value);
        //window.location.reload();
    }
    const [lang, setlang] = useState("vn");
    useEffect(() => {
        setlang(localStorage.getItem('lang') || 'vn');
        
    }, [lang])
    return (

        <nav className="container mb-4 mt-4">
            <div className="row">
                <div className="col-10">
                </div>
                <div className="col-2">
                    <select className="custom-select my-1 mr-sm-2 pull-right" onChange={onChangeLan} value={lang}>
                        <option value="vn">Viet Nam</option>
                        <option value="en">English</option>
                    </select>
                </div>

            </div>
        </nav>
    )
}



export default Index

