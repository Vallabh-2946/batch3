
// AI Prompts for Career Buddy Application

export const CAREER_PROMPTS = {
  // Career Quiz Analysis Prompt
  CAREER_ANALYSIS: `You are an expert career counselor analyzing a student's quiz responses to recommend the best career path. 

Based on the following quiz responses:
{quizResponses}

Please analyze the responses and provide:
1. The most suitable career recommendation
2. A detailed description of why this career fits
3. Required skills and technologies to learn
4. Expected salary range in Indian market (LPA)
5. Related job roles and career progression
6. Top companies hiring for this role
7. Learning roadmap suggestions

Focus on technology and engineering careers suitable for Indian students. Be specific and actionable in your recommendations.`,

  // Learning Roadmap Generation
  ROADMAP_GENERATION: `Create a detailed learning roadmap for becoming a {careerTitle}.

The roadmap should include:
- Step-by-step learning phases with timelines
- Essential skills and technologies for each phase
- Recommended free and paid learning resources
- Practical projects to build portfolio
- Industry certifications to pursue
- Timeline expectations for each milestone

Target audience: Indian students/graduates
Focus on: Practical, industry-relevant skills
Format: Structured phases with clear progression`,

  // Progress Tracking Suggestions
  PROGRESS_SUGGESTIONS: `Based on the user's current progress in {careerPath}:

Current completed steps: {completedSteps}
Total steps: {totalSteps}
Time spent: {timeSpent}

Provide:
1. Personalized encouragement and motivation
2. Specific next steps recommendations
3. Tips to overcome common challenges at this stage
4. Additional resources that might help
5. Study schedule optimization suggestions
6. Portfolio project ideas relevant to current level`,

  // KCET Prediction Analysis
  KCET_ANALYSIS: `Analyze KCET exam prediction data and provide insights.

Student Profile:
- Physics Score: {physicsScore}
- Chemistry Score: {chemistryScore}
- Mathematics Score: {mathsScore}
- Expected Rank: {predictedRank}
- Preferred Branch: {preferredBranch}
- Location Preference: {locationPreference}

Provide:
1. Realistic college admission chances
2. Alternative branch suggestions
3. Preparation improvement tips
4. College selection strategy
5. Backup options and career alternatives`,

  // College Recommendation
  COLLEGE_RECOMMENDATIONS: `Based on KCET rank {rank} and preferences:

Preferred Branch: {branch}
Location: {location}
College Type: {collegeType}
Budget: {budget}

Recommend:
1. Top 10 colleges with admission probability
2. Course details and specializations available
3. Placement statistics and average packages
4. Campus facilities and opportunities
5. Admission process and important dates
6. Alternative branches to consider in same colleges`,

  // Goal Setting Assistant
  GOAL_SETTING: `Help create SMART goals for career development in {careerField}.

Current Status: {currentLevel}
Target Timeline: {timeline}
Available Study Time: {studyTime}
Learning Style: {learningStyle}

Create:
1. Short-term goals (1-3 months)
2. Medium-term goals (3-6 months)
3. Long-term goals (6-12 months)
4. Daily/weekly action items
5. Progress tracking metrics
6. Milestone celebration points`,

  // Skill Gap Analysis
  SKILL_GAP_ANALYSIS: `Analyze skill gaps for {targetRole} position.

Current Skills: {currentSkills}
Target Role Requirements: {roleRequirements}
Experience Level: {experienceLevel}
Industry: {industry}

Identify:
1. Critical skill gaps to address first
2. Nice-to-have skills for competitive advantage
3. Learning priority order
4. Estimated time to bridge each gap
5. Practical ways to gain experience
6. Portfolio projects to demonstrate skills`,

  // Interview Preparation
  INTERVIEW_PREP: `Generate interview preparation content for {jobRole} positions.

Experience Level: {level}
Company Type: {companyType}
Interview Type: {interviewType}

Provide:
1. Common technical questions and answers
2. Behavioral interview scenarios
3. Company-specific preparation tips
4. Mock interview questions
5. Red flags to avoid
6. Questions to ask the interviewer`,

  // Career Transition Advice
  CAREER_TRANSITION: `Provide guidance for career transition from {currentField} to {targetField}.

Current Background: {background}
Transition Timeline: {timeline}
Constraints: {constraints}
Motivation: {motivation}

Suggest:
1. Transition strategy and timeline
2. Transferable skills to highlight
3. New skills to develop
4. Networking opportunities
5. Gradual transition vs. complete switch
6. Financial planning considerations`
};

