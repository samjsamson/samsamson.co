import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookingSection } from "./booking";
import styles from "./pickleball.module.css";

const title = "Pickleball Lessons in Danville & San Ramon | Sam Samson";
const description = "Private and small-group pickleball coaching with Sam Samson for beginners and recreational players in Danville, San Ramon, and the Bay Area. From $40/hour. Book online.";

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
          <a href="#book" className={styles.smallButton}>Book a lesson <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="main">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div>
            <p className={styles.eyebrow}>BASED IN DANVILLE · COACHING ACROSS THE BAY</p>
            <h1 id="hero-title">Less guessing.<br /><span>More good games.</span></h1>
            <p className={styles.intro}>Pickleball lessons with Sam Samson. Simple, practical coaching for beginners and recreational players in the East Bay.</p>
            <a href="#book" className={styles.primaryButton}>Find your next lesson <span aria-hidden="true">↗</span></a>
            <p className={styles.heroNote}>From $40 / hour · Private sessions & small groups</p>
          </div>
          <figure className={styles.heroPhoto}>
            <Image src="/images/pickleball/sam-tournament.jpg" alt="Sam with fellow pickleball players wearing tournament medals" fill sizes="(max-width: 760px) 100vw, 440px" priority className={styles.photo} />
            <figcaption>Good games. Great people.</figcaption>
          </figure>
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
          <div className={styles.coachVisual}>
            <p className={styles.eyebrow}>YOUR COACH</p>
            <div className={styles.coachPhoto}><Image src="/images/pickleball/sam-medal.jpg" alt="Pickleball players celebrating with medals after a tournament" fill sizes="(max-width: 760px) 100vw, 320px" className={styles.photo} /></div>
          </div>
          <div>
            <h2 id="about-title">Hey, I’m Sam.</h2>
            <p>I’m a Danville-based pickleball player who loves the game and helping people get comfortable on the court.</p>
            <p>We’ll start with what you want to improve, keep the instruction clear, and spend our time practicing. Whether it’s your first session or you’re finding your rhythm, the goal is to help you enjoy playing more.</p>
            <div className={styles.location}>Based in Danville <span>Serving the East Bay & beyond</span></div>
          </div>
        </section>

        <section className={styles.gallerySection} aria-labelledby="gallery-title">
          <div className={styles.galleryHeading}><p className={styles.eyebrow}>LIFE ON COURT</p><h2 id="gallery-title">A few reasons I love this game.</h2></div>
          <div className={styles.gallery}>
            {[
              { src: "outdoor-courts.jpg", alt: "Players enjoying outdoor pickleball beneath a blue sky", label: "One more game." },
              { src: "paddle.jpg", alt: "Pickleball paddle and bright yellow ball ready for a game", label: "Ready to play." },
              { src: "court-community.jpg", alt: "Pickleball players and paddles beside an outdoor court", label: "Find your people." },
              { src: "courtside-dog.jpg", alt: "A golden retriever beside a pickleball court", label: "The courtside company." },
            ].map((photo) => <figure key={photo.src}><div className={styles.galleryImage}><Image src={`/images/pickleball/${photo.src}`} alt={photo.alt} fill sizes="(max-width: 480px) 80vw, (max-width: 760px) 45vw, 250px" className={styles.photo} /></div><figcaption>{photo.label}</figcaption></figure>)}
          </div>
        </section>

        <section className={styles.serviceArea} aria-labelledby="areas-title">
          <p className={styles.eyebrow}>NEAR YOU</p>
          <div><h2 id="areas-title">Local lessons. Around the Bay.</h2><p>Based in Danville, with flexible scheduling in:</p>
            <ul>{["Danville", "Alamo", "San Ramon", "Oakland", "Pleasanton", "Fremont", "Dublin", "San Leandro", "Foster City", "Berkeley", "Hayward"].map((city) => <li key={city}>{city}</li>)}</ul>
            <p className={styles.areaNote}>Text me your preferred area. We’ll confirm an authorized court location and availability together.</p>
          </div>
        </section>

        <BookingSection />

        <section className={styles.faq} aria-labelledby="faq-title">
          <h2 id="faq-title">A few quick answers.</h2>
          <details><summary>Do I need experience?</summary><p>No. Beginners are welcome. We can start with scoring, the rules, and the first shots you need to play.</p></details>
          <details><summary>Where do lessons take place?</summary><p>Lessons are available around Danville, Alamo, San Ramon, Oakland, Pleasanton, Fremont, Dublin, San Leandro, Foster City, Berkeley, and Hayward. We’ll confirm an authorized court location and availability for your session.</p></details>
          <details><summary>Can I bring a friend?</summary><p>Yes. Each additional guest is $20 per hour. For example, a one-hour session for two players is $60 total, and a two-hour session for two players is $110 total. Text me to arrange your group.</p></details>
          <details><summary>How much does a lesson cost?</summary><p>A private lesson is $40 for one hour or $70 for two hours. Add $20 per hour for each additional guest. Court arrangements and any separate court fees are confirmed before your session.</p></details>
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href="/">Sam Samson</Link>
        <p>Pickleball coaching · East Bay, California</p>
        <a href="sms:+19257865237">Text Sam · (925) 786-5237 <span aria-hidden="true">↗</span></a>
      </footer>
    </div>
  );
}
