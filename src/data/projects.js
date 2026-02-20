export const projects = [
  {
    id: "gadget-gizmo",
    title: "Gadget Gizmo",
    subtitle: "Self-Initiated E-commerce Platform",
    description:
      "Independently designed and implemented a full-stack e-commerce platform with a microservices-inspired backend and React-based frontend.",
    architecture: {
      overview:
        "Microservices-inspired architecture with dedicated services for authentication, product catalog, order management, and payment processing, focused on clear service boundaries and scalability.",
      backend: [
        "RESTful API design",
        "JWT-based authentication",
        "Role-based access control",
        "Event-driven communication",
        "Database optimization"
      ],
      authFlow: [
        "User registration/login",
        "JWT token generation",
        "Token refresh mechanism",
        "Secure session management"
      ],
      cicd: [
        "GitHub Actions workflow",
        "Automated testing",
        "Docker image building",
        "Kubernetes deployment"
      ],
      deployment: [
        "Containerized with Docker",
        "Deployed on GKE",
        "Load balancing",
        "Auto-scaling configuration"
      ]
    },
    techStack: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "Docker",
      "Kubernetes",
      "GCP"
    ],
    github: "https://github.com/NeoShubh",
    live: ""
  }
];
