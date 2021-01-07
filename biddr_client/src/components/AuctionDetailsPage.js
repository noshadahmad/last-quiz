import React from 'react';


const AuctionDetails = ({title, body, end}) =>
{
    return (
        <div>
            <p>
                {title}
            </p>
            <p>
                {body}
            </p>
        <p>{end}</p>
        </div>
    )
}
export default AuctionDetails