"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-brand">
          <Image
            src="/logo.png"
            alt="Cortex Olympiad Logo"
            width={52}
            height={52}
            style={{ objectFit: "contain" }}
            priority
          />
          <div className="nav-brand-text">
            <span className="nav-cortex">CORTEX OLYMPIAD</span>
            <span className="nav-olympiad">UNIFIED OLYMPIAD PLATFORM</span>
            <span className="nav-motto">अभ्यासात् प्राप्यते दृष्टिः</span>
          </div>
        </Link>

        <ul className="nav-links">
          <li><Link href="/olympiads">Olympiads</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/student-stories">Student Stories</Link></li>
          <li><Link href="/cortex">Cortex</Link></li>
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        {menuOpen && (
          <div className="nav-mobile-menu">
            <Link href="/olympiads" onClick={() => setMenuOpen(false)}>Olympiads</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/student-stories" onClick={() => setMenuOpen(false)}>Student Stories</Link>
            <Link href="/cortex" onClick={() => setMenuOpen(false)}>Cortex</Link>
          </div>
        )}
      </nav>

      <style jsx global>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--navy);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 0 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
          gap: 1px;
        }
        .nav-cortex {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .nav-olympiad {
          font-size: 7.5px;
          color: var(--gold);
          letter-spacing: 3px;
          text-transform: uppercase;
          font-family: var(--font-inter), sans-serif;
        }
        .nav-motto {
          font-size: 9px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.5px;
          font-family: var(--font-playfair), Georgia, serif;
          font-style: italic;
          margin-top: 1px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 13.5px;
          font-family: var(--font-inter), sans-serif;
          font-weight: 500;
          letter-spacing: 0.2px;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: #fff; }
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .nav-hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: rgba(255,255,255,0.7);
          border-radius: 2px;
        }
        .nav-mobile-menu {
          position: absolute;
          top: 72px;
          left: 0;
          right: 0;
          background: var(--navy);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 20px 6%;
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 99;
        }
        .nav-mobile-menu a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 14px;
          padding: 6px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          font-family: var(--font-inter), sans-serif;
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
          .nav-cortex { font-size: 13px; }
          .nav-olympiad { display: none; }
          .nav-motto { display: none; }
        }
      `}</style>
    </>
  );
}
