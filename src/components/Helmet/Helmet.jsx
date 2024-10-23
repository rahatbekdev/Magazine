import PropTypes from "prop-types";

const Helmet = (props) => {
  document.title = "JS-13 _" + props.title; 
  
  return <div className="w-100">{props.children}</div>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired, // title должен быть строкой и обязательным
  children: PropTypes.node, // children может быть любым JSX контентом (React node)
};
export default Helmet;
