import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import UIkit from 'uikit';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js"; 
import Icons from 'uikit/dist/js/uikit-icons'
import usePageTitle from './api/usePageTitle'

export default function login() {
    usePageTitle('로그인 페이지')
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
      };
    useEffect(() => {
        UIkit.use(Icons)
    })

    const inputRef = useRef(null);

    const handleCheck = (e) => {
        if(window.confirm("시스템 저장에 동의하십니까?\n저장되는 항목: 이름, 학교명, 진단항목, 진단일") == false) {
            e.target.checked=false;
            inputRef.current.disable=true;
        } else {
            e.target.checked=true;
            inputRef.current.disabled=false;
        }
    }

    return(
        <div className="uk-container uk-height-1-1 ">
            <div className="uk-position-center">
                <form>
                    <article className="uk-article hcs-app-header">
                        <img className="hcs-app-logo" src="/assets/images/logo.png"></img>
                        <h1 className="uk-article-title hcs-app-title">건강상태 자가진단</h1>
                        <p className="uk-article-meta hcs-app-subtitle">Health condition self-check</p>
                    </article>
                    <fieldset className="uk-fieldset">
                        <div className="uk-margin-small">
                            <div className="uk-inline uk-width-1-1">
                                <span className="uk-form-icon uk-form-icon-flip uk-icon" data-uk-icon="icon: location"></span>
                                <input className="uk-input uk-border-pill" type="text" required placeholder="학교명"/>
                            </div>
                        </div>
                        <div className="uk-margin-small">
                            <div className="uk-inline uk-width-1-1">
                                <span className="uk-form-icon uk-form-icon-flip uk-icon" data-uk-icon="icon: user"></span>
                                <input className="uk-input uk-border-pill" type="text" required placeholder="학생성명"/>
                            </div>
                        </div>
                        <div className="uk-margin-small">
                            <label>
                                <input className="uk-checkbox" type="checkbox" onChange={(handleCheck)}/>
                                &nbsp;시스템 이용동의
                            </label>
                        </div>
                        <div className="uk-margin-bottom">
                            <button disabled className="uk-button uk-button-primary uk-border-pill uk-width-1-1" ref={inputRef}>
                                <span data-uk-icon="icon: sign-in"></span>&nbsp;
                                로그인
                            </button>
                        </div>
                    </fieldset>
                    <div className="uk-text-left">
                        <span className="hcs-app-infoicon" data-uk-icon="icon: info"></span>시스템에 저장되는 항목<br/>
                        <span className="hcs-app-infotip">이름, 학교명, 진단항목, 진단일</span>
                    </div>
                </form>
            </div>
        </div>
    );
}