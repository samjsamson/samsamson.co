import styles from "./pickleball.module.css";

const bookingUrl = "https://calendly.com/samsamson/";

export function BookingSection() {
  return (
    <section id="book" className={styles.bookingSection} aria-labelledby="booking-title">
      <div className={styles.bookingIntro}>
        <p className={styles.eyebrow}>MAKE TIME FOR YOUR GAME</p>
        <h2 id="booking-title">Let’s get on court.</h2>
        <p>Pick your session. Find a time on Calendly.<br />I’ll help with the rest.</p>
      </div>
      <div className={styles.phoneHighlight}><a href="tel:+19257865237" className={styles.phoneNumber}>(925) 786-5237</a><p className={styles.phoneInvitation}>Feel free to text or call me anytime.</p><a href="sms:+19257865237" className={styles.textLink}>Text me <span aria-hidden="true">↗</span></a></div>
      <div className={styles.priceGrid}>
        <article className={styles.priceCard}>
          <p className={styles.sessionLabel}>THE ONE-HOUR SESSION</p>
          <h3><span className={styles.price}>$40</span><span className={styles.duration}> / 1 hour</span></h3>
          <p>A focused session to learn the basics or work on a specific part of your game.</p>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>Book on Calendly <span aria-hidden="true">↗</span><span className={styles.srOnly}> (opens in a new tab)</span></a>
        </article>
        <article className={styles.priceCard}>
          <div className={styles.sessionTop}><p className={styles.sessionLabel}>THE TWO-HOUR SESSION</p><span className={styles.saving}>Save $10</span></div>
          <h3><span className={styles.price}>$70</span><span className={styles.duration}> / 2 hours</span></h3>
          <p>More time for drills, feedback, and putting what you’ve learned into practice.</p>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>Book on Calendly <span aria-hidden="true">↗</span><span className={styles.srOnly}> (opens in a new tab)</span></a>
        </article>
      </div>
      <div className={styles.guestRow}><div><h3>Better with a friend.</h3><p>Add a guest for $20 per hour, per person.</p></div><a href="sms:+19257865237">Arrange a shared lesson <span aria-hidden="true">↗</span></a></div>

      <p className={styles.bookingFinePrint}>Calendly opens in a new tab. Select the event that matches your preferred session, or text me if you don’t see a suitable option. Court location, access, and any separate court fees are confirmed directly.</p>
    </section>
  );
}
