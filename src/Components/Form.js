import React, {useRef} from 'react'

function Form () {

    let usernameRef = useRef();

    let submit = (e) =>{
        e.preventDefault();
        console.log(usernameRef.current.value);
    }

    return (
        <>
            <form onSubmit={submit}>
                <input type="text" ref={usernameRef}/>
                <button type='submit'>Click</button>
            </form>
        </>
    )

}

export default Form;