import React, {useEffect, useState} from 'react';

import '../assets/css/folder.css';
import FolderImage from '../assets/images/folder.png';
import FolderOpenImage from '../assets/images/folder-open.png';
import FileImage from '../assets/images/file.png';


const Folder = (props) => {

    const [folderState] = useState(props.folders)

    useEffect(() => {

        let toggler = document.getElementsByClassName("folder-info");

        let folderFileArray = document.getElementsByClassName("folder-info");

        for (let i = 0; i < toggler.length; i++) {

            toggler[i].addEventListener("click", function() {

                for (let k = 0; k < folderFileArray.length; k++) {

                    if (folderFileArray[k] !== toggler[i]) {
                        folderFileArray[k].classList.toggle("folder-info-hide");
                    } else {
                        folderFileArray[k].firstChild.classList.toggle("folder-info-hide");
                        folderFileArray[k].childNodes[1].classList.toggle("openFolder-show");
                    }
                }

                this.nextElementSibling.classList.toggle("folder-content-show");
            });
        }

    }, [props.folder]); 
    

    return (
        folderState.map((content, index) => content.type === 'folder' ?
        <div className="folder" key={index}>

            <div className="folder-info">
                <img src={FolderImage} alt="folder" title="Open folder" />
                <img src={FolderOpenImage} alt="folder" title="Close Folder" className="openFolder" />
                <p>{content.name}</p>
            </div>

            <ul className="folder-content">
                {content.content.files.map((file, index) => typeof(file) === 'string' ?
                    <li key={index}>
                        <img src={FileImage} alt="file" />
                        <p>{file}</p>
                        </li>  
                    : null
                )}     
            </ul>     
        </div>
        : <div key={index} className="folder-file folder-info"><img src={FileImage} alt="file" /><p>{content}</p></div> 
        )
    )
  }

  export default Folder;

