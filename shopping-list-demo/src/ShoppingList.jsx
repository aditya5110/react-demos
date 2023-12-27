import ShoppingListItems from "./ShoppingListItems"

export default function ShoppingList({items}) {
    return (
        <ul>
            {items.map((i) => (
                <ShoppingListItems 
                    id={i.id} 
                    item={i.item} 
                    qty={i.qty} 
                    completed={i.completed}    
                />
            ))}
        </ul>    
    )
}