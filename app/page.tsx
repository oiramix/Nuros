import React from "react";
import { ArrowRight, Shield, Database, Cpu, Bot, LineChart, Mail, CheckCircle2, Lock } from "lucide-react";

// Minimal, production-ready single-file landing component for nuros.ai
// TailwindCSS + modern aesthetic. Drop into a Next.js/CRA project.

const features = [
  {
    icon: <Database className="w-6 h-6" />, 
    title: "ScrapeKit Data Products",
    desc: "Clean, ready-to-use EU market datasets with emails, traffic estimates, and tech stacks. Updated monthly.",
    cta: { label: "Browse datasets", href: "#datasets" }
  },
  {
    icon: <Bot className="w-6 h-6" />, 
    title: "Nuros Agents (Beta)",
    desc: "Prebuilt AI agents for competitor watch, product research, and lead finding. Ship workflows in minutes.",
    cta: { label: "Join the beta", href: "#agents" }
  },
  {
    icon: <Cpu className="w-6 h-6" />, 
    title: "Grid (Coming Soon)",
    desc: "Privacy-first distributed compute with minute-level billing and EU-friendly compliance.",
    cta: { label: "Learn more", href: "#grid" }
  }
];

const datasets = [
  {
    title: "EU Shopify Stores — Home & Garden (3,000+)",
    price: "€99",
    bullets: [
      "Domain, brand, country, monthly traffic (est.)",
      "Emails (generic + role), tech stack, socials",
      "CSV + monthly refresh, sample included"
    ],
    href: "#buy-datasets"
  },
  {
    title: "Amazon EU Sellers — Home Appliances (1,500+)",
    price: "€99",
    bullets: [
      "Storefront link, brand, ASIN count, country",
      "Contact email (when public), website, socials",
      "CSV + monthly refresh, sample included"
    ],
    href: "#buy-datasets"
  }
];

const plans = [
  {
    name: "Starter",
    price: "€49/mo",
    desc: "Run 1 Agent with light usage",
    items: ["1 active agent", "5,000 tasks/mo", "Email/Slack outputs", "GDPR tooling"],
  },
  {
    name: "Studio",
    price: "€199/mo",
    desc: "For busy founders & agencies",
    items: ["5 active agents", "50,000 tasks/mo", "Webhooks + Sheets", "Priority support"],
    featured: true,
  },
  {
    name: "Scale",
    price: "€399/mo",
    desc: "For teams with pipelines",
    items: ["15 active agents", "200,000 tasks/mo", "API access", "SLA & SSO (add-on)"],
  },
];

