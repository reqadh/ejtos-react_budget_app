import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti'; // Importing TiPlus and TiMinus
import { AppContext } from '../context/AppContext';
import currencySymbols from '../currencySymbols'; 

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext); 

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = () => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: {
                name: props.name,
                cost: 10,
            },
        });
    }

    const decreaseAllocation = () => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: {
                name: props.name,
                cost: 10,
            },
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currencySymbols[currency]}{props.cost}</td>
            <td className="text-center">
                <button 
                    onClick={increaseAllocation} 
                    className="btn btn-success rounded-circle"
                    style={{ width: '30px', height: '30px', padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <TiPlus size='1.5em' />
                </button>
            </td>
            <td className="text-center">
                <button 
                    onClick={decreaseAllocation} 
                    className="btn btn-danger rounded-circle"
                    style={{ width: '30px', height: '30px', padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <TiMinus size='1.5em' />
                </button>
            </td>
            <td className="text-center">
                <TiDelete size='1.5em' onClick={handleDeleteExpense} style={{cursor: 'pointer', color: 'red'}} />
            </td>
        </tr>
    );
};

export default ExpenseItem;
