import React from "react";
import { withThanos, Thanos } from "./ThanosEffect";
function App(props) {
  // with hoc api
  const Thanoswith = withThanos(function() {
    return (
      <div>
        <img
          src="https://www.sideshow.com/product-asset/903429/feature"
          alt="thanos"
          width="50"
          height="50"
          style={{ display: "block" }}
        />
        should be disapeare
      </div>
    );
  });
  //with render props api
  const RenderProps = () => (
    <Thanos>
      {({ handleClick }) => (
        <div>
          should fade when you click
          <button onClick={() => handleClick()}>fade</button>
        </div>
      )}
    </Thanos>
  );

  return (
    <div>
      <Thanoswith />
      <RenderProps />
    </div>
  );
}
export default App;
