'use client';
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import Spinner from "./ui/spinner";

export default function SubstackCustom() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://substackapi.com/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, domain: "francescociulla.substack.com" }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail("");
        setMessage(
          "We've sent you a confirmation email. Please click the link to complete your signup!"
        );
        triggerConfetti();
      } else {
        const data = await response.json();
        throw new Error(data.error || "Subscription failed. Please try again.");
      }
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setIsLoading(false);
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
    <div className="flex flex-col items-center space-y-6 w-full max-w-lg mx-auto  px-4 md:px-0">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-6 py-4 bg-background/50 border-[0.5px] border-muted-foreground/70 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 transition duration-300 placeholder:text-muted-foreground/80"
            required
          />

          <Button
            type="submit"
            variant="default"
            className="absolute  h-10 right-1 top-1 bottom-1 px-5 bg-gradient-to-r from-[#F5742E] to-[#D93A29] text-white rounded-full hover:opacity-90 transition duration-300 flex items-center justify-center"
            disabled={isLoading || isSubscribed}
          >
            {isSubscribed ? (
              <FaCheck />
            ) : isLoading ? (
              <Spinner />
            ) : (
              "Subscribe"
            )}
          </Button>
        </div>
      </form>
      {message && (
        <p className="text-center text-green-500 font-sans text-sm md:text-base">
          {message}
        </p>
      )}
    </div>
  );
}
