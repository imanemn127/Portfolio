export const personalInfo = {
  name: "Imane MOUMOUN",
  firstName: "Imane",
  lastName: "MOUMOUN",
  title: "AI & ML Engineer",
  subtitle: "Building intelligent systems across deep learning, computer vision, generative AI, and edge deployment.",
  location: "Montpellier, France",
  email: "imanemn127@gmail.com",
  linkedin: "https://www.linkedin.com/in/imane-moumoun",
  github: "https://github.com/imanemn127",
  currentRole: "AI Research Intern @ Inria",
  bio: "Engineering student at Mines Saint-Étienne building real-world AI systems. I work across machine learning, deep learning, computer vision, statistical modeling, and generative AI to turn ideas into deployable solutions.",
}

export const stats = [
  { value: "3.93", label: "GPA / 4.10", suffix: "" },
  { value: "8+", label: "Projects", suffix: "" },
  { value: "4", label: "Languages", suffix: "" },
  { value: "2×", label: "Speaker Award", suffix: "" },
]

export const experiences = [
  {
    id: "inria",
    role: "AI Research Intern",
    company: "Inria",
    location: "Montpellier, France",
    period: "Apr. – Aug. 2026",
    type: "Research",
    color: "#5BBFD8",
    projectTitle: "AI-Driven Field Boundary Detection: Leveraging Satellite Imagery to Support Digital Agriculture Adoption",
    repos: [
      { label: "Pix2Poly AI4SmallFarms", url: "https://github.com/imanemn127/Pix2Poly_AI4SmallFarms" },
      { label: "Pix2poly P3", url: "https://github.com/imanemn127/Pix2poly_P3_image_only" },
      { label: "PLR Net", url: "https://github.com/imanemn127/PLR_Net_AI4SmallFarms" },
    ],
    description: [
      "Developing deep learning models (Transformers, GNN) for automatic extraction of agricultural field boundaries from multi-temporal satellite imagery",
      "Exploring end-to-end vectorization approaches combining temporal context, geometric constraints, and instance segmentation",
    ],
    tech: ["Transformers", "GNN", "Satellite Imagery", "Instance Segmentation", "Python", "PyTorch"],
  },
  {
    id: "pellenc",
    role: "AI Intern",
    company: "PELLENC",
    location: "Pertuis, France",
    period: "Jan. – Feb. 2025",
    type: "Industry",
    color: "#9490D4",
    repos: [
      { label: "Internship_IA_PELLENC", url: "https://github.com/imanemn127/Internship_IA_PELLENC" },
    ],
    description: [
      "Collected and annotated ~300 polygon-masked images of olive tree trunks using Roboflow, across multiple dataset versions with iterative label cleanup",
      "Fine-tuned YOLOv8s-seg from COCO weights for instance segmentation — compared 100 vs 300 epoch runs, achieving Box mAP50 of 0.729 and ~9.3ms inference per frame",
    ],
    tech: ["YOLOv8", "Instance Segmentation", "Roboflow", "Supervision", "Python", "PyTorch"],
  },
]

