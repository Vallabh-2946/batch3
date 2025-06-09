
// Map of where static content (that could be AI-generated) is currently located

export const STATIC_CONTENT_LOCATIONS = {
  // Career Quiz Questions and Logic
  QUIZ_QUESTIONS: {
    file: "src/pages/CareerQuiz.tsx",
    lines: "13-77",
    content: "6 career assessment questions with multiple choice options",
    description: "Static questions for determining user preferences and interests"
  },

  // Career Recommendation Logic
  CAREER_RECOMMENDATIONS: {
    file: "src/pages/CareerQuiz.tsx", 
    lines: "89-186",
    content: "getCareerRecommendation() function",
    description: "Hard-coded logic that maps quiz answers to career suggestions with skills, salary, jobs, and companies"
  },

  // Learning Roadmaps Data
  ROADMAP_DATA: {
    file: "src/pages/Roadmap.tsx",
    lines: "11-122", 
    content: "careers object with detailed learning paths",
    description: "Static roadmaps for Software Engineer, Data Scientist, and UI/UX Designer with resources and timelines"
  },

  // Hero Section Content
  HERO_CONTENT: {
    file: "src/components/Hero.tsx",
    lines: "13-30",
    content: "Main headline and description text",
    description: "Marketing copy for the landing page"
  },

  // Navigation and UI Text
  HEADER_NAVIGATION: {
    file: "src/components/Header.tsx",
    lines: "13-20",
    content: "Navigation menu items and links",
    description: "Header navigation labels and routes"
  },

  // Form Labels and Placeholders
  LOGIN_FORM: {
    file: "src/pages/Login.tsx",
    lines: "34-80",
    content: "Form labels, placeholders, and validation messages",
    description: "User authentication form content"
  },

  SIGNUP_FORM: {
    file: "src/pages/Signup.tsx", 
    lines: "47-120",
    content: "Registration form labels and validation",
    description: "User registration form content"
  }
};

// Opportunities for AI prompt integration
export const AI_INTEGRATION_OPPORTUNITIES = {
  DYNAMIC_QUIZ_GENERATION: {
    current: "Static 6 questions",
    potential: "AI-generated personalized questions based on user background",
    prompts_needed: ["Question generation", "Answer analysis", "Follow-up questions"]
  },

  PERSONALIZED_RECOMMENDATIONS: {
    current: "Rule-based career matching",
    potential: "AI analysis of responses with detailed career exploration",
    prompts_needed: ["Career analysis", "Skill gap identification", "Market insights"]
  },

  ADAPTIVE_ROADMAPS: {
    current: "3 static career roadmaps", 
    potential: "Personalized learning paths based on user goals and timeline",
    prompts_needed: ["Roadmap customization", "Resource recommendation", "Progress adaptation"]
  },

  SMART_PROGRESS_TRACKING: {
    current: "Simple completion checkboxes",
    potential: "AI-powered progress insights and recommendations",
    prompts_needed: ["Progress analysis", "Study suggestions", "Motivation coaching"]
  },

  INTERACTIVE_CAREER_CHAT: {
    current: "Static content display",
    potential: "Conversational AI career counselor",
    prompts_needed: ["Career counseling", "Q&A responses", "Goal setting"]
  },

  COLLEGE_PREDICTION_INSIGHTS: {
    current: "Basic KCET rank calculation",
    potential: "AI-powered admission probability and college recommendations", 
    prompts_needed: ["Admission analysis", "College matching", "Alternative suggestions"]
  }
};

export default STATIC_CONTENT_LOCATIONS;
