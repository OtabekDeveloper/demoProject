import { useState } from 'react'
function ChangeColor() {

    const [online, setOnline] = useState(false)
    const onGetState = () => {
       setOnline(navigator.onLine)
    }

    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-md-3">
                    <button className='btn btn-primary' onClick={() => onGetState()}>Chacked online</button>
                    {
                        online?<h1>You Are Online 😊</h1>:<h1>Chacke your wifi😬</h1>
                    }
                </div>
            </div>

        </>
    )
}

export default ChangeColor