// pages/landing.js
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="hero-section">
      <h1>Welcome to Chain</h1>
      <div className="cta-buttons">
        <Link href="/jobfair">
          <a className="cta-button">Register on Job Fair</a>
        </Link>
        <Link href="/register">
          <a className="cta-button">Register on Chain</a>
        </Link>
      </div>

      <style jsx>{`
        .hero-section {
          text-align: center;
          padding: 100px 20px;
          background-color: #f0f0f0;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .cta-button {
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          font-size: 1.2rem;
          transition: background-color 0.3s ease;
        }

        .cta-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
