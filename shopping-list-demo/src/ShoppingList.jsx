export default function ShoppingList({items}) {
    return (
        <ul>
            {items.map((i) => (
                <li key = {i.id}
                    style={{
                    color : i.completed? "green" : "red",
                    textDecoration : i.completed? "line-through" : "none"
                    }}>
                     {i.item} - {i.qty}
                </li>
            ))}
        </ul>    
    )
}