function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerText = reactElement.children;

  /*
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  */
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "www.google.com",
    target: "_blank",
  },
  children: "Click Me to Visit",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
