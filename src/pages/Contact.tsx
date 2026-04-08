import SectionWrapper from "@/components/SectionWrapper";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <main className="pt-20">
      <SectionWrapper>
        <p className="text-xs tracking-[0.3em] text-df-gold font-sans uppercase mb-4">GET IN TOUCH</p>
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Contact Us</h1>
        <p className="text-lg text-foreground/60 font-sans max-w-2xl mb-16">
          Ready to transform your enterprise? Let's start a conversation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-6 mb-10">
              {[
                { icon: MapPin, label: "Hyderabad, Telangana, India" },
                { icon: Mail, label: "info@digitalfabric.group" },
                { icon: Phone, label: "+91 123 456 7890" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="text-foreground/80 font-sans text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl p-8">
            <h3 className="text-xl font-serif text-foreground mb-6">Send us a message</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 font-sans focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 font-sans focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 font-sans focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
              <button className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-3 rounded-lg text-sm font-sans transition-colors">
                Send Message <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Contact;
