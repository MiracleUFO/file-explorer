import React from 'react';

import Main from './main';
import Folders from '../constants/folders';
import Files from '../constants/files';


export const Wrapper = () => {

  let root = {content: []};
    
  let rootFolders = [
    ...Folders
  ]

  let rootFiles = [
    ...Files
  ]


  let buildRoot = () => {
    
    rootFiles.map(file => root.content.push(file));

    rootFolders.map(folder => root.content.push(folder));
  }

  
  buildRoot()

    return (
      <main>
        <Main root={root} />
      </main>
    )
  }