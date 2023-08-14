import React, { useState, useContext} from 'react'

//context
import { AppContext } from '../context/AppContext';

//generate id
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
    const {dispatch} = useContext(AppContext)
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseFloat(cost)
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

        setName('');
        setCost('');
    }

  return (
    <form onSubmit={onSubmit}>
        <div className='row'>
            <div className='col-sm col-lg-4'>
                <label htmlFor='name'>Nome</label>
                <input
                 required="required" 
                 type='text' 
                 className='form-control' 
                 id='name'
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                  />
            </div>
            <div className='col-sm col-lg-4'>
                <label htmlFor="cost">Custo</label>
                <input
                 required='required'
                 type="text" 
                 className="form-control" 
                 id="cost" 
                 value={cost}
                 onChange={(e) => setCost(e.target.value)} />
            </div>
            <div className='row mt-3'>
            <div className='col-sm'>
                <button 
                 type='submit' 
                 className='btn btn-primary'>
                Submit
                </button>
            </div>
            </div>
        </div>
    </form>
  )
}

export default AddExpenseForm