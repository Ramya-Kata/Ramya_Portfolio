import { useState } from 'react';
import { FaComments } from 'react-icons/fa';
import ChatForm from './ChatForm';
import '../../styles/chat.css';

const ChatIconButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="chat-button"
        title="Chat with me"
      >
        <FaComments size={24} />
      </button>

      {open && <ChatForm onClose={() => setOpen(false)} />}
    </>
  );
};

export default ChatIconButton;
