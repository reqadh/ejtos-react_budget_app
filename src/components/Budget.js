
    import React, { useContext, useState } from 'react';
    import { AppContext } from '../context/AppContext';
    import currencySymbols from '../currencySymbols';
    
    
    const Budget = () => {
        const { budget, currency } = useContext(AppContext);
        const [newBudget, setNewBudget] = useState(budget);
        const upperLimit = 20000;
        const { expenses } = useContext(AppContext);

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        const handleBudgetChange = (event) => {
            const value = event.target.value;
            
            if (value < totalExpenses) {
                alert("You cannot reduce the budget value lower than the spending.");
                setNewBudget(totalExpenses); 
            } 
            else if (value > upperLimit) {
                alert("The value cannot exceed £20,000.");
                setNewBudget(upperLimit);
            } else {
                setNewBudget(value);
            }
        }
        return (
    <div className='alert alert-secondary'>
        <span>Budget: {currencySymbols[currency]}</span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
        );
    };
    export default Budget;
