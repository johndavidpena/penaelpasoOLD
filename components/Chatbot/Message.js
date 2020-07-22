import BotStyles from './Bot.module.css';

const Message = props => {
  return (
    <div className={BotStyles.messageContainer}>

      {props.speaks === 'Peña' &&
        <div className={BotStyles.botMessage}>
          <div className={BotStyles.botText}>{props.text}</div>
          <div className={BotStyles.avatarBot}>{props.speaks}</div>
        </div>
      }


      {props.speaks === 'USER' &&
        <div className={BotStyles.userMessage}>
          <div className={BotStyles.avatarUser}>{props.speaks}</div>
          <div className={BotStyles.userText}>{props.text}</div>
        </div>
      }

    </div>
  );
}

export default Message;

/* BOT avatar */
// {
// props.speaks === 'bot' &&
//   <div className={BotStyles.avatarBot}>{props.speaks}</div>
// }

/* TEXT from BOT or USER */
/* <div className={BotStyles.message}>{props.text}</div> */

/* USER avatar */
// {
// props.speaks === 'me' &&
//   <div className={BotStyles.avatarUser}>{props.speaks}</div>
// }