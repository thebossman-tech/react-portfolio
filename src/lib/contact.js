import { profile } from "../data/profile.js";

// Pure functions can be tested without rendering React or sending any email.
export function validateContact(values) {
  const errors = {};
  if (values.name.trim().length < 2 || values.name.trim().length > 80)
    errors.name = "Enter a name between 2 and 80 characters.";
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) ||
    values.email.length > 160
  )
    errors.email = "Enter a valid email address.";
  if (values.message.trim().length < 20 || values.message.trim().length > 3000)
    errors.message =
      "Write between 20 and 3,000 characters about your project.";
  return errors;
}
export function buildEmailLink(values) {
  const subject = `${values.projectType}: enquiry from ${values.name.trim()}`;
  const body = `Hello Olatunbosun,\n\n${values.message.trim()}\n\nFrom: ${values.name.trim()}\nReply to: ${values.email.trim()}`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