export default function NurosLanding() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold text-xl tracking-tight">nuros<span className="text-purple-400">.ai</span></a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#datasets" className="hover:text-purple-300">Datasets</a>
            <a href="#agents" className="hover:text-purple-300">Agents</a>
            <a href="#security" className="hover:text-purple-300">Security & GDPR</a>
            <a href="#pricing" className="hover:text-purple-300">Pricing</a>
          </nav>
          <a href="#cta" className="inline-flex items-center gap-2 text-sm bg-purple-500 hover:bg-purple-400 text-neutral-900 font-semibold px-3 py-2 rounded-xl shadow">Get started <ArrowRight className="w-4 h-4"/></a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-transparent"/>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Ship faster with data and agents that actually *do work*.</h1>
            <p className="text-neutral-300 mt-5 text-lg">Nuros brings two things you need right now: clean EU datasets you can use today, and prebuilt AI agents that watch competitors, research products, and find leads—while respecting GDPR.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#datasets" className="inline-flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-400 text-neutral-900 font-semibold px-5 py-3 rounded-2xl">Buy a dataset <ArrowRight className="w-4 h-4"/></a>
              <a href="#agents" className="inline-flex items-center justify-center gap-2 border border-neutral-700 hover:border-neutral-500 px-5 py-3 rounded-2xl">Try Agents (Beta)</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-neutral-400">
              <span className="inline-flex items-center gap-2"><Shield className="w-4 h-4"/> GDPR-aware</span>
              <span className="inline-flex items-center gap-2"><Lock className="w-4 h-4"/> EU-friendly</span>
              <span className="inline-flex items-center gap-2"><LineChart className="w-4 h-4"/> ROI-first</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6" id="products">
        {features.map((f) => (
          <div key={f.title} className="bg-neutral-900/60 rounded-2xl p-6 border border-neutral-800 hover:border-neutral-700 transition">
            <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-4">{f.icon}</div>
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-neutral-300 text-sm mt-2">{f.desc}</p>
            <a href={f.cta.href} className="inline-flex items-center gap-2 text-sm mt-4 text-purple-300 hover:text-purple-200">{f.cta.label} <ArrowRight className="w-4 h-4"/></a>
          </div>
        ))}
      </section>

      {/* Datasets */}
      <section id="datasets" className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">ScrapeKit Data Products</h2>
          <p className="text-neutral-300 mt-2">Own the list. Sell to it. Two high-signal datasets to start—delivered as CSV with documentation and monthly refreshes.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {datasets.map((d) => (
              <div key={d.title} className="bg-neutral-900/60 rounded-2xl p-6 border border-neutral-800">
                <h3 className="font-semibold text-lg">{d.title}</h3>
                <p className="text-3xl font-bold mt-2">{d.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                  {d.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> {b}</li>
                  ))}
                </ul>
                <a href={d.href} className="inline-flex items-center gap-2 mt-5 text-sm text-purple-300 hover:text-purple-200">View sample & buy <ArrowRight className="w-4 h-4"/></a>
              </div>
            ))}
          </div>
          <div className="mt-6 text-xs text-neutral-400">Last update: 2025‑10‑03 · <span className="text-green-400">+43 new records</span>, date range extended to 2025‑09‑28</div>
        </div>
      </section>

      {/* Agents */}
      <section id="agents" className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Nuros Agents (Beta)</h2>
          <p className="text-neutral-300 mt-2 max-w-3xl">Prebuilt workflows that scrape, analyze, and deliver results to your inbox or Slack. Start with Competitor Watch, Product Research, and Lead Finder. Zero DevOps. Cancel anytime.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {["Competitor Watch","Product Research","Lead Finder"].map((t) => (
              <div key={t} className="bg-neutral-900/60 rounded-2xl p-6 border border-neutral-800">
                <h3 className="font-semibold">{t}</h3>
                <p className="text-sm text-neutral-300 mt-2">Configured in minutes. Runs on schedule. Sends actionable outputs, not raw noise.</p>
                <a href="#pricing" className="inline-flex items-center gap-2 text-sm mt-4 text-purple-300 hover:text-purple-200">See pricing <ArrowRight className="w-4 h-4"/></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & GDPR */}
      <section id="security" className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3"><Shield className="w-7 h-7"/> Security & GDPR</h2>
            <ul className="mt-4 space-y-3 text-neutral-300 text-sm">
              <li className="flex gap-2"><Lock className="w-4 h-4 mt-1"/> Data minimization, purpose limitation, and opt-out controls built-in.</li>
              <li className="flex gap-2"><Lock className="w-4 h-4 mt-1"/> EU-hosted processing by default. DPA on request. DSAR helper included.</li>
              <li className="flex gap-2"><Lock className="w-4 h-4 mt-1"/> No selling of personal data. Clear deletion SLAs.</li>
            </ul>
          </div>
          <div className="bg-neutral-900/60 rounded-2xl p-6 border border-neutral-800">
            <h3 className="font-semibold">Compliance Quick Facts</h3>
            <div className="grid grid-cols-2 gap-4 text-sm mt-4">
              <div>
                <div className="text-neutral-400">Hosting</div>
                <div>EU by default</div>
              </div>
              <div>
                <div className="text-neutral-400">Data Processing</div>
                <div>On legit interest/contract</div>
              </div>
              <div>
                <div className="text-neutral-400">Data Exports</div>
                <div>None without consent</div>
              </div>
              <div>
                <div className="text-neutral-400">Deletion</div>
                <div>Within 30 days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Pricing that pays for itself</h2>
          <p className="text-neutral-300 mt-2">Simple, transparent plans. Upgrade or cancel anytime.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {plans.map((p) => (
              <div key={p.name} className={`rounded-2xl p-6 border ${p.featured ? "bg-neutral-900/80 border-purple-500" : "bg-neutral-900/60 border-neutral-800"}`}>
                <h3 className="font-semibold">{p.name}</h3>
                <div className="text-3xl font-bold mt-2">{p.price}</div>
                <p className="text-sm text-neutral-300 mt-1">{p.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                  {p.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> {it}</li>
                  ))}
                </ul>
                <a href="#cta" className="inline-flex items-center gap-2 mt-5 text-sm text-purple-300 hover:text-purple-200">Start free trial <ArrowRight className="w-4 h-4"/></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Ready to sell more, with less busywork?</h2>
            <p className="text-neutral-300 mt-2">Grab a dataset and spin up your first agent. You’ll have revenue-driving outputs in hours, not weeks.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#buy-datasets" className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-400 text-neutral-900 font-semibold px-5 py-3 rounded-2xl">Buy a dataset <ArrowRight className="w-4 h-4"/></a>
              <a href="#agents" className="inline-flex items-center gap-2 border border-neutral-700 hover:border-neutral-500 px-5 py-3 rounded-2xl">Join Agents beta</a>
            </div>
          </div>
          <form className="bg-neutral-900/60 rounded-2xl p-6 border border-neutral-800">
            <h3 className="font-semibold">Get product updates</h3>
            <p className="text-sm text-neutral-300 mt-1">No spam. Just launches and discount codes.</p>
            <div className="mt-4 flex gap-2">
              <input type="email" placeholder="you@company.com" className="flex-1 bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <button className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-400 text-neutral-900 font-semibold px-4 py-2 rounded-xl"><Mail className="w-4 h-4"/> Subscribe</button>
            </div>
            <p className="text-xs text-neutral-500 mt-2">By subscribing you agree to our <a href="#" className="underline">Privacy Policy</a>.</p>
          </form>
        </div>
      </section>

      <footer className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-400 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} nuros.ai · Built in the EU</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-neutral-200">Terms</a>
            <a href="#" className="hover:text-neutral-200">Privacy</a>
            <a href="#" className="hover:text-neutral-200">DPA</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
