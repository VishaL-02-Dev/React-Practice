import  RobotProfile  from '../assets/robot.png'
import UserProfile  from '../assets/user.png'

export function ChatMessage({ msg, sender }) {
  // const msg = props.msg;
  // const sender = props.sender;
  // const { msg, sender } = props;
  /*
  if (sender == 'robot') {
    return (
      <div>
        <img src="/robot.png" width="50" />
        {msg}
      </div>
    );
  }
  */

  return (
    <div className={sender === 'user' ? 'chat-msg-user' : 'chat-msg-robot'}>
      {sender === 'robot' && <img src={RobotProfile} className='chat-msg-prof' />}
      <div className="msg-text">
        {msg}
      </div>
      {sender === 'user' && <img src={UserProfile} className='chat-msg-prof' />}
    </div>
  );

}