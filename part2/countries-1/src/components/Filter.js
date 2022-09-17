const Filter = ({ value, onChange }) => {
  return (
    <form>
      <div>
        find countries{" "}
        <input id="filter" name="filter" value={value} onChange={onChange} />
      </div>
    </form>
  );
};

export default Filter;
