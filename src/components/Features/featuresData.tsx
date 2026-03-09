import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    // Icon: Shield with Data/Lock (Data Protection)
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <rect x="9" y="10" width="6" height="4" rx="1" />
        <path d="M12 10v4" />
      </svg>
    ),
    title: "Data Protection & Compliance",
    paragraph:
      "Enterprise-grade data governance, risk assessments, and compliance monitoring aligned with Tanzanian and global regulatory directives.",
  },
  {
    id: 2,
    // Icon: Terminal/Code with Search (Digital Forensics)
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
        <circle cx="18" cy="9" r="3" />
        <line x1="20.5" y1="11.5" x2="21.5" y2="12.5" />
      </svg>
    ),
    title: "Cybersecurity & Forensics",
    paragraph:
      "Advanced infrastructure protection, threat intelligence, and digital forensic investigations to mitigate institutional security risks.",
  },
  {
    id: 3,
    // Icon: Server/Cloud Infrastructure (Platform Management)
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6" y2="6" />
        <line x1="6" y1="18" x2="6" y2="18" />
      </svg>
    ),
    title: "Platform Management",
    paragraph:
      "Lifecycle governance of SaaS ecosystems and enterprise software architectures designed for high-availability production environments.",
  },
  {
    id: 4,
    // Icon: Wallet/Transaction (Fintech Systems)
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <path d="M16 14h2" />
      </svg>
    ),
    title: "Fintech Systems",
    paragraph:
      "Secure financial engineering, including payment gateway integrations and digital wallet architectures for regulated institutions.",
  },
  {
    id: 5,
    // Icon: Project Plan/Gantt (ICT Project Engineering)
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l3-3 3 3 5-5" />
        <circle cx="7" cy="16" r="1" />
        <circle cx="18" cy="11" r="1" />
      </svg>
    ),
    title: "ICT Project Engineering",
    paragraph:
      "Structured project feasibility and architecture modeling focused on secure deployment and post-implementation governance.",
  },
];

export default featuresData;