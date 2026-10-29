
const projects = [
  {
    title: "Electrical Systems",
    category: "Electrical Work",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Maintenance Solutions",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Modern Office Interiors",
    category: "Interior Designing",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Projects() {
  return (
    <section className="section page-section">
      <div className="section-heading">
        <span className="eyebrow">OUR WORK</span>
        <h1>Projects & Solutions</h1>
        <p>Examples of work related to our service categories.</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <span className="eyebrow">{project.category}</span>
              <h3>{project.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
