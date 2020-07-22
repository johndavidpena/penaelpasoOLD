import { Component } from 'react';
import axios from 'axios/index';
import Cookies from 'universal-cookie';
import { v4 as uuid } from 'uuid';
import BotStyles from './Bot.module.css';
import BotHouseCardStyles from './BotHouseCard.module.css';
import Message from './Message';
import Card from './Card';
import QuickReplies from './QuickReplies';

const cookies = new Cookies();

class Chatbot extends Component {
  messagesEnd;
  talkInput;

  constructor(props) {
    super(props);

    this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
    this._handleQuickReplyPayload = this._handleQuickReplyPayload.bind(this);

    this.state = {
      messages: []
    }

    if (cookies.get('userID') === undefined) {
      cookies.set('userID', uuid(), { path: '/' });
    }
    // console.log('userID:', cookies.get('userID'));
  }

  async df_text_query(text) {
    let says = {
      speaks: 'USER',
      msg: {
        text: {
          text: text
        }
      }
    };

    this.setState({ messages: [...this.state.messages, says] });

    try {
      const res = await axios.post('/api/df_text_query', { text: text, userID: cookies.get('userID') });

      for (let msg of res.data.fulfillmentMessages) {
        // console.log(JSON.stringify(msg));

        says = {
          speaks: 'Peña',
          msg: msg
        }
        this.setState({ messages: [...this.state.messages, says] });
      }
    } catch (e) {
      says = {
        speaks: 'Peña',
        msg: {
          text: {
            text: "I'm having troubles. I need to terminate. Please check back later, I'll be better, promise!"
          }
        }
      }
      this.setState({ messages: [...this.state.messages, says] });
      // TODO: Add the showBot functionality
      // let that = this;
      // setTimeout(function () {
      //   that.setState({ showBot: false });
      // }, 2000);
    }
  }

  async df_event_query(event) {
    try {
      const res = await axios.post('/api/df_event_query', { event: event, userID: cookies.get('userID') });

      for (let msg of res.data.fulfillmentMessages) {
        let says = {
          speaks: 'Peña',
          msg: msg
        }
        this.setState({ messages: [...this.state.messages, says] });
      }
    } catch (e) {
      let says = {
        speaks: 'Peña',
        msg: {
          text: {
            text: "I'm having troubles. I need to terminate. Please check back later, I'll be better, promise!"
          }
        }
      }
      this.setState({ messages: [...this.state.messages, says] });
      // TODO: Add the showBot functionality
      // let that = this;
      // setTimeout(function () {
      //   that.setState({ showBot: false });
      // }, 2000);
    }
  }

  componentDidMount() {
    this.df_event_query('Welcome');
  }

  componentDidUpdate() {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
    if (this.talkInput) {
      this.talkInput.focus();
    }
  }

  // TODO: Remove quickReply after user chooses a reply (see lecture 59)
  _handleQuickReplyPayload(event, payload, text) {
    event.preventDefault();
    event.stopPropagation();

    switch (payload) {
      case 'training_masterclass':
        this.df_event_query('MASTERCLASS');
        break;
      default:
        this.df_text_query(text);
        break;
    }
  }

  renderCards(cards) {
    return cards.map((card, i) => <Card key={i} payload={card.structValue} />);
  }

  renderOneMessage(message, i) {
    if (message.msg && message.msg.text && message.msg.text.text) {
      return <Message key={i} speaks={message.speaks} text={message.msg.text.text} />;
    } else if (message.msg && message.msg.payload && message.msg.payload.fields && message.msg.payload.fields.cards) {
      return (
        <div key={i} className={BotHouseCardStyles.container}>
          {/* <div className={BotStyles.avatarBot}>
              {message.speaks}
            </div> */}
          <div className={BotHouseCardStyles.containerScroll}>
            <div style={{ marginLeft: '1rem', height: 300, width: message.msg.payload.fields.cards.listValue.values.length * 270 }}>
              {this.renderCards(message.msg.payload.fields.cards.listValue.values)}
            </div>
          </div>
        </div>
      );
    } else if (message.msg && message.msg.payload && message.msg.payload.fields &&
      message.msg.payload.fields.quick_replies) {
      return <QuickReplies
        text={message.msg.payload.fields.text ? message.msg.payload.fields.text : null}
        key={i}
        replyClick={this._handleQuickReplyPayload}
        speaks={message.speaks}
        payload={message.msg.payload.fields.quick_replies.listValue.values} />;
    }
  }

  renderMessages(stateMessages) {
    if (stateMessages) {
      return stateMessages.map((message, i) => {
        return this.renderOneMessage(message, i);
      });
    } else {
      return null;
    }
  }

  _handleInputKeyPress(e) {
    if (e.key === 'Enter') {
      this.df_text_query(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <div className={BotStyles.botContainer}>
        <div id="chatbot" className={BotStyles.chatbot}>
          {/* <h2>&nbsp;</h2> */}

          {this.renderMessages(this.state.messages)}

          <div
            ref={el => this.messagesEnd = el}
            style={{ float: 'left', clear: 'both' }} />
        </div>

        <input
          type="text" onKeyPress={this._handleInputKeyPress}
          className={BotStyles.input}
          ref={input => this.talkInput = input} placeholder='Type a message'
        />
      </div>
    );
  }
}

export default Chatbot;
