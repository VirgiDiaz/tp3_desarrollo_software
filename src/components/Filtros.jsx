export function Filtros({ filters, onFilterSelect }) {
    return (
      <div>
        {filters.map((filter) => (
          <div key={filter.id}>
            <h3>{filter.name}</h3>
            <ul>
              {filter.values.map((value) => (
                <li key={value.id}>
                  <button onClick={() => onFilterSelect(filter.id, value.id)}>
                    {value.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  