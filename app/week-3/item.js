
export default function Item(props){
    return(
        <div className="ml-4">
            <h2 className="text-green-500">{props.name}
            </h2>
            <p className="text-xs">
                {props.quantity}, {props.category}
            </p>
        </div>
    )   
}