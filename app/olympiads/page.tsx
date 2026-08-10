"use client";

import { useState } from "react";
import Link from "next/link";

const classes = [
  "LKG / UKG","Class 1","Class 2","Class 3","Class 4","Class 5",
  "Class 6","Class 7","Class 8","Class 9","Class 10","Class 11","Class 12"
];

const subjects = [
  "Mathematics","Science","English","General Knowledge","Physics",
  "Chemistry","Biology","Computer / Coding","Reasoning","Astronomy",
  "Social Science","Hindi","Drawing / Art"
];

const subjectColors: Record<string, string> = {
  "Mathematics": "#2563eb",
  "Science": "#059669",
  "English": "#0ea5e9",
  "General Knowledge": "#f97316",
  "Physics": "#7c3aed",
  "Chemistry": "#10b981",
  "Biology": "#16a34a",
  "Computer / Coding": "#6366f1",
  "Reasoning": "#1d4ed8",
  "Astronomy": "#dc2626",
  "Social Science": "#ca8a04",
  "Hindi": "#db2777",
  "Drawing / Art": "#ea580c",
};

const subjectEmojis: Record<string, string> = {
  "Mathematics": "🔢",
  "Science": "🔬",
  "English": "📖",
  "General Knowledge": "🌍",
  "Physics": "⚛️",
  "Chemistry": "⚗️",
  "Biology": "🧬",
  "Computer / Coding": "💻",
  "Reasoning": "🧠",
  "Astronomy": "🌌",
  "Social Science": "🗺️",
  "Hindi": "📝",
  "Drawing / Art": "🎨",
};

// ── SAMPLE DATA (replace with Airtable API later) ──
const sampleOlympiads = [
  {
    slug: "sof-imo-2026-27",
    name: "SOF — International Mathematics Olympiad (IMO)",
    conducting_body: "Science Olympiad Foundation",
    subject: "Mathematics",
    eligible_classes: "Class 1 to 12",
    academic_year: "2026–27",
    who_can_apply: "School Only",
  },
  {
    slug: "silverzone-iom-2026-27",
    name: "Silverzone — International Olympiad of Mathematics (IOM)",
    conducting_body: "Silverzone Foundation",
    subject: "Mathematics",
    eligible_classes: "Class 3 to 12",
    academic_year: "2026–27",
    who_can_apply: "School Only",
  },
  {
    slug: "ito-imo-2026-27",
    name: "ITO — International Mathematics Olympiad",
    conducting_body: "Indian Talent Olympiad",
    subject: "Mathematics",
    eligible_classes: "Class 1 to 10",
    academic_year: "2026–27",
    who_can_apply: "Individual",
  },
  {
    slug: "hbcse-rmo-2026-27",
    name: "HBCSE — Regional Mathematics Olympiad (RMO)",
    conducting_body: "HBCSE / TIFR",
    subject: "Mathematics",
    eligible_classes: "Class 9 to 12",
    academic_year: "2026–27",
    who_can_apply: "Individual",
  },
  {
    slug: "unified-nstse-2026-27",
    name: "Unified Council — National Science Talent Search (NSTSE)",
    conducting_body: "Unified Council",
    subject: "Science",
    eligible_classes: "Class 2 to 12",
    academic_year: "2026–27",
    who_can_apply: "Individual",
  },
  {
    slug: "sof-nso-2026-27",
    name: "SOF — National Science Olympiad (NSO)",
    conducting_body: "Science Olympiad Foundation",
    subject: "Science",
    eligible_classes: "Class 1 to 12",
    academic_year: "2026–27",
    who_can_apply: "School Only",
  },
  {
    slug: "silverzone-ios-2026-27",
    name: "Silverzone — International Olympiad of Science (IOS)",
    conducting_body: "Silverzone Foundation",
    subject: "Science",
    eligible_classes: "Class 3 to 12",
    academic_year: "2026–27",
    who_can_apply: "School Only",
  },
  {
    slug: "sof-ieo-2026-27",
    name: "SOF — International English Olympiad (IEO)",
    conducting_body: "Science Olympiad Foundation",
    subject: "English",
    eligible_classes: "Class 1 to 12",
    academic_year: "2026–27",
    who_can_apply: "School Only",
  },
];

function classToNumber(cls: string): number {
  if (cls === "LKG / UKG") return 0;
  const match = cls.match(/\d+/);
  return match ? parseInt(match[0]) : -1;
}

function olympiadMatchesClass(eligible: string, selected: string): boolean {
  if (!selected) return true;
  const selectedNum = classToNumber(selected);
  if (selectedNum === -1) return false;

  const rangeMatch = eligible.match(/Class\s+(\d+)\s+to\s+(\d+)/i);
  if (rangeMatch) {
    const min = parseInt(rangeMatch[1]);
    const max = parseInt(rangeMatch[2]);
    return selectedNum >= min && selectedNum <= max;
  }

  if (eligible.toLowerCase().includes("lkg") && selectedNum === 0) return true;
  return false;
}

