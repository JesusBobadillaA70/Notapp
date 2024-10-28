import React from 'react'

function HandleButton (){
    alert('Hello world !');
}

function Button( {type = 'success', onClick = HandleButton, children } ) {
  return (
    <button className={`btn btn-${type}`} onClick={onClick} >
      {children}    
    </button>
  )
}

export default Button
