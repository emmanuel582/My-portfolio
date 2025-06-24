import SEO from './SEO';

const Journal = () => {
  return (
    <>
      <SEO
        title="Journal"
        description="Personal journal and insights by Oyebimpe Emmanuel."
        url="https://emmanueloyebimpe.vercel.app/journal"
      />
      <div className="journal-container">
        <style jsx>{`
          .journal-container {
            width: 100%;
            max-width: 650px;
            margin: 0 auto;
            min-height: 60vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 2rem;
            text-align: center;
          }
          .journal-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #111;
            font-family: 'Inter', Arial, sans-serif;
          }
          .journal-desc {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 3rem;
          }
          .journal-empty {
            font-size: 1.1rem;
            color: #666;
            margin-top: 2rem;
          }
        `}</style>
        <h1 className="journal-title">Journal</h1>
        <div className="journal-desc">
          Thoughts, tutorials and insights about software development
        </div>
        <div className="journal-empty">No journal available yet</div>
      </div>
    </>
  );
};

export default Journal; 