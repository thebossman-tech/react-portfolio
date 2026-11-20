import { useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { validateContact, buildEmailLink } from "../lib/contact";

const initialValues = {
  name: "",
  email: "",
  projectType: "Website / landing page",
  message: "",
};
export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [draft, setDraft] = useState(null);
  const [copyStatus, setCopyStatus] = useState("");
  const form = useRef(null);
  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setDraft(null);
    setCopyStatus("");
  }
  function submit(event) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      form.current.elements.namedItem(Object.keys(nextErrors)[0])?.focus();
      return;
    }
    // The form prepares a draft only. It never claims delivery or sends in the background.
    setDraft({ ...values });
  }
  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(
        `From: ${draft.name} <${draft.email}>\nProject: ${draft.projectType}\n\n${draft.message}`,
      );
      setCopyStatus("Copied. Paste it into your email app.");
    } catch {
      setCopyStatus(
        "Copy is unavailable here. Select the draft text below to copy it manually.",
      );
    }
  }
  const errorProps = (name) => ({
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });
  return (
    <div className="contact-layout">
      <div className="contact-copy">
        <p className="eyebrow">A GOOD PROJECT STARTS WITH A CONVERSATION</p>
        <h2>
          Tell me what
          <br />
          you have in mind<span>.</span>
        </h2>
        <p>
          A landing page, a small-business website, or an opportunity to build
          with your team. I’d like to hear about it.
        </p>
        <a className="email-link" href={`mailto:${profile.email}`}>
          {profile.email}
          <ArrowUpRight size={18} />
        </a>
        <div className="contact-detail">
          <span>BASED IN</span>
          <strong>{profile.location}</strong>
          <p>Open to remote collaboration, including US hours.</p>
        </div>
        <div className="contact-detail">
          <span>LOOKING FOR</span>
          <p>
            Freelance projects, paid internships and junior frontend
            opportunities.
          </p>
        </div>
      </div>
      <form ref={form} className="contact-form" onSubmit={submit} noValidate>
        <div className="form-intro">
          <Mail size={22} />
          <span>A little about your project</span>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="name">
              Your name <span>(required)</span>
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              maxLength={80}
              value={values.name}
              onChange={update}
              placeholder="What should I call you?"
              {...errorProps("name")}
            />
            {errors.name && (
              <p className="field-error" id="name-error">
                {errors.name}
              </p>
            )}
          </div>
          <div className="field">
            <label htmlFor="email">
              Email address <span>(required)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={160}
              value={values.email}
              onChange={update}
              placeholder="you@company.com"
              {...errorProps("email")}
            />
            {errors.email && (
              <p className="field-error" id="email-error">
                {errors.email}
              </p>
            )}
          </div>
        </div>
        <div className="field">
          <label htmlFor="projectType">What can I help with?</label>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={update}
          >
            <option>Website / landing page</option>
            <option>Responsive redesign / fixes</option>
            <option>Frontend role / internship</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="message">
            A few project details <span>(required)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            maxLength={3000}
            value={values.message}
            onChange={update}
            placeholder="What are you building? What would a good outcome look like?"
            {...errorProps("message")}
          />
          {errors.message && (
            <p className="field-error" id="message-error">
              {errors.message}
            </p>
          )}
          <small className="field-hint">
            At least 20 characters. Please leave out passwords or sensitive
            information.
          </small>
        </div>
        {Object.values(errors).some(Boolean) && (
          <p className="field-error" role="alert">
            Please check the highlighted fields.
          </p>
        )}
        <button type="submit" className="button button-primary full-width">
          Prepare email <ArrowUpRight size={18} />
        </button>
        <p className="form-disclosure">
          This form prepares a draft. You’ll review and send it in your email
          app. Nothing is sent automatically or stored on a server.
        </p>
        {draft && (
          <div className="draft-panel" role="status">
            <h3>
              <Check size={18} /> Your email draft is ready
            </h3>
            <p>
              No message has been sent. Open your email app to review it, or
              copy the draft.
            </p>
            <div className="button-row">
              <a className="button button-primary" href={buildEmailLink(draft)}>
                Open email app <ArrowUpRight size={16} />
              </a>
              <button
                className="button button-secondary"
                type="button"
                onClick={copyMessage}
              >
                <Copy size={16} />
                Copy draft
              </button>
            </div>
            <p>{copyStatus}</p>
            <pre
              tabIndex={0}
            >{`From: ${draft.name} <${draft.email}>\nProject: ${draft.projectType}\n\n${draft.message}`}</pre>
          </div>
        )}
      </form>
    </div>
  );
}