// System prompts for different AI models/contexts
export const SYSTEM_PROMPTS = {
  CAREER_COUNSELOR: `You are an expert career counselor specializing in technology careers for Indian students. You provide practical, actionable advice based on current industry trends and requirements. Always be encouraging while being realistic about expectations and timelines.`,

  TECHNICAL_MENTOR: `You are a senior software engineer and technical mentor. You help students understand complex technical concepts, plan their learning journey, and build practical skills. Focus on hands-on learning and real-world applications.`,

  COLLEGE_ADVISOR: `You are a college admission counselor with deep knowledge of Indian engineering colleges, admission processes, and career outcomes. You help students make informed decisions about their education path.`,

  INTERVIEW_COACH: `You are an experienced interview coach who has helped hundreds of candidates succeed in technical interviews. You provide specific, actionable feedback and practice opportunities.`
};

// Prompt templates for different user interactions
export const INTERACTION_PROMPTS = {
  WELCOME_NEW_USER: `Welcome to AI Career Buddy! I'm here to help you discover your ideal career path and create a personalized learning roadmap. 

To get started, I'd like to understand:
1. What's your current education level?
2. Are you interested in any specific field (technology, design, data science, etc.)?
3. What are your main career goals?

Would you like to take our comprehensive career quiz to get personalized recommendations?`,

  QUIZ_COMPLETION: `Congratulations on completing the career quiz! Based on your responses, I've identified some exciting career paths that align with your interests and strengths.

Your recommended career path is: {recommendedCareer}

This recommendation is based on your preferences for:
- Problem-solving approach: {problemSolving}
- Work environment: {workEnvironment}
- Motivation factors: {motivation}
- Technical interests: {technicalArea}

Would you like me to create a detailed learning roadmap for this career path?`,

  PROGRESS_CHECK_IN: `It's great to see your progress in {careerPath}! 

You've completed {completedSteps} out of {totalSteps} steps in your learning journey. That's {progressPercentage}% complete!

Recent achievements:
{recentAchievements}

How are you feeling about your progress? Are there any specific challenges you'd like help with?`,

  ROADMAP_COMPLETION: `Amazing! You've completed your {careerPath} learning roadmap! 🎉

This is a significant milestone in your career journey. You've gained valuable skills in:
{skillsLearned}

Next steps to consider:
1. Start applying for entry-level positions
2. Build advanced portfolio projects
3. Contribute to open-source projects
4. Consider specialized certifications
5. Network with industry professionals

Would you like help with interview preparation or job search strategies?`
};

// Error handling and fallback prompts
export const FALLBACK_PROMPTS = {
  UNCLEAR_REQUEST: `I'd love to help you with that! Could you provide a bit more detail about what you're looking for? 

I can assist with:
- Career exploration and recommendations
- Learning roadmaps and skill development
- College and course selection
- Interview preparation
- Goal setting and progress tracking

What specific area would you like to focus on?`,

  TECHNICAL_ERROR: `I apologize, but I encountered an issue processing your request. Let me try a different approach to help you.

Could you rephrase your question or let me know which specific aspect you'd like help with?`,

  NO_RESULTS: `I couldn't find specific information for your query, but I'd still love to help! 

Could you try:
1. Being more specific about your requirements
2. Checking if there are any typos
3. Asking about a related topic

What would you like to explore next?`
};

export default CAREER_PROMPTS;
