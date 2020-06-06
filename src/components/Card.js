import React from 'react';

const Card = ({name,id,email}) => {

    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='sax'src={`https://robohash.org/${id}?200*200 `}/>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;