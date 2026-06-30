"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Send, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide a few more details"),
});

type FormValues = z.infer<typeof formSchema>;

const serviceOptions = [
  "Government Tender Management",
  "Bid Documentation",
  "Procurement Solutions",
  "Contract Administration",
  "Vendor Registration",
  "Project Consulting",
  "Logistics Support",
  "Supply Chain Management",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  async function onSubmit(data: FormValues) {
    // In production, replace with your API route / email provider integration.
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Consultation request:", data);
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-strong rounded-3xl p-10 text-center"
      >
        <CheckCircle2 className="text-emerald-light mx-auto mb-4" size={40} />
        <h3 className="font-display text-xl mb-2">Request received</h3>
        <p className="text-white/50 text-sm">
          Thank you for reaching out. A senior consultant will contact you within one
          business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-gold-light underline underline-offset-4"
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-strong rounded-3xl p-8 sm:p-10 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs uppercase tracking-wider text-white/40">Full Name</label>
          <input
            {...register("name")}
            className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold/50 transition-colors"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider text-white/40">Email Address</label>
          <input
            {...register("email")}
            className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold/50 transition-colors"
            placeholder="john@company.com"
          />
          {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs uppercase tracking-wider text-white/40">Phone Number</label>
          <input
            {...register("phone")}
            className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold/50 transition-colors"
            placeholder="+1 234 567 8900"
          />
          {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider text-white/40">Company (optional)</label>
          <input
            {...register("company")}
            className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold/50 transition-colors"
            placeholder="Company name"
          />
        </div>
      </div>

      <div>
        <label className="text-xs uppercase tracking-wider text-white/40">Service Needed</label>
        <select
          {...register("service")}
          defaultValue=""
          className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold/50 transition-colors"
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((s) => (
            <option key={s} value={s} className="bg-ink-900">
              {s}
            </option>
          ))}
        </select>
        {errors.service && <p className="text-xs text-red-400 mt-1">{errors.service.message}</p>}
      </div>

      <div>
        <label className="text-xs uppercase tracking-wider text-white/40">Project Details</label>
        <textarea
          {...register("message")}
          rows={4}
          className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold/50 transition-colors resize-none"
          placeholder="Tell us about your tender or procurement needs..."
        />
        {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold-gradient text-ink-950 font-medium rounded-xl py-4 flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-300 disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={18} /> Sending...
          </>
        ) : (
          <>
            Submit Request <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
