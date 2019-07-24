import React from 'react';
import { disintegrate } from './thanos.js'
import "./thanos.scss"
import { callbackify } from 'util';
export default function (Component, callback) {
  const [show, setShow] = React.useState(true);
  const divRef = React.createRef();

  function handleClick(event) {
    disintegrate(divRef.current)
    setTimeout(() => {
      setShow(false);
    }, 1000);
    callback && callback()
  }
  function WrapperComponent() {
    return <div ref={divRef} onClick={handleClick}>
      <Component />
    </div>
  }


  if (show)
    return WrapperComponent
  else return () => <span></span>
}