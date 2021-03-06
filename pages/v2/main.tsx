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
                            <span className="hcs-app-healthcheck-state">자가진단이 완료되었습니다.</span>
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
                        <h1 className="hcs-body-item-title">자가진단상태</h1>
                        <a href="/v2/survey" className="hcs-state-list hcs-normal">
                            <h4 className="hcs-state">
                                <span className="hcs-state-body">
                                    <span className="uk-margin-small-flip" uk-icon="check"></span>
                                    <span className="hcs-state-text">정상</span>
                                </span>
                            </h4>
                            <span className="hcs-state-userinfo">홍길동님 (00:00)</span>
                        </a>
                    </div>
                    <div className="hcs-body-item">
                        <div className="hcs-news-list">
                            <h1 className="hcs-body-item-title">전달사항</h1>
                            <ul>
                                <li>
                                    <span className="news-item-title">새로운 자가진단 사용 안내</span>
                                    <span className="news-item-additional">
                                        <span className="uk-badge news-item-additional-status notread">읽지않음</span> 
                                        <span className="news-item-additional-regdate">2021-03-01</span>
                                    </span>
                                </li>
                                <li>
                                    <span className="news-item-title">등교 안내</span>
                                    <span className="news-item-additional">
                                        <span className="uk-badge news-item-additional-status reading">읽음</span> 
                                        <span className="news-item-additional-regdate">2021-01-01</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
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