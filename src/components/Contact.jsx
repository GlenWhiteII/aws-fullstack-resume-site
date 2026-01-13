export default function Contact() {
  return (
    <div className="contact">
      <p className="contact-text">
        Want to reach out? Here are the best places to find me:
      </p>

      <div className="contact-links">
        {/* Replace these with your real links */}
        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:YOUR_EMAIL@example.com">Email</a>
      </div>
    </div>
  );
}
