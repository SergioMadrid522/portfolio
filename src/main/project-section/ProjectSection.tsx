function ProjectSection() {
    return(
        <section className="project-section">
            <h2>Projects</h2>
            <div className="projects-container">
                <div className="projects">
                    <article className="project">
                        <div className="prject-image">
                            <img src="/" alt="project image" />
                        </div>
                        <div className="project-details">
                            <h3>Project Name</h3>
                            <p>description goes here</p>
                            <div className="tech-stack">
                                <h4>Technologies used:</h4>
                                <ul>
                                    <li>icon</li>
                                    <li>icon</li>
                                    <li>icon</li>
                                    <li>icon</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
export default ProjectSection;