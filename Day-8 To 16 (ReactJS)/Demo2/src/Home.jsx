import { useNavigate } from "react-router-dom"

function Home() {

    const navigate = useNavigate();
      
    const goToAbout = () => {

        navigate('/about')

    }

    return (
        <>
        
            <h1>Home</h1>
            <button onClick={goToAbout}>Get To About</button>
        
        </>
    )

}

export default Home