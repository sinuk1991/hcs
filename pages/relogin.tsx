import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import UIkit from 'uikit';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js"; 
import Icons from 'uikit/dist/js/uikit-icons'
import UsePageTitle from './api/usePageTitle'
import { stringify } from "querystring";

export default function Relogin() {
    UsePageTitle('로그인 페이지')

    useEffect(() => {
        UIkit.use(Icons)
    })

    const inputPasswd = (event) => {
        if(event.keyCode <= 48 || event.keyCode >= 57) {
            return false;
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
                                <span className="uk-form-icon uk-form-icon-flip uk-icon" data-uk-icon="icon: lock"></span>
                                <input className="uk-input uk-border-pill" onKeyDown={(inputPasswd)} type="number" required placeholder="비밀번호"/>
                            </div>
                        </div>
                        <div className="uk-margin-bottom">
                            <button className="uk-button uk-button-primary uk-border-pill uk-width-1-1">
                                <span data-uk-icon="icon: sign-in"></span>&nbsp;
                                로그인
                            </button>
                        </div>
                    </fieldset>
                    <div className="uk-text-left">
                        <span className="hcs-app-infoicon" data-uk-icon="icon: question"></span>비밀번호 분실시 담당선생님께 문의하세요.
                    </div>
                </form>
            </div>
            <style jsx>{`
                .uk-input[type=number]{padding-left:20px;-webkit-text-security: disc;}
                .uk-form-icon-flip{right:5;right:5px;}
            `}</style>
        </div>
    );
}