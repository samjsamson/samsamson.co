"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/data";
import styles from "./pickleball.module.css";

export function BookingRequest() {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      "Hi Sam, I’d like to arrange a pickleball lesson.",
      "",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Lesson: ${data.get("lesson")}`,
      `Preferred area: ${data.get("area")}`,
      "",
      "Availability and goals:",
      String(data.get("message") || ""),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Pickleball lesson request")}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formRow}>
        <label htmlFor="pb-name">Your name<input id="pb-name" name="name" autoComplete="name" placeholder="First and last name" maxLength={100} required /></label>
        <label htmlFor="pb-email">Email address<input id="pb-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required /></label>
      </div>
      <div className={styles.formRow}>
        <label htmlFor="pb-lesson">Lesson type<select id="pb-lesson" name="lesson" defaultValue="" required><option value="" disabled>Select a session</option><option>Private lesson</option><option>Shared lesson (2 players)</option><option>Small group (3–4 players)</option><option>Help me choose</option></select></label>
        <label htmlFor="pb-area">Preferred area<select id="pb-area" name="area" defaultValue="" required><option value="" disabled>Select an area</option><option>Danville</option><option>Alamo</option><option>San Ramon</option><option>Flexible</option></select></label>
      </div>
      <label htmlFor="pb-message">What would you like to work on?<textarea id="pb-message" name="message" rows={4} maxLength={1500} placeholder="Your experience, goals, and a few days or times that work for you." required /></label>
      <button type="submit" className={styles.primaryButton}>Request a lesson by email <span aria-hidden="true">↗</span></button>
      <p className={styles.formNote}>Opens your email app with your details filled in. Send the email to complete your request.</p>
      {prepared && <p role="status" className={styles.status}>Your email draft is ready to send in your email app. If it didn’t open, email <a href={`mailto:${site.email}`}>{site.email}</a> directly. Your lesson is confirmed only after we agree on the details.</p>}
      <noscript><p>Email <a href={`mailto:${site.email}`}>{site.email}</a> with your preferred lesson, area, and availability.</p></noscript>
    </form>
  );
}
