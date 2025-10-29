import {
  Certification,
  ContactMe,
  ProfileBanner,
  Project,
  Skill,
  TimelineItem,
  WorkPermit,
} from './types';

export const profileBannerData: ProfileBanner = {
  backgroundImage: {
    url: ''
  },
  headline: 'Vishnu S - AI Engineer & Oracle Certified Data Scientist',
  resumeLink: {
    url: 'https://drive.google.com/file/d/1PHdo0rgH_00HBapFl76jrJ4z6VYbCJeQ/view?usp=sharing',
  },
  linkedinLink: 'https://www.linkedin.com/in/vishnu-s-85b258217/',
  profileSummary:
    'Data science and AI engineer with end-to-end experience building ML pipelines, retrieval-augmented systems, and production analytics. I blend Python, Java, and Rust with Azure, Snowflake, and Neo4j to deliver explainable, scalable solutions.',
};

export const workPermitData: WorkPermit = {
  visaStatus: 'Indian citizen - full-time work authorization',
  expiryDate: new Date('2030-12-31'),
  summary:
    'Based in Chennai with immediate availability for full-time roles across India and remote-friendly teams worldwide.',
  additionalInfo:
    'Open to relocation within India and happy to support visa sponsorship discussions for international teams. Available to start full-time in May 2025 after B.Tech graduation.',
};

export const timelineData: TimelineItem[] = [
  {
    timelineType: 'work',
    name: 'Neoware Technology Solutions - Chennai',
    title: 'Data Scientist Intern',
    techStack: 'Python - Azure Machine Learning - MLOps',
    summaryPoints: [
      'Designed an insurance risk-prediction pipeline using multilayer perceptrons, enriched with SHAP explainability for underwriting teams.',
      'Deployed Azure ML monitoring to surface drift, latency, and feature anomalies across weekly production runs.',
      'Partnered with cross-functional squads to groom analytics backlogs and translate business hypotheses into measurable experiments.',
    ],
    dateRange: 'Jan 2025 - May 2025',
  },
  {
    timelineType: 'work',
    name: 'Maruti Suzuki India Limited - Chennai',
    title: 'Data Analyst Intern',
    techStack: 'Python - Tableau - Supply Chain Analytics',
    summaryPoints: [
      'Consolidated more than 45 supply-chain data feeds to run exploratory analysis and forecasting on 1.2M service transactions.',
      'Built Tableau and Power BI dashboards that improved part availability visibility and reduced lead-time variance by 14 percent.',
      'Represented the analytics division in a national smart manufacturing hackathon, shipping prototypes under two-week sprints.',
    ],
    dateRange: 'Nov 2023 - Aug 2024',
  },
  {
    timelineType: 'education',
    name: 'Rajalakshmi Institute of Technology',
    title: 'B.Tech - Artificial Intelligence and Data Science - CGPA 8.4',
    techStack: '',
    summaryPoints: [
      'Coursework spanning deep learning, distributed systems, cloud computing, and data engineering.',
      'Led the AI club, mentoring juniors on Kaggle projects, MLflow workflows, and responsible AI practices.',
    ],
    dateRange: 'Jan 2021 - May 2025',
  },
  {
    timelineType: 'education',
    name: 'Sri Vijaya Vidyalaya Higher Secondary School',
    title: 'Higher Secondary - Grade 95 percent',
    techStack: '',
    summaryPoints: ['Organised science showcases and STEM mentorship for statewide Olympiad aspirants.'],
    dateRange: 'Feb 2020 - Apr 2021',
  },
  {
    timelineType: 'education',
    name: 'Stanley Matriculation Higher Secondary School',
    title: 'High School - Grade 95 percent',
    techStack: '',
    summaryPoints: ['Graduated with distinction and captained the robotics and computer science clubs.'],
    dateRange: 'Jul 2007 - Apr 2019',
  },
];

