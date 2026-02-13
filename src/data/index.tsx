
import type { Program } from "@/app/(app)/types"
import {
  Code, Lightbulb, Microscope, Share2,

  BookOpen,
  BrainCircuit,
  MessageSquare,
  GraduationCap,

  Target,
Star,
Calendar,
Send,
Handshake,
LightbulbIcon
,
  Laptop,

  Network,
 Globe,
  Sparkles,
  Users,
 
  Facebook,
Twitter,
Instagram,
Linkedin,
Youtube,




} from "lucide-react"

import React from "react"

// Carousel data
export const carouselData = [
  {
    id: 1,
    title: "Empowering Communities!",
    description:
      '"Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it\'s the only thing that ever has." - Margaret Mead',
    buttonText: "Donate",
    buttonLink: "#",
    learnMore:"",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
  {
    id: 2,
    title: "Paradigm Shift Project (PSP)",
    description:
      "Designed to support personal growth, academic success, and career exploration through structured mentoring sessions.",
    buttonText: "Be A Mentor",
    buttonLink: "#",
     learnMore:"/what-we-do/psp",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },

  {
    id: 3,
    title: "STEMize Initiative",
    description:
      "Promoting science, technology, engineering, and mathematics education among underserved communities to bridge the digital divide.",
    buttonText: "Be A Mentor",
    buttonLink: "#",
     learnMore:"/what-we-do/stemize",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
  {
    id: 4,
    title: "#YouthLearningTogether",
    description:
      "Creating collaborative learning environments where youth can share knowledge, skills, and experiences to grow together.",
    buttonText: "Be A Mentor",
    buttonLink: "#",
     learnMore:"/what-we-do/ylt",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
  {
    id: 5,
    title: "Nyornuvi Program",
    description:
      "Supporting vulnerable girls with essential resources and education to ensure they can thrive and reach their full potential.",
    buttonText: "Be A Mentor",
    buttonLink: "#",
     learnMore:"/what-we-do/nyornuvi",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
]



// Team data
export const teamMembers = [
  {
    name: "Courage Christson Tetteh",
    role: "Executive Director",
    image: "/images/staff/cct.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:courage@lifemac.org"
    }
  },
  {
    name: "Sarah Sekpey",
    role: "People & Culture Director",
    image: "/images/staff/sarah.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sarah@lifemac.org"
    }
  },
  {
    name: "Benjamin Kwaku Aklama",
    role: "Programs Director",
    image: "/images/staff/bk.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:benjamin@lifemac.org"
    }
  },
  {
    name: "Dyvia Woedem Akortsu",
    role: "Finance Officer",
    image: "/images/staff/dyvia.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:dyvia@lifemac.org"
    }
  },
  {
    name: "Eugene Emmanuel Sewor",
    role: "Digital Innovation Lead",
    image: "/images/staff/eugene.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:eugene@lifemac.org"
    }
  },
  {
    name: "Favor Godson",
    role: "Business Development Officer",
    image: "/images/staff/fav.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:favor@lifemac.org"
    }
  },
  {
    name: "Temple Lomotey",
    role: "Backend Developer",
    image: "/images/staff/temple.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:temple@lifemac.org"
    }
  },
  {
    name: "Collins Sitty",
    role: "Mobile Developer",
    image: "/images/staff/collins.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:collins@lifemac.org"
    }
  },
  {
    name: "Frederick Ekpe",
    role: "Brand Strategist",
    image: "/images/staff/fred.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:frederick@lifemac.org"
    }
  },
  {
    name: "Constantina Flavia",
    role: "Content Manager",
    image: "/images/staff/tina.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:constantina@lifemac.org"
    }
  },
  {
    name: "Daniella Godwilmann",
    role: "MERL Intern",
    image: "/images/staff/danny-rb.png", 
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:daniella@lifemac.org"
    }
  },
]

// Core values data
export const coreValues = [
  {
    title: "Leadership",
    description:
      "We believe in nurturing strong leaders who inspire and guide others towards positive change in their communities.",
    icon: "👑",
  },
  {
    title: "Integrity",
    description:
      "We embrace resilience and perseverance through challenges to create lasting impact and meaningful change in Africa.",
    icon: "🛡️",
  },
  {
    title: "Inclusivity",
    description:
      "We are committed to creating spaces where everyone is valued and all voices are heard, ensuring our programs benefit diverse communities.",
    icon: "🤝",
  },
  {
    title: "Fortitude",
    description: "We embrace resilience, persevering through challenges to create lasting impact and sustainable impact.",
    icon: "💪",
  },
  {
    title: "Excellence",
    description:
      "We adhere to high professional standards and ensure that our projects and programs deliver meaningful results.",
    icon: "⭐",
  },
  {
    title: "Mentorship",
    description:
      "We invest in guiding the next generation of leaders by providing opportunities for learning, growth and personal development.",
    icon: "🧠",
  },
 
 
  {
    title: "Advocacy",
    description:
      "We stand for social equality and justice. We use our platform to advocate for policies and actions that uplift underserved populations.",
    icon: "📢",
  },
  {
    title: "Collaboration",
    description: "We believe in the power of partnerships and teamwork to amplify our impact and achieve common goals.",
    icon: "🤲",
  },

]

