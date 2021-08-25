import React,  {useState} from 'react';
import NavBar from './navbar';
import SideBar from './sidebar';
import '../assets/css/main.css';


const Main = (props) => {

    const [state, setState] = useState('');
    

    return (
        <section>
            <NavBar />
            <section className="main-body-flex">
               <SideBar root={props.root} />
                <main>
                    HI THERE 
                </main> 
            </section>    
        </section>
    )
  }

  export default Main;

  