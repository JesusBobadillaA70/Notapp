import React from 'react'

function H1( props ) {
  const { children } = props;
  return (
    <h1 className='h1' >
      {children}
    </h1>
  )
}

export default H1