// Focal areas data
export const focalAreas = [
  {
    title: "Education",
    icon: "📚",
    description: "Promoting quality education and lifelong learning opportunities for all.",
  },
  {
    title: "Gender Equality and Social Inclusion",
    icon: "⚖️",
    description: "Advancing gender equality and empowering women and girls.",
  },
  {
    title: "Technology",
    icon: "💻",
    description: "Bridging the digital divide and fostering innovation through technology.",
  },
  {
    title: "Health and Sanitation",
    icon: "🏥",
    description: "Improving access to healthcare and promoting good sanitation practices.",
  },
  {
    title: "Decent Work",
    icon: "💼",
    description: "Creating sustainable employment opportunities and economic growth.",
  },
  {
    title: "Agriculture and Climate Action",
    icon: "🌱",
    description: "Supporting sustainable agriculture and environmental conservation.",
  },
  {
    title: "Community Development",
    icon: "🏘️",
    description: "Building resilient communities through participatory approaches.",
  },
]



// Upcoming events data
export const upcomingEvents = [
  {
    id: 1,
    title: "Menstrual Hygiene Day Workshop",
    date: "May 28, 2025",
    location: "Ho, Volta Region",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
  {
    id: 2,
    title: "Girls Empowerment Session",
    date: "June 15, 2025",
    location: "Accra, Ghana",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
]

// Success stories data
export const successStories = [
  {
    id: 1,
    title: "Increased School Attendance",
    description:
      "After distributing sanitary pads to 500 girls in rural communities, school attendance increased by 35% during menstruation periods.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
  {
    id: 2,
    title: "Breaking the Silence",
    description:
      "Our workshops with parents and teachers have led to more open discussions about menstruation in 12 communities, reducing stigma and misconceptions.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
  {
    id: 3,
    title: "Peer Education Success",
    description:
      "We've trained 75 peer educators who have reached over 2,000 girls with accurate information about menstrual hygiene and reproductive health.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
]



// ============================================================================//


// STEM focus areas
export const stemFocusAreas = [
  {
    title: "Science",
    icon: <Microscope className="h-8 w-8" />,
    description: "Hands-on experiments and scientific inquiry that make learning engaging and memorable.",
    color: "bg-blue-100 text-blue-900",
  },
  {
    title: "Technology",
    icon: <Code className="h-8 w-8" />,
    description: "Introduction to coding, robotics, and digital literacy to prepare students for the digital economy.",
    color: "bg-teal-100 text-teal-900",
  },
  {
    title: "Engineering",
    icon: <Lightbulb className="h-8 w-8" />,
    description: "Design challenges that develop problem-solving skills and creative thinking.",
    color: "bg-yellow-100 text-yellow-900",
  },
  {
    title: "Mathematics",
    icon: <Share2 className="h-8 w-8" />,
    description: "Interactive approaches to mathematics that build strong foundations and practical applications.",
    color: "bg-purple-100 text-purple-900",
  },
]

// Upcoming events data
export const upcomingEventsSTEMIZE = [
  {
    id: 1,
    title: "Robotics Workshop",
    date: "June 10, 2025",
    location: "Ho, Volta Region",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
  {
    id: 2,
    title: "Science Fair",
    date: "July 15, 2025",
    location: "Accra, Ghana",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
]

// Success stories data
export const successStoriesSTEMIZE = [
  {
    id: 1,
    title: "Coding Champions",
    description:
      "Our coding club at Keta Basic School produced a team that won the regional coding competition, creating an app that helps farmers track market prices.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
  {
    id: 2,
    title: "Girls in STEM",
    description:
      "After our targeted workshops, female participation in STEM activities increased by 45% across our partner schools, with many girls expressing interest in STEM careers.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
  {
    id: 3,
    title: "Teacher Transformation",
    description:
      "We've trained over 50 teachers in innovative STEM teaching methods, who have gone on to transform their classrooms and inspire hundreds of students.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
]


//================================================================//

// Program objectives
export const programObjectivesPSP = [
  {
    title: "Self-Confidence & Emotional Intelligence",
    icon: <BrainCircuit className="h-8 w-8" />,
    description: "Helps students build self-confidence, emotional intelligence, and decision-making skills.",
    color: "bg-blue-100 text-blue-900",
  },
  {
    title: "Academic Guidance",
    icon: <BookOpen className="h-8 w-8" />,
    description: "Provides academic guidance to improve learning strategies and school performance.",
    color: "bg-teal-100 text-teal-900",
  },
  {
    title: "Career Exploration",
    icon: <GraduationCap className="h-8 w-8" />,
    description:
      "Exposes students to various career options and helps them develop a clearer understanding of their career aspirations.",
    color: "bg-yellow-100 text-yellow-900",
  },
  {
    title: "Critical Thinking",
    icon: <Target className="h-8 w-8" />,
    description:
      "Develops critical thinking and problem-solving skills essential for academic and professional success.",
    color: "bg-purple-100 text-purple-900",
  },
]

// Upcoming events data
export const upcomingEventsPSP = [
  {
    id: 1,
    title: "Mentorship Workshop",
    date: "July 5, 2025",
    location: "Ho, Volta Region",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
  {
    id: 2,
    title: "Career Day",
    date: "August 12, 2025",
    location: "Accra, Ghana",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
]

// Success stories data
export const successStoriesPSP = [
  {
    id: 1,
    title: "From Struggling to Succeeding",
    description:
      "After joining the PSP program, Kofi improved his grades from below average to top of his class in just one academic year, gaining the confidence to pursue his dream of becoming a doctor.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
  {
    id: 2,
    title: "Finding Her Path",
    description:
      "Through career exploration sessions, Ama discovered her passion for environmental science. She's now pursuing a scholarship to study environmental engineering and wants to address climate change issues in Ghana.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
  {
    id: 3,
    title: "Building Leaders",
    description:
      "A group of PSP participants started a peer mentoring program at their school, demonstrating the leadership skills they developed through our structured mentorship approach.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
]




// =============================================================================================//

// Program features
export const programFeatures = [
  {
    title: "Collaborative Learning",
    icon: Users,
    description:
      "Interactive sessions where participants learn from each other, sharing knowledge and experiences across different fields.",
    color: "bg-blue-100 text-blue-900",
  },
  {
    title: "Skills Development",
    icon: Sparkles,
    description:
      "Focused workshops on both technical and soft skills that are in high demand in today's rapidly evolving job market.",
    color: "bg-teal-100 text-teal-900",
  },
  {
    title: "Networking Opportunities",
    icon: Network,
    description:
      "Connect with peers, mentors, and industry professionals to build valuable relationships that can open doors to new opportunities.",
    color: "bg-yellow-100 text-yellow-900",
  },
  {
    title: "Digital Literacy",
    icon: Laptop,
    description: "Enhance your digital skills to thrive in an increasingly technology-driven workplace and society.",
    color: "bg-purple-100 text-purple-900",
  },
]

// Upcoming events data
export const upcomingEventsYLT = [
  {
    id: 1,
    title: "Digital Marketing Masterclass",
    date: "June 18, 2025",
    location: "Online",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
  {
    id: 2,
    title: "Leadership & Communication Workshop",
    date: "July 22, 2025",
    location: "Ho, Volta Region",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
]

// Success stories data
export const successStoriesYLT = [
  {
    id: 1,
    title: "From Classroom to Startup",
    description:
      "After participating in our entrepreneurship sessions, Emmanuel launched his tech startup that now employs five people and serves clients across West Africa.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
  {
    id: 2,
    title: "Career Transition Success",
    description:
      "Abena used the digital skills she gained through our program to transition from traditional marketing to a digital marketing specialist role, doubling her income in the process.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
  {
    id: 3,
    title: "Community of Practice",
    description:
      "A group of #YouthLearningTogether alumni have formed an ongoing community of practice that meets monthly to continue their professional development journey together.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  },
]

// Workshop topics
export const workshopTopics = [
  "Digital Marketing",
  "Data Analysis",
  "Public Speaking",
  "Project Management",
  "Financial Literacy",
  "Design Thinking",
  "Entrepreneurship",
  "Personal Branding",
  "Leadership Skills",
  "Negotiation Techniques",
  "Time Management",
  "Networking Skills",
  "Culture and Ethics",
  "Games and Arts"
]


// ===========================================================================================//

// Volunteer opportunities
export const volunteerOpportunities = [
  {
    title: "Mentor",
    description: "Guide and support young people in their personal and academic development.",
    icon: Users,
    commitment: "4-6 hours per month",
    location: "In-person or virtual",
  },
  {
    title: "Workshop Facilitator",
    description: "Lead interactive sessions on various topics to help participants develop new skills.",
    icon: Star,
    commitment: "2-4 hours per session",
    location: "In-person or virtual",
  },
  {
    title: "Event Volunteer",
    description: "Help organize and run community events, workshops, and fundraising activities.",
    icon: Calendar,
    commitment: "Varies by event",
    location: "In-person",
  },
  {
    title: "Content Creator",
    description: "Create educational materials, blog posts, or social media content to support our mission.",
    icon: Send,
    commitment: "Flexible",
    location: "Remote",
  },
]

// Volunteer testimonials
export const testimonials = [
  {
    quote:
      "Volunteering with LIFE-MAC Africa has been one of the most rewarding experiences of my life. Seeing the direct impact of my work on young people's lives gives me immense satisfaction.",
    name: "Daniella Godwilmann",
    role: "MERL Intern",
    image: "/images/staff/danny-rb.png",
  },
  {
    quote:
      "As a workshop facilitator, I've not only been able to share my knowledge but also learn so much from the participants. The collaborative environment LIFE-MAC creates is truly special.",
    name: "Deliver Doh",
    role: "Intern",
    image: "/images/staff/IMG_8724-removebg-preview.png",
  },
  {
    quote:
      "The team at LIFE-MAC Africa is incredibly supportive. They provide all the resources and guidance you need to make a meaningful contribution as a volunteer.",
    name: "Frederick Ekpe",
    role: "Brand Strategist",
    image: "/images/staff/fred.png",
  },
]



// ========================================================================================= //


// Partnership benefits
export const partnershipBenefits = [
  {
    title: "Expanded Impact",
    description:
      "Leverage our established community presence and networks to extend the reach and impact of your initiatives.",
    icon: Share2,
  },
  {
    title: "Resource Sharing",
    description: "Access shared resources, expertise, and infrastructure to maximize efficiency and effectiveness.",
    icon: Handshake,
  },
  {
    title: "Innovation & Learning",
    description:
      "Collaborate on innovative approaches to address complex social challenges and share learning experiences.",
    icon: LightbulbIcon,
  },
  {
    title: "Community Engagement",
    description: "Connect directly with communities and stakeholders through our established relationships and trust.",
    icon: Users,
  },
]

// Partnership types
export const partnershipTypes = [
  {
    title: "Program Partners",
    description:
      "Collaborate on specific programs or initiatives that align with your organization's mission and goals.",
    examples: "Joint workshops, co-created educational materials, shared events",
  },
  {
    title: "Funding Partners",
    description:
      "Support our work through financial contributions, grants, or sponsorships to help sustain and expand our impact.",
    examples: "Program funding, operational support, event sponsorship",
  },
  {
    title: "Resource Partners",
    description:
      "Share resources such as facilities, equipment, expertise, or services to enhance our program delivery.",
    examples: "Venue provision, technical equipment, professional services",
  },
  {
    title: "Strategic Partners",
    description:
      "Engage in long-term collaboration to address systemic issues and create sustainable change in communities.",
    examples: "Multi-year initiatives, policy advocacy, research collaborations",
  },
]

// Current partners
export const currentPartners = [
  { name: "GhanaThink", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Africa Ethics Institute", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Ghana Education Service", logo: "/placeholder.svg?height=80&width=120" },
  { name: "JA Ghana", logo: "/placeholder.svg?height=80&width=120" },
  { name: "SRC", logo: "/placeholder.svg?height=80&width=120" },
  { name: "University of Ghana", logo: "/placeholder.svg?height=80&width=120" },
  { name: "UNICEF", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Ho Technical University", logo: "/placeholder.svg?height=80&width=120" },
  { name: "National Youth Authority", logo: "/placeholder.svg?height=80&width=120" },
]


// ======================================================================================//


// Contact departments
export const contactDepartments = [
  {
    name: "General Inquiries",
    email: "info@lifemac.org",
    phone: "+233 55 472 0190",
    icon: MessageSquare,
  },
  {
    name: "Volunteer Coordination",
    email: "volunteer@lifemac.org",
    phone: "+233 24 769 1204",
    icon: Users,
  },
  {
    name: "Partnerships",
    email: "partnerships@lifemac.org",
    phone: "+233 24 769 1205",
    icon: Handshake,
  },
  {
    name: "Media & Press",
    email: "media@lifemac.org",
    phone: "+233 24 769 1206",
    icon: Globe,
  },
]

// Office hours
export const officeHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

// Social media links
export const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "https://facebook.com/lifemacafrica" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/lifemacafrica" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/lifemacafrica" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/lifemacafrica" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/c/lifemacafrica" },
]

// FAQ items
export const faqItems = [
  {
    question: "How can I volunteer with LIFE-MAC Africa?",
    answer:
      "You can volunteer by filling out our volunteer application form on our Volunteer page. We'll contact you to discuss opportunities that match your skills and interests.",
  },
  {
    question: "How can my organization partner with LIFE-MAC Africa?",
    answer:
      "We welcome partnerships with organizations that share our vision. Please visit our Partner With Us page to learn about partnership opportunities and submit an inquiry.",
  },
  {
    question: "Do you accept donations?",
    answer:
      "Yes, we gratefully accept donations to support our programs. You can donate through our website or contact us directly for other donation options.",
  },
  {
    question: "Where are your programs located?",
    answer:
      "Our programs primarily operate in Ghana, with a focus on the Volta Region. However, we have initiatives across various communities in Ghana and are expanding to other parts of Africa.",
  },
]


// ============================================================================================== //



// Featured stories data
export const featuredStories = [
  {
    id: 1,
    title: "From Struggling to Succeeding: Kofi's Journey",
    excerpt:
      "After joining the PSP program, Kofi improved his grades from below average to top of his class in just one academic year, gaining the confidence to pursue his dream of becoming a doctor.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    program: "Paradigm Shift Project",
    programSlug: "paradigm-shift-project",
    location: "Ho, Volta Region",
    date: "March 15, 2025",
    featured: true,
  },
  {
    id: 2,
    title: "Breaking Barriers: Girls in STEM",
    excerpt:
      "Our targeted workshops have led to a 45% increase in female participation in STEM activities across our partner schools, with many girls now expressing interest in pursuing STEM careers.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    program: "STEMize",
    programSlug: "stemize",
    location: "Accra, Ghana",
    date: "February 8, 2025",
    featured: true,
  },
  {
    id: 3,
    title: "Dignity Restored: The Impact of Nyornuvi",
    excerpt:
      "By providing sanitary products to 500 girls in rural communities, school attendance during menstruation periods increased by 35%, allowing these young women to continue their education without interruption.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    program: "Nyornuvi",
    programSlug: "nyornuvi",
    location: "Rural Communities, Ghana",
    date: "January 22, 2025",
    featured: true,
  },
]

// All stories data
export const allStories = [
  ...featuredStories,
  {
    id: 4,
    title: "Digital Skills Transform Lives",
    excerpt:
      "Through our #YouthLearningTogether program, 25 young adults gained digital marketing skills that helped them secure employment or start their own businesses within three months of completing the training.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    program: "YouthLearningTogether",
    programSlug: "youth-learning-together",
    location: "Online & Ho, Ghana",
    date: "December 10, 2024",
    featured: false,
  },
  {
    id: 5,
    title: "Community Library Transforms Learning",
    excerpt:
      "The establishment of a community library in Kpando has provided over 500 children with access to books and learning resources, significantly improving literacy rates in the community.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    program: "Paradigm Shift Project",
    programSlug: "paradigm-shift-project",
    location: "Kpando, Ghana",
    date: "November 5, 2024",
    featured: false,
  },
  {
    id: 6,
    title: "Robotics Team Wins National Competition",
    excerpt:
      "A team of students from our STEMize program won first place in the National Robotics Competition, showcasing their innovation and technical skills developed through our workshops.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    program: "STEMize",
    programSlug: "stemize",
    location: "Kumasi, Ghana",
    date: "October 18, 2024",
    featured: false,
  },
  {
    id: 7,
    title: "Peer Educators Making a Difference",
    excerpt:
      "Our trained peer educators have reached over 2,000 girls with accurate information about menstrual hygiene and reproductive health, creating a ripple effect of knowledge in their communities.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    program: "Nyornuvi",
    programSlug: "nyornuvi",
    location: "Various Locations, Ghana",
    date: "September 30, 2024",
    featured: false,
  },
  {
    id: 8,
    title: "Youth-Led Community Clean-Up Initiative",
    excerpt:
      "Participants from our #YouthLearningTogether program organized a community clean-up initiative that mobilized over 100 volunteers and transformed public spaces in their neighborhood.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    program: "YouthLearningTogether",
    programSlug: "youth-learning-together",
    location: "Accra, Ghana",
    date: "August 15, 2024",
    featured: false,
  },
  {
    id: 9,
    title: "Mentorship Changes Lives",
    excerpt:
      "Through our structured mentorship program, 50 students who were at risk of dropping out have not only remained in school but have shown significant improvement in their academic performance and confidence.",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    program: "Paradigm Shift Project",
    programSlug: "paradigm-shift-project",
    location: "Ho, Ghana",
    date: "July 22, 2024",
    featured: false,
  },
]

// Impact statistics
export const impactStats = [
  { value: "3,500+", label: "Lives Impacted" },
  { value: "45+", label: "Projects Completed" },
  { value: "38", label: "Communities Served" },
  { value: "262", label: "Volunteers Engaged" },
]

// Testimonials
export const testimonialsIM = [
  {
    quote:
      "The Nyomiyi Project offered hope to vulnerable girls at risk of exploitation due to their inability to afford sanitary pads. By addressing this basic need, the initiative empowered them to take control of their health and dignity.",
    name: "Precious Grafuse Agbome",
    role: "JCG, Precious Inspire",
    image: "/testimonial-2.jpg",
  },
  {
    quote:
      "The Paradigm Shift Project has motivated our students to take their studies seriously and adhere to the RISC with confidence. Thanks to the learning strategies they were taught, the majority achieved single-digit aggregates and were placed in prestigious senior high schools like Achimota SHS.",
    name: "Beatrice Kyer",
    role: "Head Teacher, HTI Basic School",
    image: "/testimonial-3.jpg",
  },
  {
    quote:
      "Several years ago, mentors introduced me to the world of technology and programming, sparking my interest in coding. The basics I learned opened my eyes and inspired me to pursue a degree in ICT. I'm grateful for their guidance, which played a key role in shaping my career path.",
    name: "Henry Deladem Nyedu",
    role: "ICT Student, University of Education, Winneba",
    image: "/testimonial-1.jpg",
  },
]

// =============================================================================================== //



// Mock data for the story
export const storyData = {
  id: 1,
  slug: "from-struggling-to-succeeding-kofis-journey",
  title: "From Struggling to Succeeding: Kofi's Journey",
  subtitle: "How mentorship transformed a struggling student into a top performer",
  heroImage: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  program: "Paradigm Shift Project",
  programSlug: "paradigm-shift-project",
  location: "Ho, Volta Region",
  date: "March 15, 2025",
  author: {
    name: "Sarah Mensah",
    role: "Program Coordinator",
    image: "/placeholder.svg?height=100&width=100",
  },
  content: [
    {
      type: "paragraph",
      content:
        "When Kofi first joined our Paradigm Shift Project (PSP) program, he was a shy 14-year-old struggling with his academics. His grades were below average, and he lacked the confidence to participate in class discussions. His teachers were concerned about his performance, and his parents were worried about his future.",
    },
    {
      type: "paragraph",
      content:
        '"I didn\'t believe in myself," Kofi recalls. "I thought I wasn\'t smart enough to do well in school, especially in subjects like mathematics and science. I was afraid to ask questions when I didn\'t understand something."',
    },
    {
      type: "image",
      url: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
      caption: "Kofi during his first mentoring session at the Paradigm Shift Project",
    },
    {
      type: "heading",
      content: "The Turning Point",
    },
    {
      type: "paragraph",
      content:
        "Everything changed when Kofi was paired with Mr. Adu, a dedicated mentor from our PSP program. Mr. Adu recognized Kofi's potential and worked closely with him to develop personalized learning strategies that addressed his specific challenges.",
    },
    {
      type: "quote",
      content:
        "I saw in Kofi a bright young man who simply needed guidance and encouragement. Our mentoring sessions focused not just on academic content, but on building his confidence and teaching him how to approach learning effectively.",
      author: "Mr. Adu, PSP Mentor",
    },
    {
      type: "paragraph",
      content:
        "Over the course of six months, Kofi and Mr. Adu met twice a week. They worked on study techniques, time management, and critical thinking skills. Mr. Adu also helped Kofi develop a growth mindset, teaching him that intelligence isn't fixed and that with effort and the right strategies, he could improve.",
    },
    {
      type: "image",
      url: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
      caption: "Kofi working with his mentor on mathematics problems",
    },
    {
      type: "heading",
      content: "Remarkable Transformation",
    },
    {
      type: "paragraph",
      content:
        "The results were remarkable. By the end of the academic year, Kofi had improved his grades significantly, moving from the bottom of his class to the top 10%. His teachers noticed not only his academic improvement but also his increased participation in class and his willingness to help other students who were struggling.",
    },
    {
      type: "paragraph",
      content:
        '"The change in Kofi has been incredible," says Mrs. Owusu, his class teacher. "He\'s now one of the most engaged students in my class, and his confidence has soared. He\'s even started a study group to help his peers."',
    },
    {
      type: "stats",
      items: [
        { label: "Grade improvement", value: "68%" },
        { label: "Class participation", value: "5x increase" },
        { label: "Confidence level", value: "Significantly higher" },
      ],
    },
    {
      type: "heading",
      content: "Looking to the Future",
    },
    {
      type: "paragraph",
      content:
        "Today, Kofi has a clear vision for his future. Inspired by his mentor and the support he received, he now dreams of becoming a doctor to help others in his community.",
    },
    {
      type: "paragraph",
      content:
        '"The Paradigm Shift Project changed my life," Kofi says with a smile. "I now believe in myself and know that with hard work and the right support, I can achieve my dreams. I want to become a doctor and help people in my community, just like Mr. Adu helped me."',
    },
    {
      type: "image",
      url: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
      caption: "Kofi receiving an academic achievement award at his school",
    },
    {
      type: "paragraph",
      content:
        "Kofi's story is just one example of how the Paradigm Shift Project is transforming lives through structured mentorship. By focusing on personal growth, academic success, and career exploration, we're helping students like Kofi build brighter futures for themselves and their communities.",
    },
  ],
  impactMetrics: [
    { metric: "Grade improvement", value: "68%" },
    { metric: "Confidence level", value: "Significantly higher" },
    { metric: "Future aspirations", value: "Medical career" },
    { metric: "Community impact", value: "Started peer study group" },
  ],
  relatedStories: [
    {
      id: 5,
      title: "Community Library Transforms Learning",
      excerpt:
        "The establishment of a community library in Kpando has provided over 500 children with access to books and learning resources, significantly improving literacy rates in the community.",
      image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
      program: "Paradigm Shift Project",
      programSlug: "paradigm-shift-project",
      slug: "community-library-transforms-learning",
    },
    {
      id: 9,
      title: "Mentorship Changes Lives",
      excerpt:
        "Through our structured mentorship program, 50 students who were at risk of dropping out have not only remained in school but have shown significant improvement in their academic performance and confidence.",
      image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
      program: "Paradigm Shift Project",
      programSlug: "paradigm-shift-project",
      slug: "mentorship-changes-lives",
    },
    {
      id: 2,
      title: "Breaking Barriers: Girls in STEM",
      excerpt:
        "Our targeted workshops have led to a 45% increase in female participation in STEM activities across our partner schools, with many girls now expressing interest in pursuing STEM careers.",
      image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
      program: "STEMize",
      programSlug: "stemize",
      slug: "breaking-barriers-girls-in-stem",
    },
  ],
}



//================================================================================================//


export  const testimonialsIndividuals = [
  {
    id: 1,
    name: "Henry Deladem Nyedu",
    role: "(ICT Student, University of Education, Winneba)",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6ektW6Tr2qu80yLtXiwBWvmPjYRrCVpAkDZGx",
    quote:
      "Several years ago, mentors introduced me to the world of technology and programming, sparking my interest in coding. The basics I learned opened my eyes and inspired me to pursue a degree in ICT. I'm grateful for their guidance, which played a key role in shaping my career path.",
  },
  {
    id: 2,
    name: "Precious Grafuse Agbome",
    role: "(JCG, Precious Inspire)",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6by2nbNSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    quote:
      "The Nyomiyi (Girl) Project offered hope to vulnerable girls at risk of exploitation due to their inability to afford sanitary pads. By addressing this basic need, the initiative empowered them to take control of their health and dignity.",
  },
  {
    id: 3,
    name: "Beatrice Kyer",
    role: "(Head Teacher, HTI Basic School)",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6mWGA7ePipbwPo0KYWvGeAMglLIOs4Tq5nj8N",
    quote:
      "The Paradigm Shift Project has motivated our students to take their studies seriously and adhere to the RISC with confidence. Thanks to the learning strategies they were taught, the majority achieved single-digit aggregates and were placed in prestigious senior high schools like Achimota SHS.",
  },
]



//================================================================================================ //


// Color mapping for UI elements
export const colorMap = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-900",
    button: "bg-blue-900 hover:bg-blue-800",
    border: "border-blue-300",
    hover: "hover:bg-blue-50"
  },
  teal: {
    bg: "bg-teal-100",
    text: "text-teal-700",
    button: "bg-teal-700 hover:bg-teal-600",
    border: "border-teal-300",
    hover: "hover:bg-teal-50"
  },
  yellow: {
    bg: "bg-yellow-100",
    text: "text-yellow-600",
    button: "bg-yellow-500 hover:bg-yellow-600",
    border: "border-yellow-300",
    hover: "hover:bg-yellow-50"
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-700",
    button: "bg-purple-800 hover:bg-purple-700",
    border: "border-purple-300",
    hover: "hover:bg-purple-50"
  }
};


// Program data
export const programs:Program[] = [
  {
    id: "nyornuvi",
    title: "Nyornuvi (Girl) Project Impact",
    color: "blue",
    description: "The Nyornuvi Project has made significant strides in addressing period poverty and promoting menstrual hygiene management among girls in underserved communities.",
    buttonHref: "/what-we-do/nyornuvi",
    buttonText: "Learn More About Nyornuvi",
    achievements: [
      {
        title: "Increased School Attendance",
        description: "35% increase in school attendance during menstruation periods"
      },
      {
        title: "Reduced Stigma",
        description: "More open discussions about menstruation in 12 communities"
      },
      {
        title: "Peer Education",
        description: "75 peer educators trained, reaching over 2,000 girls"
      }
    ]
  },
  {
    id: "stemize",
    title: "STEMize Project Impact",
    color: "teal",
    description: "The STEMize Project has successfully promoted science, technology, engineering, and mathematics education among underserved communities, bridging the digital divide.",
    buttonHref: "/what-we-do/stemize",
    buttonText: "Learn More About STEMize",
    achievements: [
      {
        title: "Increased STEM Interest",
        description: "85% of participants report increased interest in STEM careers"
      },
      {
        title: "Competition Success",
        description: "Multiple teams have won regional and national STEM competitions"
      },
      {
        title: "Teacher Training",
        description: "50+ teachers trained in innovative STEM teaching methods"
      }
    ]
  },
  {
    id: "psp",
    title: "Paradigm Shift Project Impact",
    color: "yellow",
    description: "The Paradigm Shift Project has empowered students through structured mentorship, supporting personal growth, academic success, and career exploration.",
    buttonHref: "/what-we-do/paradigm-shift-project",
    buttonText: "Learn More About PSP",
    achievements: [
      {
        title: "Academic Improvement",
        description: "85% of participants show improved academic performance"
      },
      {
        title: "Reduced Dropout Rates",
        description: "50+ at-risk students have remained in school and shown improvement"
      },
      {
        title: "Leadership Development",
        description: "Students have started peer mentoring programs at their schools"
      }
    ]
  },
  {
    id: "ylt",
    title: "#YouthLearningTogether Impact",
    color: "purple",
    description: "The #YouthLearningTogether initiative has successfully brought together young people through interactive sessions aimed at enhancing their knowledge and skills.",
    buttonHref: "/what-we-do/youth-learning-together",
    buttonText: "Learn More About YLT",
    achievements: [
      {
        title: "Career Advancement",
        description: "78% of participants report improved career prospects"
      },
      {
        title: "Entrepreneurship Success",
        description: "25 young adults have started their own businesses after training"
      },
      {
        title: "Community Initiatives",
        description: "Participants have organized community projects engaging 100+ volunteers"
      }
    ]
  }
];



// ==========================================================================================//


// Mock data for events
export const featuredEventData = {
  id: "youth-leadership-summit-2023",
  title: "Youth Leadership Summit 2023",
  date: "November 15, 2023",
  time: "9:00 AM - 5:00 PM",
  location: "Accra International Conference Center",
  category: "Leadership",
  image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  description:
    "Join us for our annual Youth Leadership Summit where young leaders from across Africa gather to share ideas, learn from experts, and build networks that will shape the future of our continent.",
  registrationLink: "/events/youth-leadership-summit-2023",
}


export const upcomingEventsData = [
  {
    id: "youth-leadership-summit-2023",
    title: "Youth Leadership Summit 2023",
    date: "November 15, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Accra International Conference Center",
    category: "Leadership",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    description:
      "Join us for our annual Youth Leadership Summit where young leaders from across Africa gather to share ideas, learn from experts, and build networks that will shape the future of our continent.",
    registrationLink: "/events/youth-leadership-summit-2023",
  },
  {
    id: "stemize-workshop-series",
    title: "STEMize Workshop Series",
    date: "November 22, 2023",
    time: "10:00 AM - 2:00 PM",
    location: "University of Ghana, Legon",
    category: "STEM",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    description:
      "A hands-on workshop series designed to inspire and equip young students with practical STEM skills through interactive experiments and projects.",
    registrationLink: "/events/stemize-workshop-series",
  },
  {
    id: "nyornuvi-community-outreach",
    title: "Nyornuvi Community Outreach",
    date: "December 5, 2023",
    time: "8:00 AM - 4:00 PM",
    location: "Volta Region",
    category: "Community",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    description:
      "Join our community outreach program where we'll be providing educational resources, health screenings, and mentorship to underserved communities.",
    registrationLink: "/events/nyornuvi-community-outreach",
  },
  {
    id: "paradigm-shift-conference",
    title: "Paradigm Shift Conference",
    date: "December 12, 2023",
    time: "9:00 AM - 6:00 PM",
    location: "Kempinski Hotel, Accra",
    category: "Conferences",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    description:
      "A transformative conference bringing together thought leaders, innovators, and change-makers to discuss solutions to Africa's most pressing challenges.",
    registrationLink: "/events/paradigm-shift-conference",
  },
  {
    id: "youth-learning-together-workshop",
    title: "Youth Learning Together Workshop",
    date: "January 10, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Cape Coast",
    category: "Education",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    description:
      "An interactive workshop focused on collaborative learning methodologies and peer-to-peer education strategies for youth leaders.",
    registrationLink: "/events/youth-learning-together-workshop",
  },
  {
    id: "mentor-training-program",
    title: "Mentor Training Program",
    date: "January 18, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "LIFE-MAC Africa Headquarters, Accra",
    category: "Workshops",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    description:
      "A comprehensive training program for professionals interested in mentoring youth through our various programs and initiatives.",
    registrationLink: "/events/mentor-training-program",
  },
]

export const pastEventsData = [
  {
    id: "youth-innovation-challenge-2023",
    title: "Youth Innovation Challenge 2023",
    date: "October 5, 2023",
    location: "Kumasi",
    category: "STEM",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    registrationLink: "/events/youth-innovation-challenge-2023",
  },
  {
    id: "girls-in-stem-day",
    title: "Girls in STEM Day",
    date: "September 15, 2023",
    location: "Accra",
    category: "STEM",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    registrationLink: "/events/girls-in-stem-day",
  },
  {
    id: "rural-education-initiative-launch",
    title: "Rural Education Initiative Launch",
    date: "August 22, 2023",
    location: "Northern Region",
    category: "Education",
    image: "https://picsum.photos/seed/rural/800/600",
    registrationLink: "/events/rural-education-initiative-launch",
  },
]

// Gallery Items
export const galleryItems = [
  {
    id: 1,
    src: "https://picsum.photos/seed/psp1/800/600",
    category: "PSP",
    size: "large", // spans 2 rows, 2 cols
    alt: "Students in a mentoring session"
  },
  {
    id: 2,
    src: "/images/staff/sarah.png",
    category: "Team",
    size: "medium", // spans 1 row, 1 col
    alt: "Team member portrait"
  },
  {
    id: 3,
    src: "/images/staff/cct.png",
    category: "Team",
    size: "tall", // spans 2 rows, 1 col
    alt: "Executive Director"
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/stem1/800/600",
    category: "STEMize",
    size: "medium",
    alt: "Robotics workshop"
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/nyor1/800/600",
    category: "Nyornuvi",
    size: "wide", // spans 1 row, 2 cols
    alt: "Community outreach"
  },
  {
    id: 6,
    src: "/images/staff/bk.png",
    category: "Team",
    size: "medium",
    alt: "Programs Director"
  },
  {
    id: 7,
    src: "https://picsum.photos/seed/ylt1/800/600",
    category: "YLT",
    size: "tall",
    alt: "Youth workshop"
  },
  {
    id: 8,
    src: "https://picsum.photos/seed/event1/800/600",
    category: "Events",
    size: "medium",
    alt: "Conference hall"
  },
  {
    id: 9,
    src: "/images/staff/dyvia.png",
    category: "Team",
    size: "medium",
    alt: "Finance Officer"
  },
  {
    id: 10,
    src: "https://picsum.photos/seed/psp2/800/600",
    category: "PSP",
    size: "wide",
    alt: "Group study session"
  },
  {
    id: 11,
    src: "https://picsum.photos/seed/stem2/800/600",
    category: "STEMize",
    size: "medium",
    alt: "Science experiment"
  },
  {
    id: 12,
    src: "/images/staff/eugene.png",
    category: "Team",
    size: "medium",
    alt: "Digital Lead"
  },
   {
    id: 13,
    src: "https://picsum.photos/seed/nyor2/800/600",
    category: "Nyornuvi",
    size: "large",
    alt: "Girls empowerment rally"
  },
  {
    id: 14,
    src: "https://picsum.photos/seed/event2/800/600",
    category: "Events",
    size: "tall",
    alt: "Award ceremony"
  },
  {
    id: 15,
    src: "/images/staff/fav.png",
    category: "Team",
    size: "medium",
    alt: "Business Development"
  },
]