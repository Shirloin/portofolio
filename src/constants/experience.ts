import React from "react";
import IntiIcon from "../components/icons/IntiIcon";
import { IExperience } from "../interfaces/IExperience";

export const experiences: IExperience[] = [
    {
        company: "PT Indotama Teknologi Inovasi",
        position: "FullStack Engineer",
        startDate: "Feb 01, 2025",
        endDate: "PRESENT",
        description: "• Developed and deployed web applications integrating <strong>AI-powered document processing</strong> to automate data extraction and accelerate data entry workflows.\n• Developed and deployed a customizable <strong>e-stamping platform</strong>, enabling users to apply digital stamps and define reusable document layouts.\n• Created and deployed distributed AI extraction workflows using <strong>Ray framework</strong> to parallelize document processing, achieving up to <strong>90%</strong> performance improvement on large documents.\n• Created and managed <strong>Kubernetes</strong>-based infrastructure for development and production.\n• Created and maintained CI/CD pipelines with <strong>GitHub Actions</strong> for reliable, automated deployments and scaling.\n• Implemented observability with <strong>Prometheus, Grafana, Loki, and OpenTelemetry</strong> to improve monitoring, logging, and tracing.\n• Optimized cloud costs by <strong>30%</strong> through dynamic node scaling and scheduled scale-down strategies using <strong>Terraform</strong>.",
        icon: React.createElement(IntiIcon),
    },
    {
        company: "BINUS University",
        position: "Application Developer, Enrichment SOCS",
        startDate: "Feb 01, 2024",
        endDate: "Feb 01, 2025",
        description: "• Developed a web application for BINUS University to manage EPC (Enrichment Program Course) approval workflows.\n• Developed a web application for CV generation and job recommendations with Natural Language Processing to power the job recommendation API.",
        image: "/images/company/binus.png",
    },
    {
        company: "BINUS University (Software Laboratory Center)",
        position: "Subject Coordinator",
        startDate: "Feb 01, 2024",
        endDate: "Feb 28, 2025",
        description: "• Managed the end-to-end process of creating and standardizing quizzes, exams, and projects to maintain academic consistency and technical accuracy across multiple classes.\n• Coordinated lecturers and lab assistants to ensure aligned lab subject delivery.",
        image: "/images/company/binus.png",
    },
    {
        company: "BINUS University (Software Laboratory Center)",
        position: "Laboratory Assistant",
        startDate: "Feb 13, 2023",
        endDate: "Feb 01, 2024",
        description: "• Taught various courses including <strong>Business Application Development</strong>, <strong>Data Structures</strong>, <strong>Algorithms</strong>, and <strong>Database Systems</strong>.\n• Participated in 5+ self-development programs covering Game Programming (<strong>Unity</strong>), Full Stack Web Development (<strong>ReactJS, Go, GraphQL</strong>), Desktop Development (<strong>NextJS, Electron</strong>), Networking (<strong>Nginx, Ubuntu Server, Docker, Cisco Packet Tracer, Kubernetes</strong>), and Mobile Development (<strong>Kotlin, Android Studio</strong>).",
        image: "/images/company/binus.png",
    }
]