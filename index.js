const div = document.getElementById("root");
const div2 = document.getElementById("title");

const heading = React.createElement("h1", { id: "heading" }, "React JS");

// React Element
const jsxheading = <h1 className="title">JSX Heading</h1>;

// React Component
// React Functional component
// const student = ["one", "Two", "Three", "Four"];
const HeadingComponent = () => {
  return (
    <div className="container">
      <h1 className="title" id="btn">
        JSX Functional Heading
        <Text />
        <li>test</li>
      </h1>
    </div>
  );
};

const Nav = () => {
  return (
    <div>
      <button id="btn2">Home</button>
      <button id="btn2">Menu</button>
      <button id="btn2">About us</button>
      <button id="btn2">Contact</button>
    </div>
  );
};

const Title = () => <button id="btn">Press Title</button>;

const Text = () => <h4>Latest Updates</h4>;

const root = ReactDOM.createRoot(div);
const root2 = ReactDOM.createRoot(div2);

root.render(<Title />);
root2.render(
  <>
    <Nav />
    <HeadingComponent />
  </>
);
