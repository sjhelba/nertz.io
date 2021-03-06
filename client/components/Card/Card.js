import React from 'react';
import { CardFront, CardBack } from '../Card';

export const Card = (props) => {
  const {
    backgroundColor,
    isDragging,
    isFaceUp,
    stackPosition,
    playerInitials,
   } = props;

  const borderColor = stackPosition % 3 === 0 ? 'lightgray' : 'white'

  return (
    <div
      className="card-wrapper"
      style={{
        border: `1px solid ${borderColor}`,
        opacity: isDragging ? 0 : 1,
        transform: `translate(0px, ${stackPosition * -0.5}px)`,
        zIndex: stackPosition,
    }}>
      {isFaceUp
        ? <CardFront {...props} />
        : <CardBack initials={playerInitials} color={backgroundColor} />
      }
    </div>
  )
}

export default Card;

