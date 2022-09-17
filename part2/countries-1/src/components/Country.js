import React, { useEffect, useState } from "react";
import Display from "./Display";

const Country = ({ countries }) => {
  if (countries.length > 10) {
    return (
      <div>
        <p>Too many</p>
      </div>
    );
  } else if (countries.length < 10 && countries.length != 1) {
    return countries.map((i) => (
      <div>
        <p>{i.name.common}</p>
      </div>
    ));
  } else if (countries.length === 1) {
    return (
      <div>
        {/*        <h1>{countries[0].name.common}</h1> */}
        <Display data={countries} />
      </div>
    );
  }
};

export default Country;
