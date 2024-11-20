import React from 'react';
import ReactDOM from 'react-dom';

// React Element
const heading = React.createElement("h1", { id: "heading" }, "Hello Aftab! From CreateElement");

// JSX => Babel transpiles it to React.createElement => ReactElement-JS => JS Object => HTMLElement Render
const jsxHeading = <h1 id='heading'>Hello Aftab From JSX</h1>;



// React Functional Component
const Title = () => (
    <h1 className='head'>Hello From Functional Component2!</h1>
);

const HeadingComponent = () => (
    <div>
        {/* {Title()}
        <Title></Title> */}         
        <Title />
        <h1 id='heading'>Hello From Functional Component!</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
