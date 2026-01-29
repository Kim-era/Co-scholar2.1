import "../styles/About.css";


export default function About() {
  return (
    <>

      <main className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1>About Co-Scholar</h1>
          <p>
            Co-Scholar is a learning community built to empower students through
            shared knowledge, real opportunities, and collaborative problem-solving.
          </p>
        </section>

        {/* Purpose */}
        <section className="about-section light">
          <h2>Why Co-Scholar Exists</h2>
          <p>
            Education today is full of information, yet many learners still feel lost,
            unsupported, or disconnected. Co-Scholar was created to close that gap —
            not by replacing schools or teachers, but by building a space where students
            learn together, ask hard questions, and discover opportunities that shape
            their futures.
          </p>
        </section>

        {/* Mission */}
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to break down barriers to learning by providing accessible,
            community-driven educational resources and guidance tailored to modern learners.
            We aim to inspire curiosity, encourage collaboration, and support academic growth
            beyond the classroom.
          </p>
        </section>

        {/* Pillars */}
        <section className="about-section light">
          <h2>Our Core Pillars</h2>

          <div className="pillars-grid">
            <div className="pillar-card">
              <h3>📚 Shared Knowledge</h3>
              <p>
                Learning is stronger when shared. We encourage students and educators
                to exchange ideas, resources, and experiences openly.
              </p>
            </div>

            <div className="pillar-card">
              <h3>🎯 Opportunities & Growth</h3>
              <p>
                From scholarships to academic programs, Co-Scholar helps learners
                discover pathways that unlock real growth.
              </p>
            </div>

            <div className="pillar-card">
              <h3>🧠 Problem-Solving Culture</h3>
              <p>
                We promote deep thinking and curiosity by tackling difficult
                questions together — because struggle is part of learning.
              </p>
            </div>

            <div className="pillar-card">
              <h3>🤝 Community-Driven Learning</h3>
              <p>
                Education thrives in community. Co-Scholar connects learners,
                mentors, and educators in a supportive ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            We envision a future where learning is not limited by location,
            background, or access. Co-Scholar aims to become a trusted global
            learning hub — starting with students who are curious, motivated,
            and ready to grow together.
          </p>
        </section>

        {/* Creators */}
        <section className="about-section light">
          <h2>Meet the Creators</h2>

          <div className="creators-grid">
            <div className="creator-card">
              <img src="/images/penfold.jpg" alt="Penfold" />
              <h3>Penfold</h3>
              <span>Co-Founder & Lead Developer</span>
              <p>
                Penfold is the visionary behind Co-Scholar, driven by a passion
                for education and technology. He focuses on building tools that
                genuinely help learners grow.
              </p>
            </div>

            <div className="creator-card">
              <img src="/images/gabriel.jpg" alt="Gabriel" />
              <h3>Gabriel</h3>
              <span>Co-Founder & Educational Strategist</span>
              <p>
                Gabriel brings deep insight into learning systems and student needs,
                ensuring Co-Scholar stays practical, inclusive, and impactful.
              </p>
            </div>
          </div>
          <section className="about-section light">
  <h2>Be Part of Co-Scholar</h2>
  <p>
    Co-Scholar isn’t built through emails — it’s built through participation.
    Whether you’re here to learn, contribute, or grow with others, there’s a
    place for you in the community.(For formal communication,use our email:info@co-scholar.com)
  </p>

  <div className="engagement-grid">
    <div className="engage-card">
      <h3>💬 Join the Community</h3>
      <p>
        Participate in discussions, ask tough questions, and learn from peers
        navigating the same academic challenges.
      </p>
      <a href="/community">Explore Community</a>
    </div>

    <div className="engage-card">
      <h3>📝 Share Knowledge</h3>
      <p>
        Write articles, share strategies, or explain concepts that helped you
        learn better — your experience matters.
      </p>
      <a href="/community">Contribute an Article</a>
    </div>

    <div className="engage-card">
      <h3>🎯 Discover Opportunities</h3>
      <p>
        Find scholarships, programs, competitions, and academic pathways shared
        by the community.
      </p>
      <a href="/community">View Opportunities</a>
    </div>

    <div className="engage-card">
      <h3>🚀 Help Shape the Platform</h3>
      <p>
        Co-Scholar is evolving. Join early, suggest features, and help define
        what a modern learning community should be.
      </p>
      <a href="/community">Get Involved</a>
    </div>
  </div>
</section>

        </section>
      </main>
    </>
  );
}
