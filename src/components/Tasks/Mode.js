import React from 'react';

const Mode = (props) => {
  return (
    <div className="btn-group mt-4">
      <button onClick={(e) => props.onclick(e)} type="button" className="btn btn-secondary active">Web</button>
      <button onClick={(e) => props.onclick(e)} type="button" className="btn btn-secondary">Editor</button>
    </div>
  );
}


export default Mode;