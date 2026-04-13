"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function validate() {
    return name.trim() !== "" && /\S+@\S+\.\S+/.test(email) && message.trim() !== "";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return setStatus("error");
    setStatus("sending");

    // Placeholder: currently no backend — simulate success
    setTimeout(() => {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    }, 700);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl w-full p-8 bg-white border border-zinc-100">
      <h3 className="text-2xl font-heading font-bold uppercase mb-6">Contact Us</h3>

      <label className="block mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-dark-grey">Name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full border border-zinc-200 p-3"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-dark-grey">Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full border border-zinc-200 p-3"
          required
        />
      </label>

      <label className="block mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-dark-grey">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="mt-2 w-full border border-zinc-200 p-3"
          required
        />
      </label>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 uppercase font-bold tracking-widest text-[10px]"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
        {status === "sent" && <span className="text-sm text-green-600">Message sent. Thank you!</span>}
        {status === "error" && <span className="text-sm text-red-600">Please complete the form correctly.</span>}
      </div>
    </form>
  );
}
