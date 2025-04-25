import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../../styles/chat.css';

const ChatForm = ({ onClose }: { onClose: () => void }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Attempting to send form:', form); // 👈 Add this
  console.log('Using service:', import.meta.env.VITE_EMAILJS_SERVICE_ID);

    if (!form.email.includes('@') || !form.email.includes('.')) {
      alert("Please enter a valid email address.");
      return;
    }

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      onClose();
    })
    .catch(() => {
      alert("❌ Failed to send message. Please try again later.");
    });
  };

  return (
    <div className="chat-form">
      <form onSubmit={handleSubmit}>
        <h2>Send a message</h2>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={3}
          required
          onChange={handleChange}
        />
        <div className="form-actions">
          <button type="submit">Send</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ChatForm;
