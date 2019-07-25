import React from "react";
import { disintegrate } from "./thanos.js";
import "./thanos.scss";

export function withThanos(Component, callback) {
  const [show, setShow] = React.useState(true);
  const divRef = React.createRef();
  console.log(typeof Component);
  function handleClick(event) {
    disintegrate(divRef.current);
    setTimeout(() => {
      setShow(false);
      callback && callback();
    }, 1000);
  }
  function WrapperComponent() {
    return (
      <div ref={divRef} onClick={handleClick}>
        <Component />
      </div>
    );
  }

  if (show) return WrapperComponent;
  else return () => <span />;
}

export function Thanos({ children }) {
  const [show, setShow] = React.useState(true);
  const divRef = React.createRef();

  function getStateAndHelpers() {
    return {
      handleClick: function(callback) {
        disintegrate(divRef.current);
        setTimeout(() => {
          setShow(false);
          callback && callback();
        }, 1000);
      },
      show,
      setShow
    };
  }
  return <div ref={divRef}>{children(getStateAndHelpers())}</div>;
}
