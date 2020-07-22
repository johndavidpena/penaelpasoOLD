import BotHouseCardStyles from './BotHouseCard.module.css';

const Card = props => {

  return (
    <div className={BotHouseCardStyles.card}>
      <img className={BotHouseCardStyles.image} src={props.payload.fields.image.stringValue} alt={props.payload.fields.header.stringValue} />
      <span className={BotHouseCardStyles.header}>{props.payload.fields.header.stringValue}</span>
      <span className={BotHouseCardStyles.description}>{props.payload.fields.description.stringValue}</span>
      <a className={BotHouseCardStyles.link} href={props.payload.fields.link.stringValue}>See more</a>
      <span className={BotHouseCardStyles.price}>Price: {props.payload.fields.price.stringValue}</span>
    </div>
  );
}

export default Card;
