"use client";

import { siteConfig } from "@/lib/data";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import ContactForm from "./contact-form";
import { MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-ink-900">
      <div className="section-px container-prose">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's discuss your next tender"
          description="Schedule a consultation with our team and discover how we can help you win your next contract."
        />

        <div className="grid lg:grid-cols-5 gap-10 mt-16">
          <div className="lg:col-span-3">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Reveal delay={0.1}>
              <div className="glass rounded-2xl p-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="text-gold-light shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-medium">Office Address</p>
                    <p className="text-white/45 text-sm mt-1">{siteConfig.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-gold-light shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a href={`tel:${siteConfig.phone}`} className="text-white/45 text-sm mt-1 hover:text-white">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-gold-light shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-white/45 text-sm mt-1 hover:text-white">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-gold-light shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-medium">Business Hours</p>
                    <p className="text-white/45 text-sm mt-1">{siteConfig.hours}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald hover:bg-emerald-light text-white rounded-2xl py-4 transition-colors duration-300 font-medium"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="glass rounded-2xl overflow-hidden h-56">
                <iframe
                  title="Office location map"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Blue+Area+Islamabad&output=embed"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
