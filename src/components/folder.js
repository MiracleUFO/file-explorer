import React, {useEffect, useState} from 'react';

import '../assets/css/folder.css';
import FolderImage from '../assets/images/folder.png';
import FolderOpenImage from '../assets/images/folder-open.png';
import AddFolderImage from '../assets/images/add-folder.png';
import FileImage from '../assets/images/file.png';


const Folder = (props) => {

    const [folderState, setFolderState] = useState(props.folders);

    const [folderNameInput, setFolderName] = useState('');

    const [folderID, setFolderID] = useState(null)


    useEffect(() => {

        //  Adds toggle functionality to each folder to reveal its content on click
        let toggler = document.getElementsByClassName("folder-info");

        let folderFileArray = document.getElementsByClassName("folder-info");

        let rootAddFolder = document.getElementById("root-add-folder");

        let addFolderArray = document.getElementsByClassName("add-folder")

        for (let i = 0; i < toggler.length; i++) {

            toggler[i].addEventListener("click", () => {

                rootAddFolder.classList.toggle("add-folder-hide");

                for (let k = 0; k < folderFileArray.length; k++) {

                    if (folderFileArray[k] !== toggler[i]) {
                        folderFileArray[k].classList.toggle("folder-info-hide");
                    } else {
                        folderFileArray[k].firstChild.classList.toggle("folder-info-hide");
                        folderFileArray[k].childNodes[1].classList.toggle("openFolder-show");
                    }
                }

                toggler[i].nextElementSibling.classList.toggle("folder-content-show");
            });   
        }


        //  Reveals input field when add new folder icon is clicked
        for (let i = 0; i < addFolderArray.length; i++) {
            addFolderArray[i].addEventListener("click", function () {

                document.getElementById("input-form").classList.toggle("input-show");
                
                setFolderID(Number(this.dataset.index));
            })
        }    
    }, [props.folder]); 

    
    let handleSubmit = (e) => {

        e.preventDefault();

        if (folderNameInput) {

            let newFolder = {name: folderNameInput, type: 'folder'}

            if (folderID === 0) {
                setFolderState([...folderState, newFolder]);
            }  else {

                let oldState = [...folderState];

                if (!oldState[folderID].content?.folders) {
                    
                    let newProp = {folders: []}
                    oldState[folderID].content = {...oldState[folderID].content, ...newProp};
                }

                oldState[folderID].content.folders.push(newFolder);
                
                setFolderState([...oldState])
            }

            setFolderName('');

            e.target.value = '';

            document.getElementById("input-form").classList.toggle("input-show");
        }
        
    }
    

    return (
        <div className="wrapper">

            <form className="input-hide" id="input-form" onSubmit={handleSubmit}>
                <input onChange={e => setFolderName(e.target.value)} />
                <button>+</button>
            </form>
             
            <div className="wrapper-child" id="wrapper-child">
                {
                    folderState.map((content, index) => content.type === 'folder' ?
                    <div className="folder" key={index}>
            
                        <div className="folder-info">
                            <img src={FolderImage} alt="folder" title="Open folder" />
                            <img src={FolderOpenImage} alt="folder" title="Close Folder" className="openFolder" />
                            <p>{content.name}</p>
                        </div>
            
                        <ul className="folder-content">
                            {content.content?.files.map((file, index) => typeof(file) === 'string' ?
                                <li key={index} title={file}>
                                    <img src={FileImage} alt="file" />
                                    <p>{file}</p>
                                </li>   
                                : null
                            )}
                            {content.content?.folders ? 
                                content.content?.folders.map((folder, index) => folder.type === 'folder' ?
                                    <li key={index} title={folder.name}>
                                        <img src={FolderImage} alt="file" />
                                        <p>{folder.name}</p>
                                    </li>   
                                    : null
                                )
                                : null
                            }
                            <div className="add-folder" data-index={index}>
                                <img src={AddFolderImage} alt="file" />
                                <p>Add new folder</p>
                            </div>     
                        </ul>     
                    </div>
                    : <div key={index} className="folder-file folder-info" title={content}><img src={FileImage} alt="file" /><p>{content}</p></div> 
                    )
                }

                <div className="add-folder" id="root-add-folder" data-index="0">
                    <img src={AddFolderImage} alt="file" />
                    <p>Add new folder</p>
                </div>
            </div>
        </div>
    )
  }

  export default Folder;

