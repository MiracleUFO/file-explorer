import React,  {useState} from 'react';

import '../assets/css/file.css';


const File = (props) => {

    const [state, setState] = useState('');
    

    return (
        <li key={props.index} className="file" title={props.item}>{props.item}</li>
    )
  }

  export default File;

