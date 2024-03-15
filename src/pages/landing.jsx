// pages/landing.js
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="hero-section">
      <h1>Welcome to Chain</h1>
      <p className="hero-description">Empowering Your Career Journey</p>
      <div className="cta-buttons">
        <Link href="/Jobfair">
          <a className="cta-button primary">Register in Job Fair</a>
        </Link>
        <Link href="/Body">
          <a className="cta-button secondary">Register in Chain</a>
        </Link>
      </div>

      <style jsx>{`
        .hero-section {
          text-align: center;
          padding: 100px 20px;
          background-image: linear-gradient(to right, #f0f0f0, #ffffff);
        }

        h1 {
          font-size: 3.5rem;
          margin-bottom: 20px;
          color: #333;
        }

        .hero-description {
          font-size: 1.5rem;
          margin-bottom: 30px;
          color: #666;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .cta-button {
          padding: 15px 30px;
          border-radius: 8px;
          font-size: 1.2rem;
          text-decoration: none;
          transition: background-color 0.3s ease, color 0.3s ease;
          cursor: pointer;
        }

        .cta-button.primary {
          background-color: #007bff;
          color: #fff;
        }

        .cta-button.secondary {
          background-color: #fff;
          color: #007bff;
          border: 2px solid #007bff;
        }

        .cta-button:hover {
          filter: brightness(1.1);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1.2rem;
          }

          .cta-button {
            padding: 12px 25px;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
