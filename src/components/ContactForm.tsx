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
    <form onSubmit={handleSubmit} className="w-full">
      <h3 className="text-3xl font-heading font-bold uppercase tracking-tighter mb-12">Send an Enquiry</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
        <label className="block">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="mt-2 w-full border-b border-zinc-200 py-4 outline-none focus:border-black transition-colors text-sm font-medium placeholder:text-zinc-300"
            required
          />
        </label>

        <label className="block">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            className="mt-2 w-full border-b border-zinc-200 py-4 outline-none focus:border-black transition-colors text-sm font-medium placeholder:text-zinc-300"
            required
          />
        </label>
      </div>

      <label className="block mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project or enquiry..."
          rows={4}
          className="mt-2 w-full border-b border-zinc-200 py-4 outline-none focus:border-black transition-colors text-sm font-medium resize-none placeholder:text-zinc-300"
          required
        />
      </label>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
        <button
          type="submit"
          className="group relative flex items-center gap-4 bg-black text-white px-10 py-5 transition-all hover:bg-brand-red disabled:opacity-50"
          disabled={status === "sending"}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
            {status === "sending" ? "Sending…" : "Submit Request"}
          </span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        {status === "sent" && <span className="text-xs font-bold uppercase tracking-widest text-green-600">Message sent successfully.</span>}
        {status === "error" && <span className="text-xs font-bold uppercase tracking-widest text-brand-red">Error sending message.</span>}
      </div>
    </form>
  );
}
