import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img
                alt={`Robot ${name}`}
                src={`https://robohash.org/${id}?300x300`}
                srcSet={`https://robohash.org/${id}?300x300 300w, https://robohash.org/${id}?600x600 600w`}
                sizes="(max-width: 600px) 50vw, 300px"
                width="300"
                height="300"
                loading="lazy"
                decoding="async"
                style={{ display: 'block', objectFit: 'cover' }}
            />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;