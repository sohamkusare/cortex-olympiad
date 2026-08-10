"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-grid">

          {/* Brand column */}
          <div className="footer-brand">
            <div className="footer-cortex">Cortex Olympiad</div>
            <span className="footer-olympiad">Unified Olympiad Platform</span>
            <p className="footer-tagline">
              India&apos;s unified directory of olympiad exams — free, honest,
              and built for every student from LKG to Class 12.
            </p>
            <a href="mailto:hello@cortexolympiad.in" className="footer-email">
              hello@cortexolympiad.in
            </a>
          </div>

          {/* Olympiads column */}
          <div className="footer-col">
            <h5>Olympiads</h5>
            <ul>
              <li><Link href="/olympiads">All Olympiads</Link></li>
              <li><Link href="/olympiads?filter=class">By Class</Link></li>
              <li><Link href="/olympiads?filter=subject">By Subject</Link></li>
              <li><Link href="/olympiads?subject=Mathematics">Mathematics</Link></li>
              <li><Link href="/olympiads?subject=Science">Science</Link></li>
              <li><Link href="/olympiads?subject=Coding">Coding</Link></li>
            </ul>
          </div>

          {/* Platform column */}
          <div className="footer-col">
            <h5>Platform</h5>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about#mission">Our Mission</Link></li>
              <li><Link href="/about#philosophy">Philosophy</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Legal column */}
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© 2026 Cortex Olympiad. Made in India 🇮🇳</p>
          <p className="footer-disclaimer">
            Information sourced from official olympiad websites. Verify all details
            before registering. Cortex Olympiad is an independent directory, not
            affiliated with any olympiad conducting body.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        .footer {
          background: var(--navy);
          padding: 56px 6% 32px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

        .footer-cortex {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .footer-olympiad {
          font-size: 9px;
          color: var(--gold);
          letter-spacing: 4px;
          text-transform: uppercase;
          display: block;
          margin-top: 3px;
          margin-bottom: 16px;
        }

        .footer-tagline {
          font-size: 13px !important;
          color: rgba(255, 255, 255, 0.4) !important;
          line-height: 1.72 !important;
          max-width: 260px;
          margin-bottom: 0 !important;
        }

        .footer-email {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          display: block;
          margin-top: 16px;
          transition: color 0.2s;
        }

        .footer-email:hover {
          color: var(--gold);
        }

        .footer-col h5 {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.3);
          margin-bottom: 20px;
          font-weight: 500;
          font-family: var(--font-inter), sans-serif;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-col ul a {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.52);
          text-decoration: none;
          transition: color 0.2s;
          font-family: var(--font-inter), sans-serif;
        }

        .footer-col ul a:hover {
          color: #fff;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 12px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .footer-bottom p {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.25);
          font-family: var(--font-inter), sans-serif;
          line-height: 1.5;
        }

        .footer-disclaimer {
          font-size: 11px !important;
          color: rgba(255, 255, 255, 0.2) !important;
          max-width: 500px;
          text-align: right;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
          .footer-disclaimer {
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </>
  );
}
