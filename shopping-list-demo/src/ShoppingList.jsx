import ShoppingListItems from "./ShoppingListItems"

export default function ShoppingList({items}) {
    return (
        <ul>
            {items.map((i) => (
                <ShoppingListItems 
                    key={i.id} 
                    {...i}
                />
            ))}
        </ul>    
    )
}