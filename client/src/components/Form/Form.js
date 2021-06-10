import React from 'react';

function Form() {
    return (
        <div>
            <form>
                <input type='text' placeholder='name'/>
                <input type='text' placeholder='height'/>
                <input type='text' placeholder='weight'/>
                <input type='text' placeholder='life span'/>
                <input type='text' placeholder='temperament'/>
                <button>create</button>
            </form>
        </div>
    )
}

export default Form;
