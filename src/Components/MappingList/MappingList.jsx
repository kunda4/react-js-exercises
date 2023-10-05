export default function MappingList(){
    let myArr = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

    let myArrElement = myArr.map((elt)=> <li>{elt}</li>)
    return(
        <ul className="myList">
            {myArrElement}
        </ul>
    )
}