import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import confetti from "canvas-confetti";
import { Loader2 } from "lucide-react";

export default function SubstackCustom() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await fetch("https://substackapi.com/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, domain: "francescociulla.substack.com" }),
    });

    setIsLoading(false);

    if (response.ok) {
      setIsSubscribed(true);
      setEmail("");
      setMessage(
        "We've sent you a confirmation email. Please click the link to complete your signup!",
      );
      triggerConfetti();
    } else {
      const data = await response.json();
      alert(data.error || "Subscription failed. Please try again.");
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
        colors: ["#f97316", "#f59e0b", "#ef4444"],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#f97316", "#f59e0b", "#ef4444"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <div className="w-full max-w-md mx-auto my-8">
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col  items-center ${isLoading ? "form-glow" : ""}`}
      >
        <label
          htmlFor="email"
          className="block text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Join 2600+ Rust Devs. Subscribe to get exclusive stuff
        </label>
        <div className="flex w-full   justify-center group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-sm lg:text-base flex-1 px-4 py-2 border-2 bg-white dark:bg-[#121212] text-gray-900 dark:text-white focus:outline-none rounded-l-full transition-colors duration-300"
            style={{
              borderColor: "#f97316", // Orange border
              borderRight: "none",
            }}
          />
          <button
            type="submit"
            className={`px-4 py-2 text-white rounded-r-full transition duration-300 flex items-center justify-center
              ${isSubscribed ? "bg-gradient-to-r from-orange-500 to-orange-700" : "bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-yellow-600"}
              group-hover:border-red-500 cursor-pointer min-w-[100px] lg:min-w-[120px] text-sm lg:text-base`}
            disabled={isLoading || isSubscribed}
          >
            {isSubscribed ? (
              <FaCheck />
            ) : isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
      </form>
      {message && (
        <p className="mt-4 text-center text-green-500 font-medium">{message}</p>
      )}
    </div>
  );
}
