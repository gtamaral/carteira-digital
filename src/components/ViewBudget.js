import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Carteira: R${props.budget}</span>
			<button type='button' className='btn btn-primary' onClick={props.handleEditClick}>
				editar
			</button>
		</>
	);
};

export default ViewBudget;