import React from 'react';
import FormForBid from './BidNewForm'

const BidDetials = (props) =>{
    const AllBids = props.AllBids


    return (
    
        
             <ul>
                {AllBids.map( bid => {
                return(

                    <li key={bid.id}>

                        <FormForBid 
                            id={bid.id}
                            body={bid.body}
                            create_at={bid.created_at}
                        />
                </li>

                )
                })}
       
            
            </ul>

        
    )

}
