import { useEffect, useState } from 'react'
import { Expense, api } from './api'
import ExpenseCard from './ExpenseCard'

const Expenses = () => {
    const [expenses, setExpenses] = useState<Expense[]>()

    const fetchExpenses = async () => {
        const fetchedExpenses = await api.getExpenses()
        setExpenses(fetchedExpenses)
    }
    useEffect(() => {
        fetchExpenses()
    }, [])

    if (!expenses) {
        return <p>Loading...</p>
    }

    const handleDelete = (id: number) => {
        api.deleteExpense(id)
    }

    return (
        <div className='m-10'>
            <div className='mb-4'>
                <p onClick={() => handleDelete(1 /*add correct id */)}>
                </p>
                {expenses.map(expense => (

                    < ExpenseCard key={expense.id} name={expense.name} cost={expense.cost} />
                ))}
            </div>
        </div>
    )
}

export default Expenses