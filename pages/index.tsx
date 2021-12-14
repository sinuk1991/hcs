import React, { useState } from "react";
import Head from "next/head";
import { 
  Container,
  Icon,
  Link,
  List,
  ListItem,
  Offcanvas,
  OffcanvasContainer,
  Navbar,
  NavbarContainer,
  NavbarSticky,
  Section,
} from 'uikit-react';
import UsePageTitle from './api/usePageTitle'

export default function Home() {
    UsePageTitle('1')
  return (
    <div className="container">
      test
    </div>
  );
}