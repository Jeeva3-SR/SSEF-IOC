const concepts = [
  {
    title: "Client-Server Architecture",
    icon: "/assets/server.png",
    sections: [
      {
        title: "What is Client-Server Architecture?",
        content: "A distributed application structure that partitions tasks or workloads between service providers (servers) and service requesters (clients). Clients initiate communication sessions with servers which await incoming requests."
      },
      {
        title: "Key Characteristics",
        content: [
          "Separation of concerns between client and server",
          "Centralized data storage and management",
          "Scalability through distributed processing",
          "Multiple clients can connect to a single server",
          "Stateless or stateful communication protocols"
        ]
      },
      {
        title: "Modern Web Implementation",
        content: [
          "Frontend (client): Browser, mobile apps, or other user interfaces",
          "Backend (server): Handles business logic, data processing, and storage",
          "Communication via HTTP/HTTPS protocols",
          "Often extended to multi-tier architectures (presentation, application, data layers)"
        ]
      },
      {
        title: "Benefits",
        content: [
          "Centralized control and security",
          "Easier maintenance and updates",
          "Efficient resource sharing",
          "Improved scalability",
          "Cross-platform compatibility"
        ]
      }
    ]
  },
  {
    title: "HTTP & Web Servers",
    icon: "/assets/http.png",
    sections: [
      {
        title: "What is HTTP?",
        content: "HyperText Transfer Protocol (HTTP) is the foundation of data communication for the World Wide Web, defining how messages are formatted and transmitted."
      },
      {
        title: "Key Components",
        content: [
          "Request-response protocol between clients and servers",
          "Stateless protocol (each request independent)",
          "URLs identify resources",
          "Methods: GET, POST, PUT, DELETE, etc.",
          "Status codes: 200 (OK), 404 (Not Found), 500 (Server Error)"
        ]
      },
      {
        title: "Web Servers",
        content: [
          "Software that processes HTTP requests",
          "Examples: Apache, Nginx, Node.js servers",
          "Serve static files or generate dynamic content",
          "Handle load balancing and reverse proxying",
          "Implement security features like HTTPS"
        ]
      },
      {
        title: "Evolution",
        content: [
          "HTTP/1.1: Persistent connections",
          "HTTP/2: Multiplexing, header compression",
          "HTTP/3: QUIC protocol, reduced latency",
          "WebSockets: Full-duplex communication"
        ]
      }
    ]
  },
  {
    title: "APIs & REST",
    icon: "/assets/api.png",
    sections: [
      {
        title: "What is an API?",
        content: "Application Programming Interfaces (APIs) are sets of protocols and tools for building software applications, defining how components should interact."
      },
      {
        title: "REST Principles",
        content: [
          "Client-server architecture",
          "Stateless operations",
          "Cacheable responses",
          "Uniform interface",
          "Layered system"
        ]
      },
      {
        title: "RESTful Implementation",
        content: [
          "Resources identified in requests (URLs)",
          "HTTP methods define actions (GET, POST, PUT, DELETE)",
          "Representations typically in JSON or XML",
          "Hypermedia links (HATEOAS) for discoverability"
        ]
      },
      {
        title: "Best Practices",
        content: [
          "Use proper HTTP status codes",
          "Version your API (api/v1/resource)",
          "Implement pagination for large datasets",
          "Provide comprehensive documentation",
          "Consider security (authentication, rate limiting)"
        ]
      }
    ]
  },
  {
    title: "Authentication & Security",
    icon: "/assets/security.png",
    sections: [
      {
        title: "Core Concepts",
        content: "Authentication verifies identity, while authorization determines access rights. Security protects systems from digital attacks and ensures data privacy."
      },
      {
        title: "Authentication Methods",
        content: [
          "Session-based (server-side sessions)",
          "Token-based (JWT - JSON Web Tokens)",
          "OAuth/OpenID Connect (third-party auth)",
          "Biometric authentication"
        ]
      },
      {
        title: "Security Threats",
        content: [
          "Cross-Site Scripting (XSS)",
          "Cross-Site Request Forgery (CSRF)",
          "SQL Injection",
          "Man-in-the-Middle attacks",
          "Denial of Service (DoS)"
        ]
      },
      {
        title: "Protection Measures",
        content: [
          "HTTPS with TLS encryption",
          "Input validation and sanitization",
          "Security headers (CSP, XSS Protection)",
          "Regular security audits",
          "Principle of least privilege"
        ]
      }
    ]
  },
  {
    title: "Node.js & Express.js",
    icon: "/assets/node.png",
    sections: [
      {
        title: "What is Node.js?",
        content: "Node.js is a JavaScript runtime built on Chrome's V8 engine that enables server-side JavaScript execution with non-blocking, event-driven architecture."
      },
      {
        title: "Key Features",
        content: [
          "Single-threaded with event loop",
          "Asynchronous I/O operations",
          "NPM ecosystem with vast package library",
          "Built-in modules for core functionality",
          "Excellent for I/O-bound applications"
        ]
      },
      {
        title: "Express.js Framework",
        content: [
          "Minimalist web framework for Node.js",
          "Middleware architecture",
          "Routing system with parameters",
          "Template engine integration",
          "Error handling mechanisms"
        ]
      },
      {
        title: "Common Patterns",
        content: [
          "MVC architecture",
          "Route handlers with async/await",
          "Middleware chains (auth, logging)",
          "REST API development",
          "Error handling middleware"
        ]
      }
    ]
  },
  {
    title: "Databases",
    icon: "/assets/database.png",
    sections: [
      {
        title: "Database Fundamentals",
        content: "Databases systematically store, retrieve, and manage digital data in structured or unstructured formats."
      },
      {
        title: "SQL Databases",
        content: [
          "Structured data with predefined schemas",
          "ACID transactions (Atomicity, Consistency, Isolation, Durability)",
          "Tables with relationships (joins)",
          "Examples: PostgreSQL, MySQL, SQL Server",
          "Ideal for complex queries and transactions"
        ]
      },
      {
        title: "NoSQL Databases",
        content: [
          "Flexible, schema-less data models",
          "Horizontal scaling (sharding)",
          "Types: Document, Key-Value, Column-family, Graph",
          "Examples: MongoDB, Redis, Cassandra",
          "Great for big data and real-time apps"
        ]
      },
      {
        title: "Choosing a Database",
        content: [
          "Consider data structure and relationships",
          "Evaluate scalability needs",
          "Assess consistency requirements",
          "Examine query patterns",
          "Factor in team expertise"
        ]
      }
    ]
  },
  {
    title: "Middleware",
    icon: "/assets/middleware.png",
    sections: [
      {
        title: "What is Middleware?",
        content: "Middleware functions process requests before they reach route handlers, forming a pipeline in web frameworks."
      },
      {
        title: "Common Types",
        content: [
          "Authentication/authorization",
          "Request parsing (body, cookies)",
          "Logging and monitoring",
          "Caching and compression",
          "Error handling"
        ]
      },
      {
        title: "Express.js Implementation",
        content: [
          "Executes in defined order",
          "Can modify request/response objects",
          "Can terminate request-response cycle",
          "Can call next() to continue processing",
          "Error-handling middleware (4 parameters)"
        ]
      },
      {
        title: "Best Practices",
        content: [
          "Keep middleware focused and small",
          "Handle errors properly",
          "Consider performance impact",
          "Document custom middleware",
          "Reuse through modularization"
        ]
      }
    ]
  },
  {
    title: "Templating Engines",
    icon: "/assets/template.png",
    sections: [
      {
        title: "What are Templating Engines?",
        content: "Tools that generate dynamic HTML by combining templates with data, enabling server-side rendering."
      },
      {
        title: "Popular Options",
        content: [
          "EJS (Embedded JavaScript)",
          "Pug/Jade (indentation-based)",
          "Handlebars (logic-less)",
          "Mustache (simple syntax)",
          "React SSR (JSX-based)"
        ]
      },
      {
        title: "Core Features",
        content: [
          "Variable interpolation",
          "Conditional rendering",
          "Loops and iterations",
          "Template inheritance/layouts",
          "Partial views/components"
        ]
      },
      {
        title: "When to Use",
        content: [
          "Content-heavy websites",
          "SEO-critical applications",
          "Progressive enhancement",
          "Server-rendered dashboards",
          "Email template generation"
        ]
      }
    ]
  },
  {
    title: "Session Management",
    icon: "/assets/session.png",
    sections: [
      {
        title: "Session Concepts",
        content: "Session management maintains user state across multiple requests in web applications."
      },
      {
        title: "Implementation Approaches",
        content: [
          "Server-side sessions (memory, database)",
          "Client-side tokens (JWT)",
          "Cookie-based sessions",
          "Token-based authentication",
          "OAuth flows"
        ]
      },
      {
        title: "Security Considerations",
        content: [
          "Secure/HttpOnly cookie flags",
          "Session expiration policies",
          "Token revocation mechanisms",
          "CSRF protection",
          "Session fixation prevention"
        ]
      },
      {
        title: "Scalability Patterns",
        content: [
          "Distributed session stores (Redis)",
          "Stateless authentication (JWT)",
          "Session clustering",
          "Load balancing with sticky sessions",
          "Token refresh strategies"
        ]
      }
    ]
  },
  {
    title: "Git & GitHub",
    icon: "/assets/git.png",
    sections: [
      {
        title: "Version Control Basics",
        content: "Git is a distributed version control system that tracks changes in source code during software development."
      },
      {
        title: "Core Concepts",
        content: [
          "Repositories (local and remote)",
          "Commits (snapshots with metadata)",
          "Branches (isolated development lines)",
          "Merging and rebasing",
          "Conflict resolution"
        ]
      },
      {
        title: "GitHub Features",
        content: [
          "Pull requests and code review",
          "Issues and project management",
          "Actions (CI/CD pipelines)",
          "Wikis and documentation",
          "Package registry"
        ]
      },
      {
        title: "Workflow Strategies",
        content: [
          "Feature branch workflow",
          "Gitflow (develop/main branches)",
          "Forking workflow (open source)",
          "Trunk-based development",
          "Commit message conventions"
        ]
      }
    ]
  },
  {
    title: "Linux Commands",
    icon: "/assets/linux.png",
    sections: [
      {
        title: "Linux Fundamentals",
        content: "Linux commands provide powerful control over Unix-based systems, essential for server management."
      },
      {
        title: "Essential Commands",
        content: [
          "File operations: ls, cd, cp, mv, rm",
          "Process management: ps, top, kill",
          "Text manipulation: grep, awk, sed",
          "Permissions: chmod, chown",
          "Networking: ping, curl, ssh"
        ]
      },
      {
        title: "System Administration",
        content: [
          "Package management: apt, yum",
          "User management: useradd, passwd",
          "Service control: systemctl",
          "Disk usage: df, du",
          "Log viewing: journalctl, tail"
        ]
      },
      {
        title: "Productivity Tips",
        content: [
          "Command chaining with pipes (|)",
          "Output redirection (>, >>)",
          "Command history (history)",
          "Aliases for common commands",
          "Scripting with bash"
        ]
      }
    ]
  },
  {
    title: "Web Security Vulnerabilities",
    icon: "/assets/vulnerabilities.png",
    sections: [
      {
        title: "Common Threats",
        content: "Web applications face numerous security threats that developers must understand and mitigate."
      },
      {
        title: "Critical Vulnerabilities",
        content: [
          "XSS (Cross-Site Scripting)",
          "CSRF (Cross-Site Request Forgery)",
          "SQL Injection",
          "Insecure Direct Object References",
          "Security Misconfigurations"
        ]
      },
      {
        title: "Defense Mechanisms",
        content: [
          "Input validation and sanitization",
          "Prepared statements for SQL",
          "CSP (Content Security Policy)",
          "CSRF tokens",
          "HTTPS with proper TLS configuration"
        ]
      },
      {
        title: "Security Headers",
        content: [
          "Content-Security-Policy",
          "X-XSS-Protection",
          "Strict-Transport-Security",
          "X-Frame-Options",
          "X-Content-Type-Options"
        ]
      }
    ]
  },
  {
    title: "GraphQL & API Documentation",
    icon: "/assets/graphql.png",
    sections: [
      {
        title: "What is GraphQL?",
        content: "GraphQL is a query language for APIs that enables clients to request exactly the data they need."
      },
      {
        title: "Key Features",
        content: [
          "Single endpoint for all operations",
          "Client-specified queries",
          "Strongly typed schema",
          "Real-time capabilities with subscriptions",
          "Introspection system"
        ]
      },
      {
        title: "Compared to REST",
        content: [
          "Reduced network requests",
          "No over-fetching or under-fetching",
          "Flexible data retrieval",
          "Built-in documentation",
          "More complex caching"
        ]
      },
      {
        title: "API Documentation Tools",
        content: [
          "GraphiQL/Playground (GraphQL)",
          "Swagger/OpenAPI (REST)",
          "Postman collections",
          "Redoc for beautiful docs",
          "API Blueprint"
        ]
      }
    ]
  },
  {
    title: "Networking Basics",
    icon: "/assets/network.png",
    sections: [
      {
        title: "Networking Fundamentals",
        content: "Understanding networking is crucial for backend development and system architecture."
      },
      {
        title: "Core Concepts",
        content: [
          "TCP/IP model layers",
          "IP addressing (IPv4 vs IPv6)",
          "DNS resolution process",
          "Ports and sockets",
          "NAT and firewalls"
        ]
      },
      {
        title: "Protocols",
        content: [
          "HTTP/HTTPS (application layer)",
          "TCP vs UDP (transport layer)",
          "WebSockets (persistent connections)",
          "gRPC (high-performance RPC)",
          "MQTT (IoT messaging)"
        ]
      },
      {
        title: "Performance Factors",
        content: [
          "Latency and bandwidth",
          "Connection pooling",
          "Keep-alive connections",
          "Compression techniques",
          "CDN utilization"
        ]
      }
    ]
  },
  {
    title: "DevOps Practices",
    icon: "/assets/devops.png",
    sections: [
      {
        title: "What is DevOps?",
        content: "DevOps bridges development and operations through culture, practices, and tools to deliver software rapidly and reliably."
      },
      {
        title: "Key Practices",
        content: [
          "Continuous Integration/Continuous Delivery",
          "Infrastructure as Code",
          "Monitoring and Logging",
          "Incident Management",
          "Collaboration Culture"
        ]
      },
      {
        title: "CI/CD Pipelines",
        content: [
          "Automated testing (unit, integration)",
          "Build automation",
          "Deployment strategies (blue-green, canary)",
          "Environment management",
          "Rollback procedures"
        ]
      },
      {
        title: "Tool Ecosystem",
        content: [
          "Version Control: Git",
          "CI/CD: Jenkins, GitHub Actions",
          "Configuration: Ansible, Terraform",
          "Containers: Docker, Kubernetes",
          "Monitoring: Prometheus, Grafana"
        ]
      }
    ]
  },
  {
    title: "Server-Side Rendering (SSR)",
    icon: "/assets/ssr.png",
    sections: [
      {
        title: "What is SSR?",
        content: "Server-Side Rendering generates complete HTML pages on the server before sending them to the client."
      },
      {
        title: "Benefits",
        content: [
          "Faster initial page load",
          "Better SEO (crawlable content)",
          "Social media sharing previews",
          "Consistent performance across devices",
          "Progressive enhancement"
        ]
      },
      {
        title: "Implementation Approaches",
        content: [
          "Traditional (Express with templating)",
          "Framework-based (Next.js, Nuxt.js)",
          "Static Site Generation (SSG)",
          "Island architecture (partial hydration)",
          "Edge-side rendering"
        ]
      },
      {
        title: "Tradeoffs",
        content: [
          "Higher server load vs CSR",
          "More complex caching strategies",
          "TTFB vs TTI metrics",
          "Developer experience considerations",
          "Hydration costs"
        ]
      }
    ]
  },
  {
    title: "Microservices Architecture",
    icon: "/assets/microservices.png",
    sections: [
      {
        title: "What are Microservices?",
        content: "Microservices structure applications as independently deployable services that communicate over networks."
      },
      {
        title: "Key Characteristics",
        content: [
          "Single responsibility per service",
          "Autonomous development teams",
          "Decentralized data management",
          "Smart endpoints, dumb pipes",
          "Failure isolation"
        ]
      },
      {
        title: "Communication Patterns",
        content: [
          "Synchronous (HTTP/REST)",
          "Asynchronous (message queues)",
          "Event-driven architecture",
          "gRPC for performance",
          "Service mesh (Istio, Linkerd)"
        ]
      },
      {
        title: "Operational Challenges",
        content: [
          "Distributed tracing",
          "Service discovery",
          "Circuit breakers",
          "Data consistency",
          "End-to-end testing"
        ]
      }
    ]
  },
  {
    title: "WebSockets",
    icon: "/assets/websockets.png",
    sections: [
      {
        title: "What are WebSockets?",
        content: "WebSockets provide full-duplex communication channels over a single TCP connection, enabling real-time web functionality."
      },
      {
        title: "Key Features",
        content: [
          "Persistent connection (no HTTP overhead)",
          "Low latency message exchange",
          "Bi-directional communication",
          "Subprotocol support",
          "Built-in ping/pong for connection health"
        ]
      },
      {
        title: "Use Cases",
        content: [
          "Chat applications",
          "Live notifications",
          "Collaborative editing",
          "Real-time dashboards",
          "Multiplayer gaming"
        ]
      },
      {
        title: "Implementation Considerations",
        content: [
          "Connection lifecycle management",
          "Message serialization formats",
          "Scalability challenges",
          "Fallback strategies",
          "Security considerations"
        ]
      }
    ]
  },
  {
    title: "REST APIs",
    icon: "/assets/rest.png",
    sections: [
      {
        title: "REST Fundamentals",
        content: "Representational State Transfer (REST) is an architectural style for designing networked applications."
      },
      {
        title: "Core Principles",
        content: [
          "Client-server separation",
          "Stateless operations",
          "Cacheable responses",
          "Uniform interface",
          "Layered system"
        ]
      },
      {
        title: "Resource Design",
        content: [
          "Nouns (not verbs) in URLs",
          "Collections (/users) and elements (/users/123)",
          "Consistent naming conventions",
          "Proper HTTP method usage",
          "Filtering, sorting, pagination"
        ]
      },
      {
        title: "Best Practices",
        content: [
          "Use proper HTTP status codes",
          "Version your API",
          "Provide comprehensive documentation",
          "Implement HATEOAS",
          "Consider performance (caching, compression)"
        ]
      }
    ]
  },
  {
    title: "HTTP & Web Protocols",
    icon: "/assets/protocol.png",
    sections: [
      {
        title: "Protocol Evolution",
        content: "Web protocols define how data is formatted, transmitted, and interpreted between clients and servers."
      },
      {
        title: "HTTP Versions",
        content: [
          "HTTP/1.1: Persistent connections, pipelining",
          "HTTP/2: Multiplexing, header compression, server push",
          "HTTP/3: QUIC protocol, UDP-based, improved security"
        ]
      },
      {
        title: "Security Protocols",
        content: [
          "HTTPS (HTTP over TLS/SSL)",
          "SSL/TLS handshake process",
          "Certificate Authorities (CAs)",
          "Perfect Forward Secrecy",
          "HSTS (HTTP Strict Transport Security)"
        ]
      },
      {
        title: "Performance Considerations",
        content: [
          "Connection reuse",
          "Header compression",
          "Request prioritization",
          "Server push",
          "0-RTT connection resumption"
        ]
      }
    ]
  },
  {
    title: "Caching Strategies",
    icon: "/assets/caching.png",
    sections: [
      {
        title: "Caching Fundamentals",
        content: "Caching stores frequently accessed data to improve performance and reduce load on primary data sources."
      },
      {
        title: "Cache Types",
        content: [
          "Browser caching",
          "CDN caching",
          "Application-level caching",
          "Database caching",
          "Distributed caching (Redis, Memcached)"
        ]
      },
      {
        title: "Implementation Patterns",
        content: [
          "Cache-aside (lazy loading)",
          "Write-through",
          "Write-behind (write-back)",
          "Refresh-ahead",
          "Time-based expiration"
        ]
      },
      {
        title: "Best Practices",
        content: [
          "Appropriate cache key design",
          "Cache invalidation strategies",
          "Size management and eviction policies",
          "Monitoring cache hit ratios",
          "Considerations for distributed systems"
        ]
      }
    ]
  },
  {
    title: "Message Brokers",
    icon: "/assets/messageBrokers.png",
    sections: [
      {
        title: "What are Message Brokers?",
        content: "Message brokers enable asynchronous communication between services via message queues or publish-subscribe patterns."
      },
      {
        title: "Key Benefits",
        content: [
          "Decoupling of services",
          "Load leveling and buffering",
          "Improved reliability",
          "Scalability",
          "Support for different processing speeds"
        ]
      },
      {
        title: "Popular Brokers",
        content: [
          "RabbitMQ (AMQP protocol)",
          "Apache Kafka (event streaming)",
          "AWS SQS/SNS",
          "Redis Streams",
          "Apache Pulsar"
        ]
      },
      {
        title: "Message Patterns",
        content: [
          "Point-to-point queues",
          "Publish-subscribe",
          "Request-reply",
          "Dead letter queues",
          "Priority queues"
        ]
      }
    ]
  },
  {
    title: "Testing Strategies",
    icon: "/assets/strategy.png",
    sections: [
      {
        title: "Testing Fundamentals",
        content: "Comprehensive testing ensures application reliability, functionality, and performance throughout the development lifecycle."
      },
      {
        title: "Test Types",
        content: [
          "Unit tests (isolated components)",
          "Integration tests (component interactions)",
          "End-to-end tests (full user flows)",
          "Performance tests (load, stress)",
          "Security tests (vulnerability scanning)"
        ]
      },
      {
        title: "Testing Pyramid",
        content: [
          "Many fast, isolated unit tests",
          "Fewer integration tests",
          "Minimal end-to-end tests",
          "Appropriate mocking strategies",
          "Continuous testing in CI/CD"
        ]
      },
      {
        title: "Backend-Specific Testing",
        content: [
          "API contract testing",
          "Database integration tests",
          "Mocking external services",
          "Integration with authentication systems",
          "Error scenario testing"
        ]
      }
    ]
  },
  {
    title: "Cloud Computing",
    icon: "/assets/cloud.jpg",
    sections: [
      {
        title: "Cloud Fundamentals",
        content: "Cloud computing delivers computing services over the internet using a pay-as-you-go pricing model."
      },
      {
        title: "Service Models",
        content: [
          "IaaS (Infrastructure as a Service)",
          "PaaS (Platform as a Service)",
          "SaaS (Software as a Service)",
          "FaaS (Function as a Service)",
          "CaaS (Containers as a Service)"
        ]
      },
      {
        title: "Major Providers",
        content: [
          "AWS (Amazon Web Services)",
          "Azure (Microsoft)",
          "GCP (Google Cloud Platform)",
          "IBM Cloud",
          "Oracle Cloud"
        ]
      },
      {
        title: "Key Technologies",
        content: [
          "Virtual Machines",
          "Containers and Kubernetes",
          "Serverless Computing",
          "Managed Databases",
          "Content Delivery Networks"
        ]
      }
    ]
  },
  {
    title: "Containerization",
    icon: "/assets/contain.png",
    sections: [
      {
        title: "Container Concepts",
        content: "Containerization packages applications with their dependencies into standardized units for development and deployment."
      },
      {
        title: "Docker Essentials",
        content: [
          "Images and containers",
          "Dockerfile instructions",
          "Volumes for persistence",
          "Networking models",
          "Multi-stage builds"
        ]
      },
      {
        title: "Orchestration with Kubernetes",
        content: [
          "Pods as smallest units",
          "Deployments for scaling",
          "Services for discovery",
          "Ingress for routing",
          "ConfigMaps and Secrets"
        ]
      },
      {
        title: "Benefits",
        content: [
          "Environment consistency",
          "Isolation and security",
          "Resource efficiency",
          "Scalability",
          "DevOps enablement"
        ]
      }
    ]
  },
  {
    title: "Performance Optimization",
    icon: "/assets/perform.webp",
    sections: [
      {
        title: "Performance Fundamentals",
        content: "Backend performance optimization ensures applications are responsive, scalable, and resource-efficient."
      },
      {
        title: "Key Areas",
        content: [
          "Database query optimization",
          "Efficient algorithms and data structures",
          "Concurrency handling",
          "Memory management",
          "Network efficiency"
        ]
      },
      {
        title: "Database Optimization",
        content: [
          "Proper indexing strategies",
          "Query analysis and optimization",
          "Connection pooling",
          "Read replicas for scaling",
          "Caching frequently accessed data"
        ]
      },
      {
        title: "Code-Level Improvements",
        content: [
          "Asynchronous processing",
          "Batch operations",
          "Lazy loading",
          "Connection reuse",
          "Algorithmic efficiency"
        ]
      }
    ]
  }
];

export default concepts;