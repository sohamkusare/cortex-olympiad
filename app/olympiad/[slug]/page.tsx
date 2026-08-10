"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// ── TYPE DEFINITIONS ──────────────────────────────────────────
interface ClassResource {
  syllabus_topics: string;
  syllabus_url: string;
  exam_pattern: string;
  sample_paper_url: string;
  pyp_2025_url: string;
  pyp_2024_url: string;
  pyp_2023_url: string;
  recommended_books: { title: string; author: string; amazon_url: string }[];
}

interface OlympiadData {
  name: string;
  conducting_body: string;
  conducting_body_type: string;
  conducting_body_established: number;
  official_website: string;
  support_contact: string;
  subject: string;
  eligible_classes: string;
  who_can_apply: string;
  registration_fee_inr: number;
  mode: string;
  duration_minutes: number;
  levels_count: number;
  levels_detail: string;
  academic_year: string;
  overview: string;
  exam_dates: string;
  registration_close: string;
  admit_card_date: string;
  result_date: string;
  awards_and_recognition: string;
  faqs: { q: string; a: string }[];
  class_resources: Record<number, ClassResource>;
  similar: { slug: string; name: string; conducting_body: string; eligible_classes: string }[];
}

// ── SAMPLE DATA ───────────────────────────────────────────────
const olympiadsData: Record<string, OlympiadData> = {
  "sof-imo-2026-27": {
    name: "SOF — International Mathematics Olympiad (IMO)",
    conducting_body: "Science Olympiad Foundation",
    conducting_body_type: "Private Educational Body",
    conducting_body_established: 1996,
    official_website: "https://sofworld.org",
    support_contact: "info@sofworld.org",
    subject: "Mathematics",
    eligible_classes: "Class 1 to 12",
    who_can_apply: "School Only",
    registration_fee_inr: 125,
    mode: "Offline",
    duration_minutes: 60,
    levels_count: 2,
    levels_detail: "Level 1: School · Level 2: National",
    academic_year: "2026–27",
    overview: "The International Mathematics Olympiad is conducted by the Science Olympiad Foundation and is one of the most widely participated mathematics competitions in India, with participation from over 99,000 schools across 70+ countries.\n\nThe examination assesses mathematical reasoning and problem-solving ability beyond standard curriculum. Students compete first at the school level, and top performers advance to the national level.",
    exam_dates: "October – December 2026 (Level 1)\nTo be announced (Level 2)",
    registration_close: "September 2026",
    admit_card_date: "To be announced",
    result_date: "To be announced",
    awards_and_recognition: "Level 1 top performers: Gold, Silver, and Bronze Medals with Certificates\nLevel 2 national ranks: Trophies, Medals, and Merit Certificates\nInternational rank holders: Special recognition at national level",
    faqs: [
      {
        q: "Can a student register without school involvement?",
        a: "No. SOF IMO registration is through the school only. The school must be a registered SOF center. Contact your school coordinator to initiate participation."
      },
      {
        q: "Is there negative marking?",
        a: "There is no negative marking in Level 1. Level 2 may follow a different marking scheme — verify on the official website before the exam."
      },
      {
        q: "What is the exact registration fee?",
        a: "The fee is approximately ₹125 per student, paid by the school. The exact amount should be confirmed with your school coordinator or the official SOF website."
      },
      {
        q: "How many students advance from Level 1 to Level 2?",
        a: "The cutoff varies each year based on overall performance. Top-ranking students from each class at the school level are eligible for Level 2."
      },
    ],
    class_resources: {
      6: {
        syllabus_topics: "Number Systems · Basic Algebra · Lines and Angles · Data Handling · Logical Reasoning",
        syllabus_url: "https://sofworld.org/imo-syllabus",
        exam_pattern: "35 questions · 60 minutes · No negative marking\nSection 1 — Logical Reasoning: 10 questions\nSection 2 — Mathematical Reasoning: 20 questions\nSection 3 — Everyday Mathematics: 5 questions",
        sample_paper_url: "https://sofworld.org/sample-papers",
        pyp_2025_url: "https://sofworld.org/previous-papers",
        pyp_2024_url: "https://sofworld.org/previous-papers",
        pyp_2023_url: "https://sofworld.org/previous-papers",
        recommended_books: [
          { title: "SOF IMO Workbook Class 6", author: "MTG Editorial Board", amazon_url: "https://amazon.in" },
          { title: "Mathematics Olympiad Primer Class 6", author: "BMA Publications", amazon_url: "https://amazon.in" },
        ],
      },
      8: {
        syllabus_topics: "Rational Numbers · Linear Equations · Geometry · Mensuration · Data Handling · Squares and Square Roots · Algebraic Expressions · Logical Reasoning",
        syllabus_url: "https://sofworld.org/imo-syllabus",
        exam_pattern: "35 questions · 60 minutes · No negative marking\nSection 1 — Logical Reasoning: 10 questions\nSection 2 — Mathematical Reasoning: 20 questions\nSection 3 — Everyday Mathematics: 5 questions",
        sample_paper_url: "https://sofworld.org/sample-papers",
        pyp_2025_url: "https://sofworld.org/previous-papers",
        pyp_2024_url: "https://sofworld.org/previous-papers",
        pyp_2023_url: "https://sofworld.org/previous-papers",
        recommended_books: [
          { title: "SOF IMO Workbook Class 8", author: "MTG Editorial Board", amazon_url: "https://amazon.in" },
          { title: "Mathematics Olympiad Primer Class 8", author: "BMA Publications", amazon_url: "https://amazon.in" },
        ],
      },
      10: {
        syllabus_topics: "Real Numbers · Polynomials · Quadratic Equations · Arithmetic Progressions · Triangles · Coordinate Geometry · Trigonometry · Statistics · Probability · Logical Reasoning",
        syllabus_url: "https://sofworld.org/imo-syllabus",
        exam_pattern: "35 questions · 60 minutes · No negative marking\nSection 1 — Logical Reasoning: 10 questions\nSection 2 — Mathematical Reasoning: 20 questions\nSection 3 — Everyday Mathematics: 5 questions",
        sample_paper_url: "https://sofworld.org/sample-papers",
        pyp_2025_url: "https://sofworld.org/previous-papers",
        pyp_2024_url: "https://sofworld.org/previous-papers",
        pyp_2023_url: "https://sofworld.org/previous-papers",
        recommended_books: [
          { title: "SOF IMO Workbook Class 10", author: "MTG Editorial Board", amazon_url: "https://amazon.in" },
        ],
      },
    },
    similar: [
      { slug: "silverzone-iom-2026-27", name: "Silverzone — International Olympiad of Mathematics", conducting_body: "Silverzone Foundation", eligible_classes: "Class 3 to 12" },
      { slug: "ito-imo-2026-27", name: "ITO — International Mathematics Olympiad", conducting_body: "Indian Talent Olympiad", eligible_classes: "Class 1 to 10" },
      { slug: "hbcse-rmo-2026-27", name: "HBCSE — Regional Mathematics Olympiad", conducting_body: "HBCSE / TIFR", eligible_classes: "Class 9 to 12" },
    ],
  },

  "silverzone-iom-2026-27": {
    name: "Silverzone — International Olympiad of Mathematics (IOM)",
    conducting_body: "Silverzone Foundation",
    conducting_body_type: "Private Educational Body",
    conducting_body_established: 2001,
    official_website: "https://silverzone.org",
    support_contact: "info@silverzone.org",
    subject: "Mathematics",
    eligible_classes: "Class 3 to 12",
    who_can_apply: "School Only",
    registration_fee_inr: 150,
    mode: "Offline",
    duration_minutes: 60,
    levels_count: 2,
    levels_detail: "Level 1: School · Level 2: National",
    academic_year: "2026–27",
    overview: "The International Olympiad of Mathematics conducted by Silverzone Foundation focuses on developing mathematical aptitude and problem-solving skills beyond standard curriculum. It is conducted in over 20,000 schools across India and abroad.\n\nSilverzone olympiads follow a two-level format, with Level 1 at the school level and Level 2 for top performers advancing to national recognition.",
    exam_dates: "November – December 2026 (Level 1)\nTo be announced (Level 2)",
    registration_close: "October 2026",
    admit_card_date: "To be announced",
    result_date: "To be announced",
    awards_and_recognition: "International Rank 1: Gold Medal, Trophy, and Certificate\nNational Rank 1: Silver Medal and Certificate\nSchool Rank 1: Bronze Medal and Certificate",
    faqs: [
      { q: "Can I register individually without my school?", a: "No. Registration is through school only. Contact your school coordinator to participate." },
      { q: "What is the registration fee?", a: "Approximately ₹150 per student. Confirm the exact amount with your school or the official Silverzone website." },
      { q: "Is there negative marking?", a: "No negative marking. Verify on the official website before the exam." },
    ],
    class_resources: {
      8: {
        syllabus_topics: "Rational Numbers · Squares and Cubes · Algebraic Expressions · Linear Equations · Geometry · Mensuration · Data Handling",
        syllabus_url: "https://silverzone.org/syllabus",
        exam_pattern: "40 questions · 60 minutes · No negative marking",
        sample_paper_url: "https://silverzone.org/sample-papers",
        pyp_2025_url: "https://silverzone.org/previous-papers",
        pyp_2024_url: "https://silverzone.org/previous-papers",
        pyp_2023_url: "https://silverzone.org/previous-papers",
        recommended_books: [
          { title: "Silverzone IOM Guide Class 8", author: "Silverzone Publications", amazon_url: "https://amazon.in" },
        ],
      },
    },
    similar: [
      { slug: "sof-imo-2026-27", name: "SOF — International Mathematics Olympiad", conducting_body: "Science Olympiad Foundation", eligible_classes: "Class 1 to 12" },
      { slug: "ito-imo-2026-27", name: "ITO — International Mathematics Olympiad", conducting_body: "Indian Talent Olympiad", eligible_classes: "Class 1 to 10" },
    ],
  },

  "ito-imo-2026-27": {
    name: "ITO — International Mathematics Olympiad",
    conducting_body: "Indian Talent Olympiad",
    conducting_body_type: "Private Educational Body",
    conducting_body_established: 2009,
    official_website: "https://indiantalent.org",
    support_contact: "support@indiantalent.org",
    subject: "Mathematics",
    eligible_classes: "Class 1 to 10",
    who_can_apply: "Individual",
    registration_fee_inr: 200,
    mode: "Online",
    duration_minutes: 45,
    levels_count: 1,
    levels_detail: "Single level — National",
    academic_year: "2026–27",
    overview: "The International Mathematics Olympiad by Indian Talent Olympiad allows individual student registration — students do not need their school to participate. It is conducted online, making it accessible to students across India including those in smaller towns where school participation may not be available.\n\nITO serves over one crore students and is particularly valuable for students whose schools are not registered with other olympiad bodies.",
    exam_dates: "October – November 2026",
    registration_close: "September 2026",
    admit_card_date: "To be announced",
    result_date: "To be announced",
    awards_and_recognition: "National Rank 1: Cash Prize, Gold Medal, and Certificate\nRank 2–3: Silver Medal and Certificate\nAll participants: Digital Certificate of Participation",
    faqs: [
      { q: "Can I register without my school?", a: "Yes. ITO allows individual registration directly on their website. This is one of the few olympiads where school registration is not required." },
      { q: "Is the exam online or offline?", a: "The exam is conducted online. You need a device and an internet connection on the day of the exam." },
      { q: "What is the registration fee?", a: "Approximately ₹200 per exam. Confirm the exact amount on the official website before registering." },
    ],
    class_resources: {
      8: {
        syllabus_topics: "Number Systems · Algebra · Geometry · Mensuration · Statistics · Mathematical Reasoning",
        syllabus_url: "https://indiantalent.org/syllabus",
        exam_pattern: "50 questions · 45 minutes · No negative marking · Online exam, can be taken from home",
        sample_paper_url: "https://indiantalent.org/sample-papers",
        pyp_2025_url: "https://indiantalent.org/previous-papers",
        pyp_2024_url: "https://indiantalent.org/previous-papers",
        pyp_2023_url: "https://indiantalent.org/previous-papers",
        recommended_books: [
          { title: "ITO Mathematics Workbook Class 8", author: "ITO Publications", amazon_url: "https://amazon.in" },
        ],
      },
    },
    similar: [
      { slug: "sof-imo-2026-27", name: "SOF — International Mathematics Olympiad", conducting_body: "Science Olympiad Foundation", eligible_classes: "Class 1 to 12" },
      { slug: "silverzone-iom-2026-27", name: "Silverzone — International Olympiad of Mathematics", conducting_body: "Silverzone Foundation", eligible_classes: "Class 3 to 12" },
    ],
  },
};

