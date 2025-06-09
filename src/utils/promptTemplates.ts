
// Utility functions for working with AI prompts

export const fillPromptTemplate = (template: string, variables: Record<string, any>): string => {
  let filledTemplate = template;
  
  Object.entries(variables).forEach(([key, value]) => {
    const placeholder = `{${key}}`;
    filledTemplate = filledTemplate.replace(new RegExp(placeholder, 'g'), String(value));
  });
  
  return filledTemplate;
};

export const formatQuizResponsesForPrompt = (answers: Record<number, string>) => {
  return Object.entries(answers)
    .map(([questionIndex, answer]) => `Question ${parseInt(questionIndex) + 1}: ${answer}`)
    .join('\n');
};

export const generateCareerAnalysisPrompt = (quizAnswers: Record<number, string>) => {
  const formattedResponses = formatQuizResponsesForPrompt(quizAnswers);
  
  return fillPromptTemplate(
    `You are an expert career counselor analyzing a student's quiz responses to recommend the best career path.

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
    { quizResponses: formattedResponses }
  );
};

export const generateRoadmapPrompt = (careerTitle: string, userLevel: string = 'beginner') => {
  return fillPromptTemplate(
    `Create a detailed learning roadmap for becoming a {careerTitle}.

The roadmap should include:
- Step-by-step learning phases with timelines
- Essential skills and technologies for each phase
- Recommended free and paid learning resources
- Practical projects to build portfolio
- Industry certifications to pursue
- Timeline expectations for each milestone

Target audience: Indian students/graduates ({userLevel} level)
Focus on: Practical, industry-relevant skills
Format: Structured phases with clear progression`,
    { careerTitle, userLevel }
  );
};

export const generateProgressPrompt = (progressData: {
  careerPath: string;
  completedSteps: string[];
  totalSteps: number;
  timeSpent: string;
}) => {
  return fillPromptTemplate(
    `Based on the user's current progress in {careerPath}:

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
    {
      careerPath: progressData.careerPath,
      completedSteps: progressData.completedSteps.join(', '),
      totalSteps: progressData.totalSteps.toString(),
      timeSpent: progressData.timeSpent
    }
  );
};

// Example usage and testing
export const EXAMPLE_PROMPTS = {
  sampleCareerAnalysis: generateCareerAnalysisPrompt({
    0: "logical",
    1: "team", 
    2: "innovation",
    3: "programming",
    4: "hands-on",
    5: "startup"
  }),
  
  sampleRoadmap: generateRoadmapPrompt("Full Stack Developer", "intermediate"),
  
  sampleProgress: generateProgressPrompt({
    careerPath: "Software Engineer",
    completedSteps: ["Programming Fundamentals", "Web Development Basics"],
    totalSteps: 4,
    timeSpent: "3 months"
  })
};

export default fillPromptTemplate;
