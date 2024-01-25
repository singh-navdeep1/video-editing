import React from 'react'


const Card = () => {
    const data = [
      { id: 1, title: 'Card 1', content: 'Content for Card 1' },
      { id: 2, title: 'Card 2', content: 'Content for Card 2' },
      { id: 3, title: 'Card 3', content: 'Content for Card 3' },
    ];
  
    return (
      <div>
        <h1>Card UI Example</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {data.map(card => (
            <div key={card.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px', width: '200px' }}>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Card;