import React from 'react';

import NavBar from './navbar';
import SideBar from './sidebar';
import Folder from './folder';

import '../assets/css/main.css';


const Main = (props) => {

    return (
        <section>
            <NavBar />
            <section className="main-body-flex">
               <SideBar root={props.root} />
                <main className="main">
                   <Folder folders={props.root.content} />
                </main> 
            </section>    
        </section>
    )
  }

  export default Main;

  