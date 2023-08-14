import React, {useContext, useState} from 'react';

import { AppContext } from '../context/AppContext';

//components
import EditBudget from './EditBudget';
import ViewBudget from './ViewBudget';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: 'SET_BUDGET',
      payload: value,
    });
    setIsEditing(false);
  }

  return (
    <div className='alert alert-dark d-flex align-items-center justify-content-between p-2'>
        {isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				// For part 1 render component inline rather than create a seperate one
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
    </div>
    
  );
};

export default Budget;