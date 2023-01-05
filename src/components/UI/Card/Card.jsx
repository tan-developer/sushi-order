import style from "./Card.module.scss";

const Card = (props) => {

  return (
    <div style={props.style} className={`${style.Card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