export const projects = [
  {
    id: "rag",
    title: "Agentic Multi-Modal RAG",
    subtitle: "Scientific Paper Analysis",
    period: "Mar. – May. 2026",
    description:
      "Multi-modal RAG system for scientific paper analysis using structured PDF extraction, vector-based retrieval, and agentic reasoning with LlamaIndex. End-to-end FastAPI + Streamlit deployment.",
    tags: ["LlamaIndex", "FastAPI", "Streamlit", "RAG", "LLM"],
    color: "#5BBFD8",
    visual: "neural",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&w=1400&q=80",
    impact: "End-to-end pipeline from raw PDF to cited answer in under 4s.",
    github: "https://github.com/imanemn127/Multimodal-Research-Assistant",
  },
  {
    id: "healthcare",
    title: "CarePath AI",
    subtitle: "Agentic Healthcare Data Pipeline",
    period: "Apr. 2026",
    description:
      "Generated 10K+ synthetic Indian healthcare records with LLM-based validation pipeline. Geocoding system (98% resolution) + natural-language facility search.",
    tags: ["LLM", "Synthetic Data", "Geocoding", "Streamlit"],
    color: "#55C492",
    visual: "wave",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&w=1400&q=80",
    impact: "10K+ records generated, 98% geocoding resolution rate.",
    github: "https://github.com/imanemn127/Agentic-Healthcare-Maps",
  },
  {
    id: "rl-edge",
    title: "RL & Edge AI",
    subtitle: "Predictive Industrial Maintenance",
    period: "Feb. – Apr. 2026",
    description:
      "REINFORCE-based RL agent for maintenance scheduling combined with a neural fault classifier deployed on STM32L4R9 with TensorFlow Lite and STM32CubeAI.",
    tags: ["RL", "Edge AI", "STM32", "TensorFlow Lite"],
    color: "#8484C8",
    visual: "circuit",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&w=1400&q=80",
    impact: "Classifier running under 256 KB flash on STM32L4R9.",
    github: "https://github.com/imanemn127/RL-Edge-AI-Fault-Detection",
  },
  {
    id: "semiconductor",
    title: "Statistical Modelling",
    subtitle: "Semiconductor Manufacturing",
    period: "Jan. – Feb. 2026",
    description:
      "Gamma GLM modelling of semiconductor cycle times in R with MLE and simulation-based validation against real production data.",
    tags: ["R", "GLM", "Statistics", "MLE"],
    color: "#C8A848",
    visual: "data",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&w=1400&q=80",
    impact: "Simulation-validated against real fab production data.",
    github: "https://github.com/imanemn127",
  },
  {
    id: "ecg",
    title: "ECG Rhythm Diagnosis",
    subtitle: "Machine Learning",
    period: "Dec. 2025 – Jan. 2026",
    description:
      "Comparative evaluation of ML classifiers on noisy ECG signals with PCA-based dimensionality reduction and clustering analysis.",
    tags: ["Scikit-learn", "PCA", "ECG", "Classification"],
    color: "#C07898",
    visual: "pulse",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&w=1400&q=80",
    impact: "Benchmarked 6 classifiers; SVM best at 94.2% accuracy.",
    github: "https://github.com/imanemn127",
  },
  {
    id: "tennis",
    title: "Tennis Ball Tracking",
    subtitle: "Computer Vision — TIPE",
    period: "2023 – 2024",
    description:
      "Detection and tracking of tennis balls through fine-tuning of YOLOv5 and TrackNet models for real-time sports analytics.",
    tags: ["YOLOv5", "TrackNet", "Computer Vision", "PyTorch"],
    color: "#50B890",
    visual: "track",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&w=1400&q=80",
    impact: "Real-time tracking at 30 fps on consumer GPU.",
    github: "https://github.com/imanemn127",
  },
]

export const skillCategories = [
  {
    name: "Development",
    color: "#5BBFD8",
    skills: ["Python", "C/C++", "R", "Git", "Docker", "Linux", "Matlab"],
  },
  {
    name: "Data & Vision",
    color: "#9490D4",
    skills: ["NumPy", "Matplotlib", "Pandas", "OpenCV", "Roboflow", "Tidyverse"],
  },
  {
    name: "ML & Deep Learning",
    color: "#55C492",
    skills: ["Scikit-learn", "PyTorch", "TensorFlow", "Keras"],
  },
  {
    name: "Embedded / HW",
    color: "#C8A848",
    skills: ["STM32", "CubeAI", "CubeMX", "SystemVerilog", "Vivado", "Modelsim"],
  },
]

export const allSkills = [
  "Python", "PyTorch", "TensorFlow", "Transformers", "GNN",
  "Computer Vision", "OpenCV", "YOLOv8", "LlamaIndex", "RAG",
  "C/C++", "STM32", "Edge AI", "R",
  "Docker", "Git", "Linux", "Scikit-learn", "Keras",
  "NumPy", "Pandas", "Matplotlib", "Roboflow", "FastAPI",
  "Streamlit", "SystemVerilog", "Vivado", "Deep Learning", "RL",
]

export const education = [
  {
    degree: "MEng — AI & Embedded Systems",
    institution: "ISMIN, Mines Saint-Étienne, France",
    location: "Gardanne, France",
    period: "Since 2024",
    gpa: "3.93/4.10",
    courses: ["Probability & Statistics", "Signal Processing", "Machine Learning", "Deep Learning"],
  },
  {
    degree: "Preparatory Classes MPSI/MP",
    institution: "Lycée Méditerranéen d'Excellence (LYMED), Morocco",
    location: "Martil, Morocco",
    period: "2022 – 2024",
    courses: ["Analysis", "Linear Algebra", "Probability", "Python Programming"],
  },
]

export const languages = [
  { name: "French", level: "C2", flag: "🇫🇷" },
  { name: "Arabic", level: "C2", flag: "🇲🇦" },
  { name: "English", level: "C1", flag: "🇬🇧" },
  { name: "German", level: "A1", flag: "🇩🇪" },
]

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]
