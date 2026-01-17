export default function Contact() {
  return (
    <div className="contact">
      <p className="contact-text">
        Want to reach out? Here are the best places to find me:
      </p>

      <div className="contact-links">
        {/* Replace these with your real links */}
        <a
          href="https://github.com/GlenWhiteII"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/glen-white-5561b12a8"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:iiglen.white@gmail.com">Email</a>
      </div>
      <p className="phone-text">Phone: (715) 207-4624</p>
    </div>
  );
}
