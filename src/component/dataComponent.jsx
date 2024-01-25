import React  from 'react';


const dataArray = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 22 },
  ];
  
  const DataComponent = () => {
    return (
      <div>
        <h1>Data Rendering Example</h1>
        <ul>
          {dataArray.map(item => (
            <li key={item.id}>
              <strong>Name:</strong> {item.name}, <strong>Age:</strong> {item.age}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DataComponent;