export const projectsData: Project[] = [
  {
    title: 'DoubtAI',
    description:
      'Retrieval-augmented study assistant that ingests course PDFs, applies semantic search, and generates contextual answers with citation-aware summaries.',
    techUsed: 'Next.js, TypeScript, Azure, LangChain, Pinecone',
    image: {
      url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    title: 'Paimon - Interactive Desktop Assistant',
    description:
      'Drag-and-drop desktop companion that blends natural language queries with productivity automations, powered by a local LLM pipeline.',
    techUsed: 'C#, WPF, Azure OpenAI, Semantic Kernel',
    image: {
      url: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    title: 'Rust Text Embedding Model',
    description:
      'Custom 100-dimensional word embeddings with Rust and FastText-style subword tokenisation, optimised for semantic search workloads.',
    techUsed: 'Rust, FastText, Tokenization, WASM',
    image: {
      url: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    title: 'Insurance Risk Intelligence',
    description:
      'End-to-end MLP pipeline that scores insurance risk profiles and provides SHAP insights to actuaries for transparent decision-making.',
    techUsed: 'Python, TensorFlow, SHAP, MLflow',
    image: {
      url: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    title: 'Crack Image Classification',
    description:
      'Transfer learning workflow on ResNet architectures to classify structural cracks and surface anomalies for civil infrastructure.',
    techUsed: 'Python, PyTorch, Transfer Learning, OpenCV',
    image: {
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    title: 'Image Entity Extractor',
    description:
      'Hybrid OCR and CNN pipeline that parses product imagery to extract weights, dimensions, and pricing metadata at scale.',
    techUsed: 'Python, Computer Vision, OCR, Azure',
    image: {
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    title: 'Shopify-Style E-Commerce Platform',
    description:
      'Spring Boot storefront with robust product management, persistence, and automated test coverage for merchandising teams.',
    techUsed: 'Spring Boot, Java, MySQL, JUnit',
    image: {
      url: 'https://images.unsplash.com/photo-1515162305281-9dfd0dc514ef?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    title: 'Supply Chain Management Analytics',
    description:
      'Analytics suite for Maruti Suzuki service centres delivering demand forecasting, inventory optimisation, and executive dashboards.',
    techUsed: 'Power BI, Tableau, Excel, Storytelling',
    image: {
      url: 'https://images.unsplash.com/photo-1516382799247-94b1db21c8ba?auto=format&fit=crop&w=1400&q=80',
    },
  },
];

export const certificationsData: Certification[] = [
  {
    title: 'Introduction to Computers, Operating Systems and Security',
    issuer: 'Microsoft',
    issuedDate: 'Sep 2025',
    link: 'https://www.linkedin.com/in/vishnu-s-/details/certifications/',
    iconName: 'microsoft',
  },
  {
    title: 'AI Workflow: Enterprise Model Deployment',
    issuer: 'IBM',
    issuedDate: 'Jul 2025',
    link: 'https://www.linkedin.com/in/vishnu-s-/details/certifications/',
    iconName: 'ibm',
  },
  {
    title: 'SnowPro Core Certification',
    issuer: 'Snowflake',
    issuedDate: '2025',
    link: 'https://www.linkedin.com/in/vishnu-s-/details/certifications/',
    iconName: 'snowflake',
  },
  {
    title: 'Oracle Certified Data Scientist Associate',
    issuer: 'Oracle',
    issuedDate: '2024',
    link: 'https://www.linkedin.com/in/vishnu-s-/details/certifications/',
    iconName: 'oracle',
  },
  {
    title: 'Azure AI Engineer Associate',
    issuer: 'Microsoft',
    issuedDate: '2024',
    link: 'https://www.linkedin.com/in/vishnu-s-/details/certifications/',
    iconName: 'microsoft',
  },
];

export const contactMeData: ContactMe = {
  profilePicture: {
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
  },
  name: 'Vishnu S',
  title: 'AI Engineer - Oracle Certified Data Scientist',
  summary:
    "I design AI systems that connect data, cloud platforms, and user experiences. Let's collaborate on impactful ML products or research.",
  companyUniversity: 'Rajalakshmi Institute of Technology - Chennai, India',
  linkedinLink: 'https://www.linkedin.com/in/vishnu-s-/',
  email: 'contact@vishnudata.dev',
  phoneNumber: '+91-90000-00000',
};

export const skillsData: Skill[] = [
  {
    name: 'Applied Machine Learning',
    category: 'AI & Machine Learning',
    description: 'Designing supervised and unsupervised models in Python with scikit-learn and TensorFlow.',
    icon: 'FaBrain',
  },
  {
    name: 'Deep Learning & Computer Vision',
    category: 'AI & Machine Learning',
    description: 'Building CNN, transfer learning, and OCR pipelines with PyTorch, TensorFlow, and OpenCV.',
    icon: 'SiTensorflow',
  },
  {
    name: 'Retrieval-Augmented Generation',
    category: 'AI & Machine Learning',
    description: 'Combining LangChain, Azure AI Search, Pinecone, and Gemini to deliver grounded copilots.',
    icon: 'FaRobot',
  },
  {
    name: 'Explainable AI',
    category: 'AI & Machine Learning',
    description: 'Applying SHAP, LIME, and model monitoring to make predictions trustworthy for stakeholders.',
    icon: 'FaChartLine',
  },
  {
    name: 'Cloud & MLOps',
    category: 'Data Engineering & Cloud',
    description: 'Operationalising models with Azure ML, Snowflake, Docker, Kubernetes, and CI/CD automation.',
    icon: 'FaCloud',
  },
  {
    name: 'Data Engineering',
    category: 'Data Engineering & Cloud',
    description: 'Building end-to-end pipelines with Azure Data Factory, Neo4j, and streaming connectors.',
    icon: 'FaDatabase',
  },
  {
    name: 'Python',
    category: 'Programming Languages',
    description: 'Writing production-grade analytics, automation, and ML services.',
    icon: 'FaPython',
  },
  {
    name: 'Java',
    category: 'Programming Languages',
    description: 'Developing Spring Boot microservices and e-commerce backends with test coverage.',
    icon: 'FaJava',
  },
  {
    name: 'Rust',
    category: 'Programming Languages',
    description: 'Crafting high-performance ML tooling, embeddings, and CLI automation.',
    icon: 'FaRust',
  },
  {
    name: 'C#',
    category: 'Programming Languages',
    description: 'Building desktop assistants and agentic workflows with WPF and Semantic Kernel.',
    icon: 'SiCsharp',
  },
  {
    name: 'Data Visualization',
    category: 'Analytics & Visualisation',
    description: 'Translating insights into executive-ready dashboards with Tableau, Power BI, and Alteryx.',
    icon: 'SiTableau',
  },
  {
    name: 'Business Analytics',
    category: 'Analytics & Visualisation',
    description: 'Aligning analytics outcomes with supply-chain, finance, and customer-impact KPIs.',
    icon: 'SiPowerbi',
  },
];
