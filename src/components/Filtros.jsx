import { ListGroup } from "react-bootstrap";

export function Filtros({ filters, onFilterSelect }) {
  return (
    <div className="accordion" id="acordeon">
      {filters.map((filter, index) => (
        <div key={filter.id} className="accordion-item">
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="true"
              aria-controls={`collapse${index}`}
            >
              <h6>{filter.name}</h6>
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
            data-bs-parent="#acordeon"
          >
            <div className="accordion-body">
              <ListGroup>
                {filter.values.map((value) => (
                  <button
                    key={value.id}
                    className="btn btn-outline-primary my-1"
                    onClick={() => onFilterSelect(filter.id, value.id)}
                  >
                    {value.name}
                  </button>
                ))}
              </ListGroup>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
