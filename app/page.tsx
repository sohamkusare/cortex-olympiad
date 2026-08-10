"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const classes = [
    "LKG / UKG","Class 1","Class 2","Class 3","Class 4","Class 5",
    "Class 6","Class 7","Class 8","Class 9","Class 10","Class 11","Class 12"
  ];

  const subjects = [
    "Mathematics","Science","English","General Knowledge","Physics",
    "Chemistry","Biology","Computer / Coding","Reasoning","Astronomy",
    "Social Science","Hindi","Drawing / Art"
  ];

  const subjectCards = [
    { subject: "Mathematics", emoji: "🔢", color: "linear-gradient(135deg,#1a3a6e,#2563eb)" },
    { subject: "Science", emoji: "🔬", color: "linear-gradient(135deg,#064e3b,#059669)" },
    { subject: "Coding & Cyber", emoji: "💻", color: "linear-gradient(135deg,#7c3aed,#a78bfa)" },
    { subject: "General Knowledge", emoji: "🌍", color: "linear-gradient(135deg,#9a3412,#f97316)" },
    { subject: "English", emoji: "📖", color: "linear-gradient(135deg,#1e3a5f,#0ea5e9)" },
    { subject: "Astronomy", emoji: "🌌", color: "linear-gradient(135deg,#3f1d1d,#dc2626)" },
    { subject: "Chemistry", emoji: "⚗️", color: "linear-gradient(135deg,#064e3b,#10b981)" },
    { subject: "Reasoning", emoji: "🧠", color: "linear-gradient(135deg,#1a3a6e,#6366f1)" },
  ];

  const whyCards = [
    {
      title: "Develop Problem Solving",
      body: "Olympiads encourage analytical thinking beyond standard classroom learning."
    },
    {
      title: "Early Exposure",
      body: "Students explore mathematics, science, language, reasoning and other disciplines at a deeper level."
    },
    {
      title: "Confidence Through Practice",
      body: "Preparing for Olympiads helps students build consistency, curiosity and academic confidence."
    },
    {
      title: "Recognition & Opportunities",
      body: "Many Olympiads provide certificates, scholarships and pathways to higher-level competitions."
    },
  ];

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="hero">
        <div className="hero-glow" />

        <p className="hero-platform">India&apos;s Unified Olympiad Platform</p>

        <h1 className="hero-h1">
          Access to Every<br />
          <em>Olympiad Opportunity.</em>
        </h1>

        <p className="hero-sub">
          Discover olympiads by class and subject — eligibility, schedules,
          official registration links, and preparation resources, all in one place.
        </p>

        <Link href="/olympiads" className="btn-hero">
          Explore Olympiads →
        </Link>
      </section>

      {/* ══ WHAT IS CORTEX OLYMPIAD ══ */}
      <section className="what-section">
        <div className="what-inner">
          <h2 className="what-h2">What is Cortex Olympiad</h2>
          <p className="what-sub">Built for the student who didn&apos;t know where to look.</p>

          <p className="what-body">
            In India, over 100 olympiad exams happen every year — covering mathematics,
            science, English, coding, reasoning, and more. But the information is
            scattered across dozens of websites.
          </p>
          <p className="what-body mt">
            Students miss deadlines. Parents don&apos;t know where to start. Teachers
            don&apos;t have time to research. Cortex Olympiad brings everything together —
            honestly, without manipulation, without ads.
          </p>

          <div className="what-points">
            <div className="what-point">
              <span className="wp-num">I</span>
              <div>
                <h4 className="wp-title">Discover</h4>
                <p className="wp-body">Browse every olympiad in India filtered by class and subject. No account needed.</p>
              </div>
            </div>
            <div className="what-point">
              <span className="wp-num">II</span>
              <div>
                <h4 className="wp-title">Track</h4>
                <p className="wp-body">Never miss a deadline. Registration dates, exam dates, result dates — always updated.</p>
              </div>
            </div>
            <div className="what-point">
              <span className="wp-num">III</span>
              <div>
                <h4 className="wp-title">Prepare</h4>
                <p className="wp-body">Find the right books and official resources — curated honestly, not by who paid the most.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SEARCH BLOCK ══ */}
      <section className="search-section">
        <h2 className="search-h2">Find the right olympiad.</h2>
        <p className="search-sub">
          Select a class and subject — we&apos;ll show every matching olympiad
          with full details, dates, and registration links.
        </p>
        <div className="search-block">
          <p className="search-label">Filter olympiads</p>
          <div className="search-row">
            <select
              className="search-select"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="">Select Class</option>
              {classes.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select
              className="search-select"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="">Select Subject</option>
              {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <Link
              href={`/olympiads?class=${encodeURIComponent(selectedClass)}&subject=${encodeURIComponent(selectedSubject)}`}
              className="search-btn"
            >
              Find Olympiads →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ══ */}
      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-num">100+</span>
          <span className="stat-label">Olympiads Listed</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">LKG–12</span>
          <span className="stat-label">All Classes</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">13+</span>
          <span className="stat-label">Subjects</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">Open</span>
          <span className="stat-label">Access</span>
        </div>
      </div>

      {/* ══ WHY OLYMPIADS MATTER ══ */}
      <section className="why-section">
        <h2 className="why-h2">Why Olympiads Matter</h2>
        <div className="why-grid">
          {whyCards.map((card) => (
            <div key={card.title} className="why-card">
              <h4 className="why-card-title">{card.title}</h4>
              <p className="why-card-body">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ IMAGE STRIP ══ */}
      <section className="strip-section">
        <span className="eyebrow">Olympiads for every student</span>
        <h2 className="strip-h2">From LKG to Class 12 — something for everyone.</h2>
        <div className="img-strip">
          {subjectCards.map((card) => (
            <Link
              key={card.subject}
              href={`/olympiads?subject=${encodeURIComponent(card.subject)}`}
              className="img-card"
              style={{ background: card.color }}
            >
              <span className="img-icon">{card.emoji}</span>
              <span className="img-label">{card.subject}</span>
            </Link>
          ))}
        </div>
        <p className="strip-hint">← Scroll to explore all subjects · 8 categories</p>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="how-section">
        <h2 className="how-h2">How Cortex Works</h2>
        <div className="how-grid">
          <div className="how-step">
            <span className="how-num">01</span>
            <div className="how-divider" />
            <h4 className="how-title">Select your class &amp; subject</h4>
            <p className="how-body">Choose from LKG to Class 12 and pick any subject — maths, science, English, coding, GK, and more.</p>
          </div>
          <div className="how-step">
            <span className="how-num">02</span>
            <div className="how-divider" />
            <h4 className="how-title">Discover matching olympiads</h4>
            <p className="how-body">See every olympiad that matches — with registration dates, eligibility, fees, exam pattern, and official links.</p>
          </div>
          <div className="how-step">
            <span className="how-num">03</span>
            <div className="how-divider" />
            <h4 className="how-title">Visit the official website</h4>
            <p className="how-body">We give you every detail and the official link. You register directly on the conducting body&apos;s website.</p>
          </div>
        </div>
      </section>

      {/* ══ QUOTES ══ */}
      <section className="quotes-section">
        <h2 className="quotes-h2">Why Cortex Exists</h2>
        <div className="quotes-grid">

          <div className="quote-card">
            <span className="quote-mark">&ldquo;</span>
            <p className="quote-text">
              A student from a small town has the same intellectual potential as a
              student from a metro. What they lack is access to the right information
              at the right time.
            </p>
            <div className="quote-author">
              <div className="quote-avatar">C</div>
              <div>
                <div className="quote-name">Cortex Olympiad</div>
                <div className="quote-detail">Why Cortex Was Built</div>
              </div>
            </div>
          </div>

          <div className="quote-card">
            <span className="quote-mark">&ldquo;</span>
            <p className="quote-text">
              Olympiads are not about winning. They are about discovering what your
              mind is capable of — and that discovery should be available to every
              student, not just the privileged few.
            </p>
            <div className="quote-author">
              <div className="quote-avatar">C</div>
              <div>
                <div className="quote-name">Cortex Olympiad</div>
                <div className="quote-detail">Platform Philosophy</div>
              </div>
            </div>
          </div>

          <div className="quote-card">
            <span className="quote-mark">&ldquo;</span>
            <p className="quote-text">
              अभ्यासात् प्राप्यते दृष्टिः — Through practice, insight is attained.
              Not through shortcuts. Not through marks alone. Through sustained,
              honest effort.
            </p>
            <div className="quote-author">
              <div className="quote-avatar">C</div>
              <div>
                <div className="quote-name">Cortex Olympiad</div>
                <div className="quote-detail">Platform Motto</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <style jsx global>{`

        /* HERO */
        .hero {
          background: var(--navy);
          padding: 88px 6% 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .hero-glow {
          position: absolute;
          top: -30%; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(232,160,32,0.055) 0%, transparent 68%);
          pointer-events: none;
        }
        .hero-platform {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          letter-spacing: 1px;
          margin-bottom: 16px;
          font-family: var(--font-inter), sans-serif;
        }
        .hero-h1 {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(36px, 5.5vw, 62px);
          font-weight: 700;
          color: #fff;
          line-height: 1.13;
          max-width: 820px;
          margin: 0 auto 20px;
          letter-spacing: -0.5px;
        }
        .hero-h1 em {
          font-style: normal;
          color: var(--gold);
        }
        .hero-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.58);
          max-width: 560px;
          margin: 0 auto 40px;
          line-height: 1.78;
        }
        .btn-hero {
          display: inline-block;
          padding: 14px 38px;
          background: var(--gold);
          color: var(--navy);
          font-size: 15px;
          font-weight: 700;
          border-radius: var(--radius-sm);
          text-decoration: none;
          letter-spacing: 0.3px;
          transition: background 0.2s, transform 0.15s;
          font-family: var(--font-inter), sans-serif;
        }
        .btn-hero:hover {
          background: #d4911a;
          transform: translateY(-1px);
        }

        /* WHAT IS */
        .what-section {
          background: #fff;
          padding: var(--section-padding);
        }
        .what-inner { max-width: 700px; }
        .what-h2 {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(26px, 3.5vw, 36px);
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 10px;
          line-height: 1.2;
        }
        .what-sub {
          font-size: 18px;
          font-weight: 500;
          color: #374151;
          margin-bottom: 24px;
          line-height: 1.5;
          font-family: var(--font-inter), sans-serif;
        }
        .what-body {
          font-size: 15px;
          color: #374151;
          line-height: 1.85;
          margin: 0;
        }
        .what-body.mt { margin-top: 16px; }
        .what-points {
          display: flex;
          flex-direction: column;
          gap: 28px;
          margin-top: 40px;
        }
        .what-point {
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }
        .wp-num {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
          min-width: 32px;
          padding-top: 2px;
        }
        .wp-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 5px;
          font-family: var(--font-inter), sans-serif;
        }
        .wp-body {
          font-size: 14px;
          color: #374151;
          line-height: 1.72;
          margin: 0;
        }

        /* SEARCH */
        .search-section {
          background: var(--navy);
          padding: var(--section-padding);
          text-align: center;
        }
        .search-h2 {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }
        .search-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.52);
          max-width: 480px;
          margin: 0 auto 36px;
          line-height: 1.75;
        }
        .search-block {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-lg);
          padding: 28px 30px;
          max-width: 680px;
          margin: 0 auto;
          text-align: left;
        }
        .search-label {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 14px;
          font-family: var(--font-inter), sans-serif;
        }
        .search-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .search-select {
          flex: 1;
          min-width: 150px;
          padding: 12px 16px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: var(--radius-sm);
          color: #fff;
          font-size: 14px;
          font-family: var(--font-inter), sans-serif;
          cursor: pointer;
          appearance: none;
        }
        .search-select option { background: var(--navy); }
        .search-btn {
          padding: 12px 28px;
          background: var(--gold);
          color: var(--navy);
          border-radius: var(--radius-sm);
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s;
          display: inline-flex;
          align-items: center;
          font-family: var(--font-inter), sans-serif;
        }
        .search-btn:hover { background: #d4911a; }

        /* STATS */
        .stats-bar {
          background: var(--navy-mid);
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 24px 6%;
          display: flex;
          justify-content: center;
          gap: 56px;
          flex-wrap: wrap;
        }
        .stat-item { text-align: center; }
        .stat-num {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 26px;
          font-weight: 700;
          color: var(--gold);
          display: block;
          line-height: 1;
        }
        .stat-label {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-top: 6px;
          display: block;
          font-family: var(--font-inter), sans-serif;
        }

        /* WHY OLYMPIADS MATTER */
        .why-section {
          background: #fff;
          padding: var(--section-padding);
        }
        .why-h2 {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 36px;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          max-width: 1100px;
        }
        .why-card {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px 22px;
          border-top: 3px solid var(--gold);
        }
        .why-card-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 10px;
          font-family: var(--font-inter), sans-serif;
        }
        .why-card-body {
          font-size: 14px;
          color: #374151;
          line-height: 1.72;
          margin: 0;
        }

        /* IMAGE STRIP */
        .strip-section {
          background: var(--bg2);
          padding: 72px 0 56px;
          overflow: hidden;
        }
        .strip-section .eyebrow,
        .strip-h2 { padding: 0 6%; }
        .strip-h2 {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 32px;
          line-height: 1.25;
        }
        .img-strip {
          display: flex;
          gap: 18px;
          padding: 6px 6% 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .img-strip::-webkit-scrollbar { display: none; }
        .img-card {
          flex-shrink: 0;
          width: 240px;
          height: 170px;
          border-radius: 13px;
          scroll-snap-align: start;
          display: flex;
          align-items: flex-end;
          padding: 16px;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          transition: transform 0.2s;
        }
        .img-card:hover { transform: translateY(-3px); }
        .img-icon {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -62%);
          font-size: 58px;
          opacity: 0.22;
          line-height: 1;
        }
        .img-label {
          position: relative;
          z-index: 2;
          font-size: 12px;
          font-weight: 600;
          color: #fff;
          background: rgba(0,0,0,0.38);
          padding: 5px 11px;
          border-radius: 6px;
          font-family: var(--font-inter), sans-serif;
        }
        .strip-hint {
          padding: 8px 6% 0;
          font-size: 12px;
          color: var(--slate);
        }

        /* HOW IT WORKS */
        .how-section {
          background: var(--bg);
          padding: var(--section-padding);
        }
        .how-h2 {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 48px;
        }
        .how-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 48px;
          max-width: 960px;
        }
        .how-num {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 44px;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
          display: block;
          margin-bottom: 16px;
        }
        .how-divider {
          width: 36px; height: 2px;
          background: var(--gold);
          opacity: 0.55;
          margin-bottom: 16px;
        }
        .how-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 10px;
          font-family: var(--font-inter), sans-serif;
        }
        .how-body {
          font-size: 14px;
          color: #374151;
          line-height: 1.75;
          margin: 0;
        }

        /* QUOTES */
        .quotes-section {
          background: var(--bg2);
          padding: var(--section-padding);
        }
        .quotes-h2 {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 40px;
        }
        .quotes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px,1fr));
          gap: 24px;
        }
        .quote-card {
          background: #fafaf8;
          border: 1px solid var(--border);
          border-radius: 13px;
          padding: 30px;
          position: relative;
        }
        .quote-mark {
          position: absolute;
          top: 16px; left: 24px;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 60px;
          color: var(--gold);
          line-height: 1;
          opacity: 0.32;
        }
        .quote-text {
          font-size: 14px;
          color: #1e293b;
          line-height: 1.82;
          margin-top: 26px;
          font-style: italic;
        }
        .quote-author {
          margin-top: 22px;
          display: flex;
          align-items: center;
          gap: 13px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }
        .quote-avatar {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: var(--navy);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 14px;
          font-weight: 700;
          color: var(--gold);
          flex-shrink: 0;
        }
        .quote-name {
          font-size: 13px;
          font-weight: 700;
          color: var(--navy);
          font-family: var(--font-inter), sans-serif;
        }
        .quote-detail {
          font-size: 11px;
          color: var(--slate);
          margin-top: 2px;
          font-family: var(--font-inter), sans-serif;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .how-grid { grid-template-columns: 1fr; gap: 36px; }
          .search-row { flex-direction: column; }
          .stats-bar { gap: 28px; }
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
