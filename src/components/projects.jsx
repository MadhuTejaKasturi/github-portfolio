function Projects() {
    return (
      <section className="p-6 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
  
        <div className="mb-6">
          <h3 className="text-xl font-bold">📚 Library Management System</h3>
          <p>
            Built using Jakarta EE, JPA, JSF, and secured with role-based access. Integrated with MySQL and tested using JUnit.
          </p>
        </div>
  
        <div className="mb-6">
          <h3 className="text-xl font-bold">📝 Handwritten Text Recognition</h3>
          <p>
            Deep learning with Apache MXNet, OpenCV, CNN-RNN-CTC model deployed on AWS and containerized with Docker.
          </p>
        </div>
  
        <div>
          <h3 className="text-xl font-bold">🎬 Movie Booking System</h3>
          <p>
            Full-stack app using React.js, Node.js, Express, MongoDB, and MySQL with a recommendation engine and AWS deployment.
          </p>
        </div>
      </section>
    );
  }
  
  export default Projects;
  