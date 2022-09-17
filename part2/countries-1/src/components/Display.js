const Display = ({ data }) => {
  return (
    <div>
      <h1>{data[0].name.common}</h1>
      <p>
        capital {data[0].capital}
        <br></br>
        area {data[0].area}
      </p>
      <h3>languages:</h3>
      <ul>
        {Object.keys(data[0].languages).map((oneKey, i) => {
          return <li key={i}>{data[0].languages[oneKey]}</li>;
        })}
      </ul>
      <img src={data[0].flags.png} alt={"test"} width="150ppx" />
    </div>
  );
};

export default Display;
