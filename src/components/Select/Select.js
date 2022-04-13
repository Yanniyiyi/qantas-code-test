const Select = ({ label= 'Sort By', options, onChange, id= 'select' }) => {
    return (
        <div>
          <label htmlFor="select" className="font-medium">{label} </label>
          <select
            aria-label={label}
            className="border"
            onChange={onChange}
            id={id}
            data-testid="select"
          >
            {options.map((option, index) => {
              const { value, name } = option;
              return (
                <option value={value} key={name + index}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
      );
}

export default Select;