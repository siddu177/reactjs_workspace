/* suppose creating multi level elements 
<div>parent
    <div> child
        <h1>first heading </h1>
        <h2>second heading </h2>
    <div>
<div>

*/
const header = React.createElement("div", {id:"heading"}, 
React.createElement("div", {id:"child1"}, [
    React.createElement("h1",{}, "h1 tag here"),
    React.createElement("h2", {}, "h2 tag goes here")
]));

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)
root.render(header);