import './employees-list-item.css';

const EmployeesListItem = (props) => {
  const { name, salary, onDelete, onToggleProp, increase, rise} = props;


  let classNames = 'list-group-item d-flex justify-content-between';
  if (increase) {
    classNames += ` increase`;
  }

  if (rise) {
    classNames += ` like`;
  }

  return (
    <li className={classNames}>
      <button className='list-group-item-label' type='button' onClick={onToggleProp} data-toggle='rise' aria-pressed={rise}>
        {name}
      </button>
      <span className='list-group-item-input'>{salary}$</span>
      <div className='d-flex justify-content-center align-items-center'>
        <button
          type='button'
          className='btn-cookie btn-sm'
          aria-label={`Toggle raise status for ${name}`}
          aria-pressed={increase}
          onClick={onToggleProp}
          data-toggle="increase"
        >
          <i className='fas fa-cookie'></i>
        </button>

        <button onClick={onDelete} type='button' className='btn-trash btn-sm' aria-label={`Delete ${name}`}>
          <i className='fas fa-trash'></i>
        </button>
        <i className='fas fa-star'></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
