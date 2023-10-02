export default function UserClick(){

    function clickHandler(){
        alert("Cliked!")
    }
    return(
        <>
        <div className="btn">
        <button onClick={clickHandler}>Click Me</button>
        </div>
       
        </>
    )
}