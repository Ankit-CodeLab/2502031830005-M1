import './index.css'

function Hello() {

    function getName() {

        return "Ankit"

    }

    function handleClick() {

        document.write('Get Out From Here!')

    }

    const handleInput = (event) => {

        console.log("Value :", event.target.value)

    }

    const isLoggedin = true;

    if (!isLoggedin) {

        return <p> User Logged in </p>

    } else {

    return (
    
    <>
        <h1>Hello {getName()}</h1>
        <h1>Logged In</h1>
        <button onClick={handleClick}>Don't Click</button>
        <button onClick={()=>{alert('GOOOOOOOOOOOOOOOOOOOOOOOOOOO')}} >Don't Click I Told</button>
        <input type="text" onChange={handleInput} placeholder='Type' />
        
    </>
    )
     }
} 

export default Hello