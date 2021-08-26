import React,  {useEffect} from 'react';

import File from './file';

import '../assets/css/sidebar.css';


const SideBar = (props) => {

    //  Adds click event to ever toggler caret in DOM
    useEffect(() => {

        let toggler = document.getElementsByClassName("caret");

        for (let i = 0; i < toggler.length; i++) {

            toggler[i].addEventListener("click", function() {
                this.parentElement.querySelector(".nested").classList.toggle("active");
                this.classList.toggle("caret-down");
            });
        }
    },[props.root.content])


    return (
        <section className="sidebar">
            <ul id="rootUl">
                <li><span className="caret">root folder</span>
                    <ul className="nested">
                        {
                            props.root.content.map((item, index) => item.type === 'folder' ? 
                                <li key={index}>
                                    <span className="caret">{item.name}</span>
                                    <ul className="nested">
                                        {item.content.folders ? item.content.folders.map((folder, id) => <li key={id}><span className="caret">{folder.name}</span><ul className="nested"></ul></li>) : null}
                                        {item.content.files.map((file, key) => <File key={key} index={key} item={file} />)}
                                    </ul>
                                </li> 
                            : null)}
                            {props.root.content.map((item, index) => typeof(item) === 'string' ? <File key={index} index={index} item={item} /> : null)
                        }            
                    </ul>
                </li>
            </ul>
        </section>
    )
  }

  export default SideBar;