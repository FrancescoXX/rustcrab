import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import confetti from 'canvas-confetti';

export default function SubstackCustom() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await fetch('https://substackapi.com/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, domain: 'francescociulla.substack.com' }),
    });

    setIsLoading(false);

    if (response.ok) {
      setIsSubscribed(true);
      setEmail('');
      setMessage("We've sent you a confirmation email. Please click the link to complete your signup!");
      triggerConfetti();
    } else {
      const data = await response.json();
      alert(data.error || 'Subscription failed. Please try again.');
    }
  };

  const triggerConfetti = () => {
    const end = Date.now() + 3 * 1000;

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#f97316', '#f59e0b', '#ef4444'],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#f97316', '#f59e0b', '#ef4444'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <div className="w-full max-w-md mx-auto my-8">
      <form onSubmit={handleSubmit} className={`flex flex-col items-center ${isLoading ? 'form-glow' : ''}`}>
        <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
          Join 2400+ Rust Devs. Subscribe to get exclusive stuff
        </label>
        <div className="flex w-full group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-2 border-4 bg-transparent text-gray-900 dark:text-white focus:outline-none rounded-l-md transition-colors duration-300"
            style={{
              borderColor: '#f97316', // Orange border
              borderRight: 'none',
            }}
          />
          <button
            type="submit"
            className={`px-4 py-2 text-white rounded-r-md transition duration-300 flex items-center justify-center
              ${isSubscribed ? 'bg-gradient-to-r from-orange-500 to-orange-700' : 'bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-yellow-600'}
              group-hover:border-red-500 cursor-pointer`}
            disabled={isLoading || isSubscribed}
            style={{
              borderRadius: '0 0.375rem 0.375rem 0',
              minWidth: '120px', // Ensures the button width does not change when showing the checkmark
            }}
          >
            {isSubscribed ? <FaCheck /> : isLoading ? <span className="spinner"></span> : 'Subscribe'}
          </button>
        </div>
      </form>
      {message && (
        <p className="mt-4 text-center text-green-500 font-medium">
          {message}
        </p>
      )}
    </div>
  );
}
