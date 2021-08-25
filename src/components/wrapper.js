import React from 'react';
import Main from './main';
import Folders from '../constants/folders';
import Files from '../constants/files';


export const Wrapper = (props) => {
    
  class TreeNode {
    constructor(value) {
      this.value = value;
      this.content = [];
    }
  }

  let root = new TreeNode('root');
  
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

  buildRoot();

    return (
      <main>
        <Main root={root} />
      </main>
    )
  }