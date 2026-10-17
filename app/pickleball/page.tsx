import type { Metadata } from "next";
import Link from "next/link";
import { BookingRequest } from "./booking-request";
import styles from "./pickleball.module.css";

const title = "Pickleball Lessons in Danville & San Ramon | Sam Samson";
const description = "Private and small-group pickleball coaching with Sam Samson for beginners and recreational players in Danville, Alamo, and San Ramon. Request a lesson.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pickleball" },
  openGraph: { title, description, url: "/pickleball", type: "website" },
  twitter: { card: "summary", title, description },
};

const lessons = [
  { number: "01", title: "Start with the basics.", audience: "New to pickleball", text: "Learn scoring, serving, returning, and where to stand. Get comfortable enough to join a game and enjoy it." },
  { number: "02", title: "Build a steadier game.", audience: "Recreational players", text: "Work on consistency, dinks, volleys, and shot selection. Focus on the habits that keep you in the point." },
  { number: "03", title: "Bring your people.", audience: "Friends & small groups", text: "Learn together in a relaxed session. Practice the fundamentals, run drills, and put them to use in a game." },
];

export default function PickleballPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#main">Skip to content</a>
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>Sam Samson<span> / Pickleball</span></Link>
        <nav aria-label="Pickleball navigation">
          <a href="#lessons" className={styles.navLink}>Lessons</a>
          <a href="#book" className={styles.smallButton}>Request a lesson <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="main">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div>
            <p className={styles.eyebrow}>DANVILLE · ALAMO · SAN RAMON</p>
            <h1 id="hero-title">Less guessing.<br /><span>More good games.</span></h1>
            <p className={styles.intro}>Pickleball lessons with Sam Samson. Simple, practical coaching for beginners and recreational players in the East Bay.</p>
            <a href="#book" className={styles.primaryButton}>Find your next lesson <span aria-hidden="true">↗</span></a>
            <p className={styles.heroNote}>Private sessions & small groups</p>
          </div>
          {/* Replace this court illustration with Sam's supplied coaching photo. */}
          <div className={styles.courtArt} role="img" aria-label="Minimal gray pickleball court illustration">
            <span className={styles.artLabel}>A little practice goes a long way.</span>
            <svg viewBox="0 0 400 480" aria-hidden="true" fill="none">
              <path d="M65 55h270v370H65z" stroke="currentColor" strokeWidth="2" />
              <path d="M65 178h270M65 302h270M200 55v123M200 302v123" stroke="currentColor" strokeWidth="2" />
              <path d="M45 240h310" stroke="currentColor" strokeWidth="3" />
              <path d="M45 246h310M45 252h310" stroke="currentColor" opacity=".35" />
              <circle cx="269" cy="353" r="12" fill="#d4d4d8" stroke="#090909" strokeWidth="3" />
              <circle cx="266" cy="350" r="1.5" fill="#52525b" />
              <circle cx="273" cy="353" r="1.5" fill="#52525b" />
              <circle cx="267" cy="357" r="1.5" fill="#52525b" />
            </svg>
            <span className={styles.artFooter}>PICKLEBALL WITH SAM <span>01 / EAST BAY</span></span>
          </div>
        </section>

        <section id="lessons" className={styles.section} aria-labelledby="lessons-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>THE LESSONS</p>
            <h2 id="lessons-title">Meet your game<br /><span>where it is.</span></h2>
          </div>
          <div className={styles.lessonGrid}>
            {lessons.map((lesson) => (
              <article key={lesson.number} className={styles.lesson}>
                <span className={styles.number}>{lesson.number}</span>
                <p className={styles.audience}>{lesson.audience}</p>
                <h3>{lesson.title}</h3>
                <p>{lesson.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.about} aria-labelledby="about-title">
          <p className={styles.eyebrow}>YOUR COACH</p>
          <div>
            <h2 id="about-title">Hey, I’m Sam.</h2>
            <p>I’m a Danville-based pickleball player who loves the game and helping people get comfortable on the court.</p>
            <p>We’ll start with what you want to improve, keep the instruction clear, and spend our time practicing. Whether it’s your first session or you’re finding your rhythm, the goal is to help you enjoy playing more.</p>
            <div className={styles.location}>Based in Danville <span>Serving the San Ramon Valley</span></div>
          </div>
        </section>

        <section id="book" className={styles.booking} aria-labelledby="booking-title">
          <div>
            <p className={styles.eyebrow}>LET’S GET ON COURT</p>
            <h2 id="booking-title">Your next game<br /><span>starts here.</span></h2>
            <p>Tell me a little about your game and when you’d like to play. We’ll work out the right session, location, and price together.</p>
            <p className={styles.bookingNote}>Lessons are arranged individually. Your time and court location are confirmed directly before booking.</p>
          </div>
          <BookingRequest />
        </section>

        <section className={styles.faq} aria-labelledby="faq-title">
          <h2 id="faq-title">A few quick answers.</h2>
          <details><summary>Do I need experience?</summary><p>No. Beginners are welcome. We can start with scoring, the rules, and the first shots you need to play.</p></details>
          <details><summary>Where do lessons take place?</summary><p>We’ll agree on an authorized teaching location around Danville, Alamo, or San Ramon before confirming your session. Availability depends on court access.</p></details>
          <details><summary>Can I bring a friend?</summary><p>Yes. Choose a shared lesson or small group in your request and include how many people would like to join.</p></details>
          <details><summary>How much does a lesson cost?</summary><p>Pricing is confirmed before booking based on session length, group size, and court costs. Send a request to discuss the options.</p></details>
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href="/">Sam Samson</Link>
        <p>Pickleball coaching · East Bay, California</p>
        <a href="mailto:samjsamson@icloud.com">Get in touch <span aria-hidden="true">↗</span></a>
      </footer>
    </div>
  );
}
