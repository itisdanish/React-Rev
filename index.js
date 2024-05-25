const div = document.getElementById("root");

const heading = React.createElement("h1", { id: "heading" }, "React JS");
const root = ReactDOM.createRoot(div);

root.render(heading);
