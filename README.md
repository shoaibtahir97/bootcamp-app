# REACT BASICS

## INSTALLING REACT IN YOUR MACHINE

1).Open comand line and type:
    $ npm install -g create-react-app
2). Create a React application:
    $ create-react-app <folder name>
3).Starting React application in the server:
    $ npm start

## EXPLORING FOLDERS AND FILES OF APPLICATION

###### 1).public folder: It contains index.html file. We have a single html file which displays on the browser.

###### 2).src folder: This is the main folder which contains the most important files:

1).index.js: It is the most imporatant file. It is the parent component. It contains a virtual DOM which changes by its child components. 

2)App.js: It is the child component of index.js. All other child components are called to App.js

## Basic Structure of a file in React:

###### Exporting Files from Child component to Parent
Every file in React needs to be exported to the parent component. For example:
In app.js we write a command:

export default App; //This command exports the content present in the file    
                    // to its parent component which in the case is index.js

###### Importing Files into Parent component from Child 
Once you have exported a child component to the parent compnent it needs to be imported by  the parent. For.e.g : 
In index.js we write a command:

import <Component Name> from <File Name>;