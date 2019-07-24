import React from "react"
import withThanos from './ThanosEffect'
function App(props) {
  const Thanos = withThanos(
    function () { return <div><img src="https://www.sideshow.com/product-asset/903429/feature" alt="thanos" width='50' height='50' style={{ display: 'block' }} />should be disapeare</div> }
  )
  return (
    <div>
      <Thanos />
    </div>
  );
}
export default App;
