import React from 'react'
import './loc.css'
import { Select, Option } from '@material-tailwind/react'
import Carousel from '../../Carousel'
import DropdownButton from "./Drop";
function Loc() {
  return (
    <>
      
      
      <div id="loccontainer">
        <h2 id="lochead">LOCATIONS</h2>

        <p id="loctext">
          We handpick locations that offer seamless connectivity, unmatched
          return on investments, in a neighborhood that is truly one-of-a-kind.
        </p>

        <h2 id="locSearch">SEARCH PROPERTIES</h2>
<DropdownButton></DropdownButton>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Loc
