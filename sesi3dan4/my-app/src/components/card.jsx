import React from 'react';

const cardStyle = {
    backgroundColor:'green',
    padding:'30px'
}

function Card (props){
    return (
        <div className={cardStyle}
            //style={{'backgroundColor':'green', padding:"30px"}}
            >
            {props.title} by {props.userId}
        </div>
    )
}

export default Card