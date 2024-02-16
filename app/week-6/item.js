export default function Item(props){
    return(
        <div>
            
            <h2 className="text-xl font-bold">{props.name}</h2>
            <p className="text-sm">Buy {props.quantity} in {props.category}</p>
        </div>
    )   
}