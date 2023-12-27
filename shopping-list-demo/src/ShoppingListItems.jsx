export default function ShoppingListitems({key, item, qty, completed}) {
    const styles = {
        color : completed ? "green" : "red",
        textDecoration : completed ? "line-through" : "none"
    } 
    return(
        <li style={styles}>
            {item} - {qty}
        </li>
    );
}