import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import UIkit from 'uikit';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js"; 
import Icons from 'uikit/dist/js/uikit-icons'
import UsePageTitle from '../../components/usePageTitle'
import { stringify } from "querystring";

export default function Main() {
    UsePageTitle('로그인 페이지')

    useEffect(() => {
        UIkit.use(Icons)
    })

    return(
        <div className="uk-height-1-1 logon">
            <div className="uk-container">
                <header className="hcs-app-header">
                    <nav className="hcs-app-gnb">
                        <span className="uk-margin-small-left hcs-hambuger-menu" uk-icon="icon: menu; ratio: 2"></span>
                    </nav>
                    <div className="uk-clearfix"></div>
                    <div className="hcs-app-title">
                        <span className="hcs-app-title-body">
                            안녕하세요. 반갑습니다.<br/>
                            자가진단문항을 꼼꼼하게 답해주세요.
                        </span>
                    </div>
                </header>
                <div className="hcs-app-body">
                    <div className="hcs-body-item">
                        <h1 className="hcs-body-item-title">사용자정보</h1>
                        <ul className="hcs-userinfo">
                            <li>
                                <h4>학교명</h4>
                                <span>서울풍성초등학교</span>
                            </li>
                            <li className="hcs-userinfo-line">
                                <h4>성명</h4>
                                <div className="uk-clearfix"></div>
                                <span>홍길동님</span>
                            </li>
                            <li>
                                <h4>상태</h4>
                                <span>비인증</span>
                            </li>
                        </ul>
                    </div>
                    <div className="hcs-body-item">
                        <h1 className="hcs-body-item-title">자가진단문항</h1>
                        <form className="uk-form-stacked">
                        <div>
                            <p>
                                1. 학생 본인이 코로나-19가 의심되는 아래의 임상증상<sup>*</sup>이 있나요?<br/>
                                <sup>*</sup>(주요임상증상) 발열(37.5℃이상), 기침, 호흡곤란, 오한, 근육통, 두통, 인후통, 후각/미각소실<br/>
                                ※ 단 학교에서 선별진료소 검사결과(음성)을 확인 후 등교를 허용한 경우, 또는 선천성/만성질환(천식 등)으로 인한 증상인 경우 &#39;아니오&#39;를 선택하세요.
                            </p>
                            <div className="uk-margin uk-width-1-1 uk-align-center">
                                <label><input className="uk-radio" type="radio" name="q1" value="0" /> 아니오</label>
                                <label><input className="uk-radio" type="radio" name="q1" value="1" /> 예</label>
                            </div>
                        </div>
                        <div>
                            <p>
                                2. 학생 본인 또는 동거인이 코로나-19 진단검사를 받고 그 결과를 기다리고 있나요?<br/>
                                ※ 단 확진자와의 접촉 가능성 등으로 보건당국의 권고에 의해 검사한 것이 아닌 경우, <sup>*</sup>아니오를 선택하세요.<br/>
                                직업특성에 의한 정기검사, 대회참여 등 선제적 예방 목적
                            </p>
                            <div className="uk-margin uk-width-1-1 uk-align-center">
                                <label><input className="uk-radio" type="radio" name="q2" value="0" /> 아니오</label>
                                <label><input className="uk-radio" type="radio" name="q2" value="1" /> 예</label>
                            </div>
                        </div>
                        <div>
                            <p>
                                3. 학생 본인 또는 동거인이 방역당국에 의해 현재 자가격리가 이루어지고 있나요?<br/>
                                ※ 단 동거인이 자가격리 중인 경우에도 다음에 해당하는 경우는 &#39;아니오&#39;를 선택하세요.<br/>
                                ① 학생이 예방접종을 완료(2차접종 완료 후 2주 경과)한 경우 ② PCR 음성 통지를 받은 후 48시간이 지나지 않은 경우 <br/>③ 격리 통지를 받은 &#39;즉시&#39; 자가격리된 동거인과 접촉이 없었던 경우
                            </p>
                            <div className="uk-margin uk-width-1-1 uk-align-center">
                                <label><input className="uk-radio" type="radio" name="q3" value="0" /> 아니오</label>
                                <label><input className="uk-radio" type="radio" name="q3" value="1" /> 예</label>
                            </div>
                        </div>
                        <div className="uk-line">
                            <p>
                                4. 학생의 동거인 중 확진자가 있나요?<br/>
                                ※ 단 학생이 방역당국 지침에 따라 수동감시 대상이 된 경우 &#39;아니오&#39;를 선택하세요.<br/>
                                * 수동감시 요건: PCR검사 음성, 밀접접촉 당시 접종 완료, 무 증상 등 모두 충족 &lt;방역당국 접종 완료자 지침&gt;
                            </p>
                            <div className="uk-margin uk-width-1-1 uk-align-center">
                                <label><input className="uk-radio" type="radio" name="q4" value="0" /> 아니오</label>
                                <label><input className="uk-radio" type="radio" name="q4" value="1" /> 예</label>
                            </div>
                        </div>
                        <div className="uk-width-1-1">
                            <button className="uk-width-1-1 uk-button uk-button-default">제출</button>
                        </div>
                        </form>
                    </div>
                </div>
                <div className="uk-container gnb_menu">
                    <ul className="gnb_menu_body">
                        <li><a href="javascript:;">처음화면</a></li>
                        <li><a href="javascript:;">코로나확진자현황</a></li>
                        <li><a href="javascript:;">비밀번호변경</a></li>
                        <li><a href="javascript:;">로그아웃</a></li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
            .logon{position:relative;width:100%;height:100%;overflow:auto;background: rgb(238,238,238);
                background: linear-gradient(0deg, rgba(238,238,238,1) 50vh, rgba(0,172,193,1) 90vh);}
            .hcs-app-header{width:100%;height:auto !important;overflow:hidden;}
            .hcs-app-gnb{width:100%;padding:10px 0px;height:auto !important;overflow:hidden}
            .hcs-hambuger-menu{color:#fff;float:right;}
            .hcs-app-title{width:100%;height:160px;font-size:4.4vh;color:#fff;display:table;}
            .hcs-app-title-body{display:table-cell;vertical-align:middle;paddding:0px 0px;line-height:120%}
            .hcs-app-body{width:100%;height:auto !important;overflow:hidden;}
            .hcs-body-item{width:100%;height:auto !important;overflow:hidden;margin:15px 0px;background:#fff;padding:15px 20px;border-radius:0.5em;box-sizing:border-box}
            .hcs-body-item-title{font-size:1.4em;font-weight:600;margin:10px 0px}
            .hcs-state-list{width:calc(100% - 30px);display:table;padding:12px 16px;font-weight:500}
            .hcs-state-list a{display:block;}
            .hcs-userinfo{margin:0;padding:0;list-style:none;display:flex}
            .hcs-userinfo li{margin:0;padding:0px;padding:10px 15px;float:left;flex-grow:1;}
            .hcs-userinfo li.hcs-userinfo-line{border-left:1px solid #ccc;border-right:1px solid #ccc}
            .hcs-userinfo li > h4{margin:0;padding-top:5px;padding-bottom:5px;font-size:2vh;font-weight:600;}
            .hcs-userinfo li > span{display:block;font-size:2vh;margin:0;}
            h4.hcs-state{background:#fff;border-radius:50%;font-size:10pt;width:60px;height:60px;display:table;float:left;margin:0}
            h4.hcs-state > span.hcs-state-body{width:100%;height:100%;display:table-cell;vertical-align:middle;text-align:center}
            .hcs-state-text{display:block}
            .hcs-state-userinfo{float:left;margin-left:15px;line-height:200%;font-size:16pt;padding:10px 0px;color:#fff;letter-spacing:0.02em}
            .hcs-normal{background:#039be5}
            .hcs-warning{background:#ef5350}
            .hcs-wait{background:#f5f5f5}
            .gnb_menu{left:0;width:100%;height:calc(100% - 60px);margin-top:60px;top:0;top:0px;position:absolute;z-index:9999;background:rgba(0,0,0,.5);display:none}
            .gnb_menu_body{margin:0 auto;float:right;width:220px;height:100%;background:#fff;}
            .hcs-news-list ul{margin:0;padding:0;list-style:none}
            .hcs-news-list ul li{padding:6px 2px;border-bottom:1px solid #eee}
            .hcs-news-list ul li:last-child{border-bottom:0px}
            .hcs-news-list ul li span.news-item-title, .hcs-news-list ul li span.news-item-additional{display:block}
            .news-item-additional-status{padding:2px 10px;}
            .notread{background:#ab47bc}
            .reading{background:#42a5f5}
            .news-item-additional-regdate{display:inline-block;margin-left:10px;font-size:.8em;}
            .hcs-wait{background:#f5f5f5}
            `}</style>
        </div>
    );
}