import React, {useContext, useEffect, useState} from 'react'

//components
import ExpenseItem from './ExpenseItem';

//context and provider
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {

    const {expenses} = useContext(AppContext);

    const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);
    
    useEffect(() => {
      setFilteredExpenses(expenses);
    }, [expenses])

    const handleChange = (e) => {
      const searchResults = expenses.filter((filteredExpense) => filteredExpense.name.toLowerCase().includes(e.target.value))
      setFilteredExpenses(searchResults)
    }


  return (
    <>
      <input 
        type='text'
        className='form-control mb-2 mr-sm-2'
        placeholder='Procure um gasto...'
        onChange={handleChange}
      />
      <ul className='list-group mt-3 mb-3'>
          {filteredExpenses.map((expense) => (
              <ExpenseItem
              id={expense.id} 
              name={expense.name}
              cost={expense.cost}     
              key={expense.id}
              />
          ))}
      </ul>
    </>
  )
}

export default ExpenseList;