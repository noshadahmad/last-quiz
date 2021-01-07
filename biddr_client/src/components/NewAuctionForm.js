import React from 'react';
import { Auction } from '../FetchRequests'

const NewAuctionForm = (props) => {
  const { onSubmit } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = {
      title: formData.get('title'),
      body: formData.get('body')
    };
    onSubmit(params);
    event.currentTarget.reset();
  }

  return(
    <form className='auction-form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label>
        <br />
        <input name='title' id='title' />
      </div>
      <div>
        <label htmlFor='body'></label>
        <br />
        <textarea name='body' is='body' cols='60' rows='5'/>
      </div>
      <div>
      <label htmlFor='end'>Ends at</label>
      <br />
      <input name='end' is='body' cols='60' rows='5'/>
      </div>
      <div>
      <label htmlFor='price'>Price</label>
      <br />
      <input  name= 'price' type='number' />
      </div>
      <div>
        <input type='submit' value='Submit'/>
      </div>
    </form>
  );
};

export default NewAuctionForm;