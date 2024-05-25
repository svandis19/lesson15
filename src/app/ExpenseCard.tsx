
const ExpenseCard = ({ name, cost }: { name: string, cost: number }) => {
    console.log('name', name);
    return (
        <div className="border 1px solid #eee mb-3 p-5">
            <h1>{name}</h1>
            <p>{cost}</p>
        </div>
    )
}

export default ExpenseCard;