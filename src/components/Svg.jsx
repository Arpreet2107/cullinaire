import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Description of SVG" />
    </div>
  );
};

export default MyComponent;
