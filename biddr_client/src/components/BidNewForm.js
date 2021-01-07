import React from 'react';


const FormForBid = (props) => {
    const { onsubmit } = props;
    const myFunc = (event) =>{
        event.preventDefualt();
        const formData = new FormData(event.currentTarget);
        const params = {
          body: formData.get('body')
        };
        onsubmit(params);
        event.currentTarget.reset();

    }
    return(
        <form className='form-data' onSubmit={myFunc}>
            <div>
                <label htmlFor='body'>body</label>
                <input name='body' is='body' cols='20' rows= '1'></input>
                <input type='submit' value='Bids'></input>
            </div>

        </form>
    )

}
export default FormForBid