const TABS = [
  "About this Olympiad",
  "Who Can Apply",
  "Exam Structure",
  "Important Dates",
  "Study Resources",
  "FAQs",
];

const CLASS_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function OlympiadDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [activeTab, setActiveTab] = useState(0);
  const [selectedClass, setSelectedClass] = useState<number | "">("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const olympiad = olympiadsData[slug];

  if (!olympiad) {
    return (
      <div className="p3-not-found">
        <p>Olympiad not found.</p>
        <Link href="/olympiads">← Back to All Olympiads</Link>
        <style jsx>{`
          .p3-not-found { padding: 80px 6%; text-align: center; }
          .p3-not-found a { color: #1a3a6e; }
        `}</style>
      </div>
    );
  }

  const classResource =
    selectedClass !== "" ? olympiad.class_resources[selectedClass] : null;

  const isIndividual = olympiad.who_can_apply === "Individual";

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────── */}
      <header className="p3-header">
        <div className="p3-header-inner">
          <Link href="/olympiads" className="p3-back">← All Olympiads</Link>

          <div className="p3-header-body">
            <div className="p3-header-left">
              <p className="p3-subject-label">{olympiad.subject} · {olympiad.academic_year}</p>
              <h1 className="p3-name">{olympiad.name}</h1>
              <p className="p3-conducting-body">{olympiad.conducting_body}</p>
              <p className="p3-source-line">
                Information sourced from official website · Last verified July 2026
              </p>
            </div>

            <div className="p3-header-right">
              <a
                href={olympiad.official_website}
                target="_blank"
                rel="noopener noreferrer"
                className="p3-official-btn"
              >
                Visit Official Website →
              </a>
              <p className="p3-official-note">Verify all details before registering</p>
            </div>
          </div>

          {/* Quick facts — inline, no cards */}
          <div className="p3-quick-facts">
            <span className="p3-fact">
              <span className="p3-fact-label">Classes</span>
              <strong className="p3-fact-value">{olympiad.eligible_classes}</strong>
            </span>
            <span className="p3-fact-sep" />
            <span className="p3-fact">
              <span className="p3-fact-label">Registration</span>
              <strong className={`p3-fact-value ${isIndividual ? "p3-fact-green" : ""}`}>
                {isIndividual ? "Individual Available" : "School Only"}
              </strong>
            </span>
            <span className="p3-fact-sep" />
            <span className="p3-fact">
              <span className="p3-fact-label">Mode</span>
              <strong className="p3-fact-value">{olympiad.mode}</strong>
            </span>
            <span className="p3-fact-sep" />
            <span className="p3-fact">
              <span className="p3-fact-label">Duration</span>
              <strong className="p3-fact-value">{olympiad.duration_minutes} min</strong>
            </span>
            <span className="p3-fact-sep" />
            <span className="p3-fact">
              <span className="p3-fact-label">Fee</span>
              <strong className="p3-fact-value">₹{olympiad.registration_fee_inr}</strong>
            </span>
            <span className="p3-fact-sep" />
            <span className="p3-fact">
              <span className="p3-fact-label">Levels</span>
              <strong className="p3-fact-value">{olympiad.levels_count}</strong>
            </span>
          </div>
        </div>
      </header>

      {/* ── TAB BAR ────────────────────────────────────── */}
      <div className="p3-tabbar">
        <div className="p3-tabbar-inner">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className={`p3-tab ${activeTab === i ? "p3-tab-active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── TAB CONTENT ────────────────────────────────── */}
      <main className="p3-main">
        <div className="p3-main-inner">

          {/* TAB 1 — ABOUT THIS OLYMPIAD */}
          {activeTab === 0 && (
            <div className="p3-content">
              <h2 className="p3-section-heading">About this Olympiad</h2>
              {olympiad.overview.split("\n\n").map((para, i) => (
                <p key={i} className="p3-body">{para}</p>
              ))}

              <h3 className="p3-subsection-heading">Conducting Body</h3>
              <dl className="p3-dl">
                <div className="p3-dl-row">
                  <dt>Organisation</dt>
                  <dd>{olympiad.conducting_body}</dd>
                </div>
                <div className="p3-dl-row">
                  <dt>Type</dt>
                  <dd>{olympiad.conducting_body_type}</dd>
                </div>
                <div className="p3-dl-row">
                  <dt>Established</dt>
                  <dd>{olympiad.conducting_body_established}</dd>
                </div>
                <div className="p3-dl-row">
                  <dt>Official Website</dt>
                  <dd>
                    <a
                      href={olympiad.official_website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p3-link"
                    >
                      {olympiad.official_website.replace("https://", "")} →
                    </a>
                  </dd>
                </div>
                {olympiad.support_contact && (
                  <div className="p3-dl-row">
                    <dt>Contact</dt>
                    <dd>{olympiad.support_contact}</dd>
                  </div>
                )}
              </dl>

              {olympiad.awards_and_recognition && (
                <>
                  <h3 className="p3-subsection-heading">Awards & Recognition</h3>
                  {olympiad.awards_and_recognition.split("\n").map((line, i) => (
                    <p key={i} className="p3-body p3-body-award">· {line}</p>
                  ))}
                </>
              )}
            </div>
          )}

          {/* TAB 2 — WHO CAN APPLY */}
          {activeTab === 1 && (
            <div className="p3-content">
              <h2 className="p3-section-heading">Who Can Apply</h2>

              {/* Registration type — most critical fact, first */}
              <div className={`p3-eligibility-banner ${isIndividual ? "p3-banner-green" : "p3-banner-blue"}`}>
                <strong className="p3-banner-label">
                  {isIndividual ? "Individual Registration Available" : "School Registration Only"}
                </strong>
                <p className="p3-banner-body">
                  {isIndividual
                    ? "You can register directly on the official website without requiring your school to participate. This is one of the few olympiads that allows individual registration."
                    : `Registration is through school only. Your school must be registered with ${olympiad.conducting_body}. Contact your school coordinator to participate.`}
                </p>
              </div>

              <h3 className="p3-subsection-heading">Eligibility Details</h3>
              <dl className="p3-dl">
                <div className="p3-dl-row">
                  <dt>Eligible Classes</dt>
                  <dd><strong>{olympiad.eligible_classes}</strong></dd>
                </div>
                <div className="p3-dl-row">
                  <dt>Registration Type</dt>
                  <dd><strong>{olympiad.who_can_apply}</strong></dd>
                </div>
                <div className="p3-dl-row">
                  <dt>Registration Fee</dt>
                  <dd>
                    <strong>₹{olympiad.registration_fee_inr} per student</strong>
                    <span className="p3-dl-note"> — paid through school. Confirm exact amount with your school coordinator or the official website.</span>
                  </dd>
                </div>
                <div className="p3-dl-row">
                  <dt>Mode</dt>
                  <dd>{olympiad.mode}</dd>
                </div>
                <div className="p3-dl-row">
                  <dt>Subject</dt>
                  <dd>{olympiad.subject}</dd>
                </div>
              </dl>
            </div>
          )}

          {/* TAB 3 — EXAM STRUCTURE */}
          {activeTab === 2 && (
            <div className="p3-content">
              <h2 className="p3-section-heading">Exam Structure</h2>

              <dl className="p3-dl">
                <div className="p3-dl-row">
                  <dt>Duration</dt>
                  <dd><strong>{olympiad.duration_minutes} minutes</strong></dd>
                </div>
                <div className="p3-dl-row">
                  <dt>Number of Levels</dt>
                  <dd><strong>{olympiad.levels_count}</strong></dd>
                </div>
                <div className="p3-dl-row">
                  <dt>Levels</dt>
                  <dd>{olympiad.levels_detail}</dd>
                </div>
              </dl>

              <h3 className="p3-subsection-heading">Class-wise Exam Pattern</h3>
              <p className="p3-body">Select your class to see the specific exam pattern.</p>

              <div className="p3-class-row">
                <label className="p3-class-label">Your class</label>
                <select
                  className="p3-class-select"
                  value={selectedClass}
                  onChange={(e) =>
                    setSelectedClass(e.target.value === "" ? "" : Number(e.target.value))
                  }
                >
                  <option value="">Select class</option>
                  {CLASS_NUMBERS.map((n) => (
                    <option key={n} value={n}>Class {n}</option>
                  ))}
                </select>
              </div>

              {selectedClass !== "" && classResource && (
                <div className="p3-class-result">
                  <h4 className="p3-class-result-heading">Class {selectedClass} — Exam Pattern</h4>
                  {classResource.exam_pattern.split("\n").map((line, i) => (
                    <p key={i} className="p3-body">· {line}</p>
                  ))}
                </div>
              )}

              {selectedClass !== "" && !classResource && (
                <p className="p3-notice">
                  Class {selectedClass} exam pattern is not yet available.{" "}
                  <a href={olympiad.official_website} target="_blank" rel="noopener noreferrer" className="p3-link">
                    Visit official website →
                  </a>
                </p>
              )}
            </div>
          )}

          {/* TAB 4 — IMPORTANT DATES */}
          {activeTab === 3 && (
            <div className="p3-content">
              <h2 className="p3-section-heading">Important Dates</h2>
              <p className="p3-body p3-dates-note">
                All dates are approximate and subject to change.{" "}
                <a href={olympiad.official_website} target="_blank" rel="noopener noreferrer" className="p3-link">
                  Verify on official website →
                </a>
              </p>

              <dl className="p3-dl p3-dl-dates">
                <div className="p3-dl-row">
                  <dt>Registration Closes</dt>
                  <dd><strong className="p3-date-value">{olympiad.registration_close}</strong></dd>
                </div>
                {olympiad.exam_dates.split("\n").map((line, i) => (
                  <div className="p3-dl-row" key={i}>
                    <dt>{i === 0 ? "Exam Date" : `Exam Date — Level ${i + 1}`}</dt>
                    <dd>
                      <strong className={line.includes("announced") ? "p3-tba" : "p3-date-value"}>
                        {line}
                      </strong>
                      {line.includes("announced") && (
                        <span className="p3-tba-link">
                          {" "}—{" "}
                          <a href={olympiad.official_website} target="_blank" rel="noopener noreferrer" className="p3-link">
                            check official website →
                          </a>
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
                <div className="p3-dl-row">
                  <dt>Admit Card</dt>
                  <dd>
                    <strong className={olympiad.admit_card_date.includes("announced") ? "p3-tba" : "p3-date-value"}>
                      {olympiad.admit_card_date}
                    </strong>
                    {olympiad.admit_card_date.includes("announced") && (
                      <span className="p3-tba-link">
                        {" "}—{" "}
                        <a href={olympiad.official_website} target="_blank" rel="noopener noreferrer" className="p3-link">
                          check official website →
                        </a>
                      </span>
                    )}
                  </dd>
                </div>
                <div className="p3-dl-row">
                  <dt>Result</dt>
                  <dd>
                    <strong className={olympiad.result_date.includes("announced") ? "p3-tba" : "p3-date-value"}>
                      {olympiad.result_date}
                    </strong>
                    {olympiad.result_date.includes("announced") && (
                      <span className="p3-tba-link">
                        {" "}—{" "}
                        <a href={olympiad.official_website} target="_blank" rel="noopener noreferrer" className="p3-link">
                          check official website →
                        </a>
                      </span>
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          )}

          {/* TAB 5 — STUDY RESOURCES */}
          {activeTab === 4 && (
            <div className="p3-content">
              <h2 className="p3-section-heading">Study Resources</h2>
              <p className="p3-body">
                Select your class to see syllabus, sample papers, previous year papers, and recommended books.
              </p>

              <div className="p3-class-row">
                <label className="p3-class-label">Your class</label>
                <select
                  className="p3-class-select"
                  value={selectedClass}
                  onChange={(e) =>
                    setSelectedClass(e.target.value === "" ? "" : Number(e.target.value))
                  }
                >
                  <option value="">Select class</option>
                  {CLASS_NUMBERS.map((n) => (
                    <option key={n} value={n}>Class {n}</option>
                  ))}
                </select>
              </div>

              {selectedClass === "" && (
                <p className="p3-notice">Select your class above to see resources.</p>
              )}

              {selectedClass !== "" && !classResource && (
                <p className="p3-notice">
                  Class {selectedClass} resources are not yet available.{" "}
                  <a href={olympiad.official_website} target="_blank" rel="noopener noreferrer" className="p3-link">
                    Visit official website →
                  </a>
                </p>
              )}

              {selectedClass !== "" && classResource && (
                <>
                  <h3 className="p3-subsection-heading">Syllabus — Class {selectedClass}</h3>
                  <p className="p3-body">{classResource.syllabus_topics}</p>
                  <p className="p3-body">
                    <a href={classResource.syllabus_url} target="_blank" rel="noopener noreferrer" className="p3-link">
                      View official syllabus →
                    </a>
                  </p>

                  <h3 className="p3-subsection-heading">Sample Papers</h3>
                  <p className="p3-body">
                    Official sample papers are available on the conducting body's website.{" "}
                    <a href={classResource.sample_paper_url} target="_blank" rel="noopener noreferrer" className="p3-link">
                      Download sample paper →
                    </a>
                  </p>

                  <h3 className="p3-subsection-heading">Previous Year Papers</h3>
                  <p className="p3-body">
                    <a href={classResource.pyp_2025_url} target="_blank" rel="noopener noreferrer" className="p3-link p3-pyp-link">
                      2024–25 Paper →
                    </a>
                    <a href={classResource.pyp_2024_url} target="_blank" rel="noopener noreferrer" className="p3-link p3-pyp-link">
                      2023–24 Paper →
                    </a>
                    <a href={classResource.pyp_2023_url} target="_blank" rel="noopener noreferrer" className="p3-link p3-pyp-link">
                      2022–23 Paper →
                    </a>
                  </p>

                  {classResource.recommended_books.length > 0 && (
                    <>
                      <h3 className="p3-subsection-heading">Recommended Books</h3>
                      {classResource.recommended_books.map((book, i) => (
                        <div key={i} className="p3-book-row">
                          <div className="p3-book-text">
                            <strong className="p3-book-title">{book.title}</strong>
                            <span className="p3-book-author">{book.author}</span>
                          </div>
                          <a
                            href={book.amazon_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p3-amazon-link"
                          >
                            Buy on Amazon →
                          </a>
                        </div>
                      ))}
                    </>
                  )}
                </>
              )}
            </div>
          )}

          {/* TAB 6 — FAQs */}
          {activeTab === 5 && (
            <div className="p3-content">
              <h2 className="p3-section-heading">Frequently Asked Questions</h2>
              {olympiad.faqs.map((faq, i) => (
                <div key={i} className="p3-faq">
                  <button
                    className="p3-faq-q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{faq.q}</span>
                    <span className="p3-faq-icon" aria-hidden="true">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <p className="p3-faq-a">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          )}

        </div>
      </main>

      {/* ── DISCLAIMER ─────────────────────────────────── */}
      <div className="p3-disclaimer-section">
        <div className="p3-disclaimer-inner">
          <p className="p3-disclaimer-text">
            Information on this page is sourced from the official website of {olympiad.conducting_body}.
            Cortex Olympiad is an independent directory and is not affiliated with {olympiad.conducting_body}.
            Verify all details — including dates, fees, and eligibility — directly on the official website before registering.
          </p>
          <p className="p3-disclaimer-meta">Last verified: July 2026</p>
        </div>
      </div>

      {/* ── SIMILAR OLYMPIADS ──────────────────────────── */}
      {olympiad.similar.length > 0 && (
        <section className="p3-similar">
          <div className="p3-similar-inner">
            <h3 className="p3-similar-heading">Similar Olympiads</h3>
            {olympiad.similar.map((s) => (
              <Link key={s.slug} href={`/olympiad/${s.slug}`} className="p3-similar-row">
                <div>
                  <span className="p3-similar-name">{s.name}</span>
                  <span className="p3-similar-meta">{s.conducting_body} · {s.eligible_classes}</span>
                </div>
                <span className="p3-similar-arrow">→</span>
              </Link>
            ))}
            <Link href="/olympiads" className="p3-back-link">← Back to All Olympiads</Link>
          </div>
        </section>
      )}

      {/* ── STYLES ─────────────────────────────────────── */}
      <style jsx global>{`

        /* ─ NOT FOUND ─ */
        .p3-not-found { padding: 80px 6%; text-align: center; }

        /* ─ HEADER ─ */
        .p3-header {
          background: var(--navy);
          padding: 32px 6% 0;
        }
        .p3-header-inner {
          max-width: 960px;
        }
        .p3-back {
          display: inline-block;
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          margin-bottom: 20px;
          font-family: var(--font-inter), sans-serif;
          transition: color 0.2s;
        }
        .p3-back:hover { color: rgba(255,255,255,0.75); }

        .p3-header-body {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 28px;
        }
        .p3-header-left { flex: 1; }
        .p3-header-right {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
          padding-top: 4px;
        }

        .p3-subject-label {
          font-size: 12px;
          font-weight: 500;
          color: var(--gold);
          letter-spacing: 0.5px;
          margin-bottom: 8px;
          font-family: var(--font-inter), sans-serif;
        }
        .p3-name {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(20px, 3.2vw, 30px);
          font-weight: 700;
          color: #fff;
          line-height: 1.22;
          margin-bottom: 6px;
        }
        .p3-conducting-body {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          margin-bottom: 6px;
          font-family: var(--font-inter), sans-serif;
        }
        .p3-source-line {
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          font-family: var(--font-inter), sans-serif;
        }

        .p3-official-btn {
          display: inline-block;
          padding: 10px 18px;
          background: var(--gold);
          color: var(--navy);
          font-size: 13px;
          font-weight: 700;
          border-radius: 6px;
          text-decoration: none;
          white-space: nowrap;
          font-family: var(--font-inter), sans-serif;
          transition: background 0.2s;
        }
        .p3-official-btn:hover { background: #d4911a; }
        .p3-official-note {
          font-size: 10px;
          color: rgba(255,255,255,0.28);
          text-align: right;
          font-family: var(--font-inter), sans-serif;
        }

        /* ─ QUICK FACTS ─ */
        .p3-quick-facts {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0;
          padding: 16px 0;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .p3-fact {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 4px 20px 4px 0;
        }
        .p3-fact:first-child { padding-left: 0; }
        .p3-fact-label {
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          font-family: var(--font-inter), sans-serif;
        }
        .p3-fact-value {
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          font-family: var(--font-inter), sans-serif;
        }
        .p3-fact-green { color: #6ee7b7; }
        .p3-fact-sep {
          width: 1px;
          height: 28px;
          background: rgba(255,255,255,0.12);
          margin: 0 20px 0 0;
          flex-shrink: 0;
        }

        /* ─ TAB BAR ─ */
        .p3-tabbar {
          background: #fff;
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 72px;
          z-index: 50;
        }
        .p3-tabbar-inner {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 6%;
          display: flex;
          overflow-x: auto;
          scrollbar-width: none;
          gap: 0;
        }
        .p3-tabbar-inner::-webkit-scrollbar { display: none; }
        .p3-tab {
          padding: 14px 16px;
          font-size: 13px;
          font-weight: 500;
          color: var(--slate);
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          font-family: var(--font-inter), sans-serif;
          transition: color 0.15s;
        }
        .p3-tab:hover { color: var(--text); }
        .p3-tab-active {
          color: var(--navy);
          border-bottom-color: var(--gold);
          font-weight: 600;
        }

        /* ─ MAIN CONTENT ─ */
        .p3-main {
          background: var(--bg);
          padding: 0 6%;
          min-height: 400px;
        }
        .p3-main-inner {
          max-width: 960px;
          margin: 0 auto;
        }
        .p3-content {
          padding: 40px 0 56px;
          max-width: 680px;
        }

        /* ─ TYPOGRAPHY — EDITORIAL ─ */
        .p3-section-heading {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 20px;
          line-height: 1.25;
        }
        .p3-subsection-heading {
          font-family: var(--font-inter), sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: var(--navy);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-top: 36px;
          margin-bottom: 14px;
        }
        .p3-body {
          font-size: 15px;
          color: #374151;
          line-height: 1.78;
          margin-bottom: 14px;
          font-family: var(--font-inter), sans-serif;
        }
        .p3-body-award { margin-bottom: 6px; }
        .p3-dates-note { font-size: 13px; color: var(--slate); }

        /* ─ DEFINITION LIST — NO CARDS ─ */
        .p3-dl {
          display: table;
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 8px;
        }
        .p3-dl-row {
          display: table-row;
          border-bottom: 1px solid var(--border);
        }
        .p3-dl-row:last-child { border-bottom: none; }
        .p3-dl dt {
          display: table-cell;
          font-size: 13px;
          font-weight: 500;
          color: var(--slate);
          padding: 11px 24px 11px 0;
          width: 38%;
          vertical-align: top;
          font-family: var(--font-inter), sans-serif;
          white-space: nowrap;
        }
        .p3-dl dd {
          display: table-cell;
          font-size: 14px;
          color: #374151;
          padding: 11px 0;
          vertical-align: top;
          font-family: var(--font-inter), sans-serif;
        }
        .p3-dl-note {
          font-size: 12px;
          color: var(--slate);
          font-weight: 400;
        }
        .p3-dl-dates .p3-dl-row { border-bottom: 1px solid var(--border); }

        /* ─ DATE VALUES ─ */
        .p3-date-value {
          font-weight: 600;
          color: var(--text);
        }
        .p3-tba {
          font-weight: 400;
          color: var(--slate);
          font-style: italic;
        }
        .p3-tba-link { font-size: 12px; }

        /* ─ ELIGIBILITY BANNER — NO CARD, JUST STRIPE ─ */
        .p3-eligibility-banner {
          border-left: 3px solid;
          padding: 14px 18px;
          margin-bottom: 28px;
        }
        .p3-banner-green {
          border-color: #059669;
          background: #f0fdf4;
        }
        .p3-banner-blue {
          border-color: #2563eb;
          background: #eff6ff;
        }
        .p3-banner-label {
          display: block;
          font-size: 14px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 6px;
          font-family: var(--font-inter), sans-serif;
        }
        .p3-banner-body {
          font-size: 13px;
          color: #374151;
          line-height: 1.65;
          margin: 0;
          font-family: var(--font-inter), sans-serif;
        }

        /* ─ CLASS SELECTOR ─ */
        .p3-class-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 20px 0 24px;
        }
        .p3-class-label {
          font-size: 13px;
          font-weight: 500;
          color: var(--slate);
          white-space: nowrap;
          font-family: var(--font-inter), sans-serif;
        }
        .p3-class-select {
          padding: 9px 14px;
          border: 1px solid var(--border);
          border-radius: 6px;
          font-size: 14px;
          color: var(--text);
          background: #fff;
          cursor: pointer;
          font-family: var(--font-inter), sans-serif;
          appearance: none;
          min-width: 140px;
        }
        .p3-class-select:focus {
          outline: none;
          border-color: var(--navy);
        }
        .p3-class-result { margin-top: 8px; }
        .p3-class-result-heading {
          font-size: 14px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 12px;
          font-family: var(--font-inter), sans-serif;
        }

        /* ─ NOTICE ─ */
        .p3-notice {
          font-size: 14px;
          color: var(--slate);
          margin-top: 16px;
          font-family: var(--font-inter), sans-serif;
          line-height: 1.6;
        }

        /* ─ LINKS ─ */
        .p3-link {
          color: var(--navy-mid);
          text-decoration: underline;
          text-underline-offset: 2px;
          font-family: var(--font-inter), sans-serif;
          font-size: 14px;
        }
        .p3-link:hover { color: var(--gold); }
        .p3-pyp-link {
          display: inline-block;
          margin-right: 20px;
          font-size: 13px;
        }

        /* ─ BOOK ROW — NO CARD ─ */
        .p3-book-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
        }
        .p3-book-row:last-child { border-bottom: none; }
        .p3-book-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .p3-book-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          font-family: var(--font-inter), sans-serif;
        }
        .p3-book-author {
          font-size: 12px;
          color: var(--slate);
          font-family: var(--font-inter), sans-serif;
        }
        .p3-amazon-link {
          font-size: 12px;
          font-weight: 600;
          color: #92400e;
          text-decoration: none;
          white-space: nowrap;
          font-family: var(--font-inter), sans-serif;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .p3-amazon-link:hover { text-decoration: underline; }

        /* ─ FAQs — NO CARD ─ */
        .p3-faq {
          border-bottom: 1px solid var(--border);
        }
        .p3-faq:last-child { border-bottom: none; }
        .p3-faq-q {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 16px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          font-family: var(--font-inter), sans-serif;
        }
        .p3-faq-q:hover { color: var(--navy); }
        .p3-faq-icon {
          font-size: 18px;
          font-weight: 300;
          color: var(--slate);
          flex-shrink: 0;
          line-height: 1;
        }
        .p3-faq-a {
          font-size: 14px;
          color: #374151;
          line-height: 1.72;
          padding-bottom: 16px;
          margin: 0;
          font-family: var(--font-inter), sans-serif;
        }

        /* ─ DISCLAIMER ─ */
        .p3-disclaimer-section {
          background: var(--bg);
          padding: 0 6% 48px;
        }
        .p3-disclaimer-inner {
          max-width: 680px;
          border-top: 1px solid var(--border);
          padding-top: 20px;
        }
        .p3-disclaimer-text {
          font-size: 12px;
          color: var(--slate);
          line-height: 1.7;
          margin-bottom: 4px;
          font-family: var(--font-inter), sans-serif;
        }
        .p3-disclaimer-meta {
          font-size: 11px;
          color: #9ca3af;
          font-family: var(--font-inter), sans-serif;
        }

        /* ─ SIMILAR OLYMPIADS ─ */
        .p3-similar {
          background: #fff;
          border-top: 1px solid var(--border);
          padding: 36px 6% 48px;
        }
        .p3-similar-inner { max-width: 680px; }
        .p3-similar-heading {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 16px;
        }
        .p3-similar-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 13px 0;
          border-bottom: 1px solid var(--border);
          text-decoration: none;
          transition: background 0.1s;
        }
        .p3-similar-row:last-of-type { border-bottom: none; }
        .p3-similar-row:hover .p3-similar-name { color: var(--navy); }
        .p3-similar-name {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 2px;
          font-family: var(--font-inter), sans-serif;
          transition: color 0.15s;
        }
        .p3-similar-meta {
          font-size: 12px;
          color: var(--slate);
          font-family: var(--font-inter), sans-serif;
        }
        .p3-similar-arrow {
          font-size: 14px;
          color: var(--slate);
          flex-shrink: 0;
        }
        .p3-back-link {
          display: inline-block;
          margin-top: 20px;
          font-size: 13px;
          color: var(--navy-mid);
          text-decoration: none;
          font-family: var(--font-inter), sans-serif;
        }
        .p3-back-link:hover { color: var(--gold); }

        /* ─ RESPONSIVE ─ */
        @media (max-width: 768px) {
          .p3-header { padding: 24px 4% 0; }
          .p3-main { padding: 0 4%; }
          .p3-disclaimer-section { padding: 0 4% 40px; }
          .p3-similar { padding: 28px 4% 40px; }

          .p3-header-body {
            flex-direction: column;
            gap: 16px;
          }
          .p3-header-right {
            align-items: flex-start;
          }
          .p3-official-note { text-align: left; }

          .p3-quick-facts {
            gap: 0;
            row-gap: 12px;
          }
          .p3-fact { padding-right: 16px; }
          .p3-fact-sep { margin-right: 16px; height: 20px; }

          .p3-tabbar-inner { padding: 0 4%; }

          .p3-content { padding: 28px 0 40px; }

          .p3-dl { display: block; }
          .p3-dl-row { display: block; padding: 10px 0; border-bottom: 1px solid var(--border); }
          .p3-dl dt {
            display: block;
            width: 100%;
            padding: 0 0 3px;
            white-space: normal;
          }
          .p3-dl dd { display: block; padding: 0; }

          .p3-class-row { flex-direction: column; align-items: flex-start; }

          .p3-book-row { flex-direction: column; gap: 8px; }
          .p3-amazon-link { margin-top: 0; }
        }
      `}</style>
    </>
  );
}
