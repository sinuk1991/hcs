import * as React from 'react';
import Router from "next/router";
import Login from './v2/login'

export default function Home(){
  
  return (
  Router.push("/v2/login")
    )
}