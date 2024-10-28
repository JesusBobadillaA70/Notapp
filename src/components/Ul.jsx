import React from 'react';

import Button from './Button';

function Ul(props) {
  const { data, onClick } = props;

  return (
    <ul className='list-group list-group-numbered'>
      {data.map(element => {
        return (
          <li
            className={`list-group-item ${( element.important ) ? 'bg-warning' : 'bg-secondary'}`}
            id={`${element.id}`}
            key={element.id}
          >
            {element.content} 
            <Button 
              children={( element.important ) ? `No es tan imporante` : `Si es tan importante`}
              type='light'
              onClick={ () => onClick( element.id ) }
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Ul;