export default function OlympiadsPage() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState<typeof sampleOlympiads>([]);

  function handleFind() {
    const filtered = sampleOlympiads.filter((o) => {
      const classMatch = !selectedClass || olympiadMatchesClass(o.eligible_classes, selectedClass);
      const subjectMatch = !selectedSubject || o.subject === selectedSubject;
      return classMatch && subjectMatch;
    });
    setResults(filtered);
    setHasSearched(true);
  }

  const color = subjectColors[selectedSubject] || "#2563eb";
  const emoji = subjectEmojis[selectedSubject] || "📚";

  return (
    <>
      {/* ── PAGE HEADER + SEARCH ── */}
      <section className="p2-header">
        <div className="p2-header-inner">
          <h1 className="p2-title">All Olympiads</h1>
          <p className="p2-subtitle">
            Find olympiads by class and subject from across India.
          </p>

          <div className="p2-search-block">
            <div className="p2-search-row">
              <select
                className="p2-select"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option value="">Select Class</option>
                {classes.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>

              <select
                className="p2-select"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="">Select Subject</option>
                {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>

              <button className="p2-find-btn" onClick={handleFind}>
                Find Olympiads →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS AREA ── */}
      <section className="p2-results-section">
        <div className="p2-results-inner">

          {/* DEFAULT STATE */}
          {!hasSearched && (
            <div className="p2-empty-state">
              <div className="p2-empty-icon">🔍</div>
              <p className="p2-empty-title">Select a class and subject above</p>
              <p className="p2-empty-sub">to find matching olympiads.</p>
            </div>
          )}

          {/* NO RESULTS STATE */}
          {hasSearched && results.length === 0 && (
            <div className="p2-empty-state">
              <div className="p2-empty-icon">📭</div>
              <p className="p2-empty-title">
                No olympiads found
                {selectedClass && selectedSubject
                  ? ` for ${selectedClass} · ${selectedSubject}`
                  : selectedClass
                  ? ` for ${selectedClass}`
                  : selectedSubject
                  ? ` for ${selectedSubject}`
                  : ""}
              </p>
              <p className="p2-empty-sub">Try a different class or subject.</p>
            </div>
          )}

          {/* RESULTS STATE */}
          {hasSearched && results.length > 0 && (
            <>
              <div className="p2-result-meta">
                <span className="p2-result-count">
                  {results.length} olympiad{results.length > 1 ? "s" : ""} found
                  {selectedClass && ` · ${selectedClass}`}
                  {selectedSubject && ` · ${selectedSubject}`}
                </span>
              </div>

              <div className="p2-result-list">
                {results.map((o) => (
                  <div key={o.slug} className="p2-row">

                    {/* Subject icon */}
                    <div
                      className="p2-row-icon"
                      style={{ background: subjectColors[o.subject] || "#2563eb" }}
                    >
                      <span>{subjectEmojis[o.subject] || "📚"}</span>
                    </div>

                    {/* Main info */}
                    <div className="p2-row-main">
                      <div className="p2-row-name">{o.name}</div>
                      <div className="p2-row-meta">
                        <span>{o.conducting_body}</span>
                        <span className="p2-meta-dot">·</span>
                        <span>{o.eligible_classes}</span>
                        <span className="p2-meta-dot">·</span>
                        <span>{o.academic_year}</span>
                      </div>
                    </div>

                    {/* Right side */}
                    <div className="p2-row-right">
                      <span className={
                        o.who_can_apply === "Individual"
                          ? "p2-badge p2-badge-ind"
                          : "p2-badge p2-badge-sch"
                      }>
                        {o.who_can_apply === "Individual"
                          ? "Individual Available"
                          : "School Only"}
                      </span>
                      <Link href={`/olympiad/${o.slug}`} className="p2-view-btn">
                        View Details →
                      </Link>
                    </div>

                  </div>
                ))}
              </div>
            </>
          )}

          {/* TRUST BAR — always visible */}
          <div className="p2-trust-bar">
            <span className="p2-trust-icon">🛡️</span>
            <div>
              <div className="p2-trust-title">Verified from official sources</div>
              <div className="p2-trust-sub">
                All information sourced from official olympiad websites.
                Verify details before registering. Last checked: July 2026.
              </div>
            </div>
          </div>

        </div>
      </section>

      <style jsx global>{`

        /* PAGE HEADER */
        .p2-header {
          background: var(--navy);
          padding: 56px 6% 48px;
        }
        .p2-header-inner {
          max-width: 780px;
        }
        .p2-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
          line-height: 1.15;
        }
        .p2-subtitle {
          font-size: 15px;
          color: rgba(255,255,255,0.52);
          margin-bottom: 32px;
          line-height: 1.6;
          font-family: var(--font-inter), sans-serif;
        }

        /* SEARCH BLOCK */
        .p2-search-block {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-lg);
          padding: 22px 24px;
        }
        .p2-search-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .p2-select {
          flex: 1;
          min-width: 148px;
          padding: 11px 14px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: var(--radius-sm);
          color: #fff;
          font-size: 14px;
          font-family: var(--font-inter), sans-serif;
          cursor: pointer;
          appearance: none;
          transition: border-color 0.2s;
        }
        .p2-select:focus {
          outline: none;
          border-color: var(--gold);
        }
        .p2-select option { background: var(--navy); }
        .p2-find-btn {
          padding: 11px 26px;
          background: var(--gold);
          color: var(--navy);
          border: none;
          border-radius: var(--radius-sm);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          font-family: var(--font-inter), sans-serif;
          transition: background 0.2s;
        }
        .p2-find-btn:hover { background: #d4911a; }

        /* RESULTS SECTION */
        .p2-results-section {
          background: var(--bg);
          padding: 40px 6% 72px;
          min-height: 400px;
        }
        .p2-results-inner {
          max-width: 900px;
        }

        /* EMPTY STATE */
        .p2-empty-state {
          text-align: center;
          padding: 72px 24px;
        }
        .p2-empty-icon {
          font-size: 40px;
          margin-bottom: 16px;
          opacity: 0.4;
        }
        .p2-empty-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 6px;
          font-family: var(--font-inter), sans-serif;
        }
        .p2-empty-sub {
          font-size: 14px;
          color: var(--slate);
          font-family: var(--font-inter), sans-serif;
        }

        /* RESULT META */
        .p2-result-meta {
          margin-bottom: 14px;
        }
        .p2-result-count {
          font-size: 13px;
          color: var(--slate);
          font-family: var(--font-inter), sans-serif;
        }

        /* RESULT LIST */
        .p2-result-list {
          display: flex;
          flex-direction: column;
          gap: 1px;
          border: 0.5px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 24px;
        }

        /* RESULT ROW */
        .p2-row {
          background: #fff;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          border-bottom: 0.5px solid var(--border);
          transition: background 0.12s;
        }
        .p2-row:last-child { border-bottom: none; }
        .p2-row:hover { background: var(--bg); }

        /* ROW ICON */
        .p2-row-icon {
          width: 38px;
          height: 38px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 18px;
          opacity: 0.9;
        }

        /* ROW MAIN */
        .p2-row-main {
          flex: 1;
          min-width: 0;
        }
        .p2-row-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 4px;
          font-family: var(--font-inter), sans-serif;
        }
        .p2-row-meta {
          font-size: 12px;
          color: var(--slate);
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
          font-family: var(--font-inter), sans-serif;
        }
        .p2-meta-dot {
          color: var(--border-strong);
          font-size: 10px;
        }

        /* ROW RIGHT */
        .p2-row-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        /* BADGES */
        .p2-badge {
          font-size: 10px;
          font-weight: 600;
          padding: 3px 9px;
          border-radius: 20px;
          white-space: nowrap;
          font-family: var(--font-inter), sans-serif;
        }
        .p2-badge-ind {
          background: #f0fdf4;
          color: #15803d;
        }
        .p2-badge-sch {
          background: var(--bg2);
          color: var(--slate);
          border: 0.5px solid var(--border);
        }

        /* VIEW BUTTON */
        .p2-view-btn {
          font-size: 13px;
          font-weight: 500;
          color: var(--navy-mid);
          text-decoration: none;
          white-space: nowrap;
          font-family: var(--font-inter), sans-serif;
          transition: color 0.2s;
        }
        .p2-view-btn:hover { color: var(--gold); }

        /* TRUST BAR */
        .p2-trust-bar {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 16px;
          background: #fff;
          border: 0.5px solid var(--border);
          border-radius: var(--radius-md);
          margin-top: 8px;
        }
        .p2-trust-icon { font-size: 16px; flex-shrink: 0; margin-top: 1px; }
        .p2-trust-title {
          font-size: 12px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 3px;
          font-family: var(--font-inter), sans-serif;
        }
        .p2-trust-sub {
          font-size: 11px;
          color: var(--slate);
          line-height: 1.55;
          font-family: var(--font-inter), sans-serif;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .p2-search-row { flex-direction: column; }
          .p2-row { flex-wrap: wrap; gap: 10px; }
          .p2-row-right { width: 100%; justify-content: space-between; }
          .p2-row-name { white-space: normal; }
        }
      `}</style>
    </>
  );
}
