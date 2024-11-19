const heading = React.createElement("div",{id:"heading"},
    [React.createElement("div",{},
        [React.createElement("h1",{},"Hello Aftab From H1 !"),
        React.createElement("h1",{},"Hello Aftab From H2!")])],
        
    React.createElement("div",{},
        [React.createElement("h1",{},"Hello Aftab From H3 !"),
        React.createElement("h1",{},"Hello Aftab From H4!")]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);







