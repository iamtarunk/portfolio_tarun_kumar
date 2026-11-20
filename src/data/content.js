export const profile = {
  name: 'Tarun Kumar',
  title: 'Full Stack Developer',
  tagline: 'React.js · Node.js · SQL · Fintech Applications',
  location: 'New Delhi / Noida, India',
  email: 'tarunkumar@fintechcloud.in',
  linkedin: 'https://linkedin.com/in/tarunkumar9205',
  summary:
    'Software Engineer building digital lending and fintech web applications, backed by hands-on academic lab and coding instruction. Strong in React.js, Node.js / Express API integration, and SQL database operations. Delivers production-ready loan origination, KYC, e-sign, and repayment journeys.',
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const skills = {
  Frontend: [
    'React.js',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'React Router',
    'Redux Toolkit',
    'Axios',
    'Vite',
    'Responsive UI',
  ],
  Backend: [
    'Node.js',
    'Express.js',
    'REST APIs',
    'JWT Authentication',
    'Middleware',
    'API Integration',
    'MVC Architecture',
  ],
  'Database / SQL': [
    'SQL',
    'MySQL',
    'PostgreSQL',
    'CRUD Operations',
    'Joins',
    'Indexing',
    'Query Optimization',
    'Prisma ORM',
    'MongoDB',
  ],
  'Tools & Practices': [
    'Git',
    'GitHub',
    'AWS (S3)',
    'Postman',
    'Docker',
    'Agile / Scrum',
    'Code Reviews',
  ],
}

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Fintech Cloud Pvt. Ltd.',
    place: 'Noida',
    period: 'Nov 2025 – Present',
    points: [
      'Built and enhanced React.js white-label loan websites (Vite + Tailwind) for digital personal lending, including multi-step apply funnels tied to backend lead stages.',
      'Integrated frontend with Node.js / REST APIs for OTP auth, Account Aggregator, document upload, e-sign polling, coupons, and repayment orders using Axios and JWT bearer tokens.',
      'Implemented customer journeys covering PAN/mobile verification, employment details, KYC selfie capture, loan calculator, disbursal status, and post-login dashboards.',
      'Worked with SQL-backed product flows (PostgreSQL / MySQL via APIs) supporting CRUD operations, lead updates, and reporting-oriented UI for ops and repayment screens.',
      'Supported payment UX (Razorpay / PayU patterns), UTM tracking, brand configuration, Docker packaging, and AWS-oriented deployment artifacts for multi-NBFC partner sites.',
    ],
  },
  {
    role: 'UI Developer / Frontend Developer',
    company: 'Naman Finlease Pvt. Limited',
    place: 'Delhi',
    period: 'Dec 2024 – Oct 2025',
    points: [
      'Developed responsive UI components and pages for fintech / NBFC product experiences using modern JavaScript and CSS best practices.',
      'Collaborated with backend developers to consume REST APIs, map JSON responses to UI state, and handle loading, validation, and error states.',
      'Improved cross-device usability and visual consistency for customer-facing loan and account flows, aligning frontend behavior with business rules.',
      'Participated in Agile delivery — sprint planning, bug fixes, UI polish, and handover of reusable frontend modules.',
    ],
  },
  {
    role: 'Lab Assistant',
    company: 'K.R. Mangalam University',
    place: '',
    period: 'Dec 2022 – Dec 2024',
    points: [
      'Managed computer labs and conducted theoretical + hands-on coding sessions for students.',
    ],
  },
]

export const projects = [
  {
    title: 'Multi-Brand Digital Loan Origination Platform',
    description:
      'React SPA for white-label lending brands with stage-based routing, protected routes, API service layer, KYC/e-sign steps, and repayment entry points.',
    stack: ['React.js', 'Tailwind CSS', 'Axios', 'REST', 'SQL-backed APIs'],
  },
  {
    title: 'Customer Repayment & Payment Flows',
    description:
      'Login-based repay journeys with phone validation, captcha/consent, and payment gateway checkout for EMI / outstanding collections.',
    stack: ['React.js', 'Node.js APIs', 'SQL', 'Payment Gateways'],
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'IGNOU',
    period: '2019 – 2021',
    detail: 'Computer Programming',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'IGNOU',
    period: '2016 – 2019',
    detail: 'Computer Systems Technology',
  },
]
