import { FC, FormEvent, useState } from 'react';
import Confetti from 'react-confetti';


export const Contact: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3333/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      if (response.ok) {
        setSuccess('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        setError('');
        setShowConfetti(true);
        setTimeout(() => { setShowConfetti(false);}, 10000); 
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to send message. Please try again later.');
    }
  }

  return (
    <section
     id="contact" 
     className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">GET IN TOUCH</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          If you have any questions, feel free to reach out!
        </p>
        <div className="max-w-lg mx-auto">
          {showConfetti && (
            <Confetti
              numberOfPieces={200}
              gravity={0.2}
            />
          )}
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Billy Joe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-600"
            />
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-600"
            />
            <textarea
              placeholder="Message....."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-600 h-32"
            ></textarea>
            {success && <p className="text-green-500 text-center">{success}</p>}
            <button
              type="submit"
              className="bg-green-600 px-6 py-3 rounded-md hover:bg-green-700 transition"
            >
              CONTACT ME
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;