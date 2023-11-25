import React from 'react'
import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";

function Loader() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
  return (
    <div style={{marginTop:'150px'}}>
      <div className="sweet-loading text-center">
        <HashLoader color='#000' loading={loading} cssOverride='' size={80}/>
      </div>
    </div>
  )
}

export default Loader