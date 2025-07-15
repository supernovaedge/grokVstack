export const json = {
  title:
    "Developer Preferences in AI vs. Community Q&A: Comparing Grok and Stack Overflow Responses",
  description:
    "This survey is part of a research study comparing developer preferences between AI coding assistants (like Grok) and community Q&A platforms (like Stack Overflow). All responses are anonymous and used solely for academic research.",
  completedHtml:
    "<h3>Thank you for your participation!</h3><p>Your responses have been recorded anonymously. We appreciate your time and contribution to this research.</p>",
  pages: [
    {
      name: "page_agreement",
      description:
        "Purpose: This survey compares how developers use AI coding assistants (e.g., Grok) and community Q&A platforms (e.g., Stack Overflow) for coding assistance. Your input will help us understand preferences and influencing factors.\n\nAnonymity: All responses are anonymous, and no personally identifiable information is collected. Data is used solely for academic research.\n\nVoluntary Participation: Participation is voluntary, and you may withdraw at any time without penalty.",
      elements: [
        {
          type: "radiogroup",
          name: "agreeToParticipate",
          title: "Do you consent to participate in this survey?",
          isRequired: true,
          choices: [
            {
              value: "yes",
              text: "Yes, I consent",
            },
            {
              value: "no",
              text: "No, I do not consent",
            },
          ],
        },
      ],
    },
    {
      name: "page_demographics",
      visibleIf: "{agreeToParticipate} = 'yes'",
      title: "Demographic Information",
      description:
        "Please provide some background information to help us understand your experience.",
      elements: [
        {
          type: "radiogroup",
          name: "role",
          title: "What is your current role?",
          isRequired: true,
          choices: [
            {
              value: "student",
              text: "Student",
            },
            {
              value: "junior",
              text: "Junior Developer (0–2 years)",
            },
            {
              value: "midlevel",
              text: "Mid-Level Developer (3–5 years)",
            },
            {
              value: "senior",
              text: "Senior Developer (6+ years)",
            },
            {
              value: "other",
              text: "Other (e.g., hobbyist, manager)",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "experience",
          title: "How many years of programming experience do you have?",
          isRequired: true,
          choices: [
            {
              value: "less1",
              text: "Less than 1 year",
            },
            {
              value: "1to2",
              text: "1–2 years",
            },
            {
              value: "3to5",
              text: "3–5 years",
            },
            {
              value: "6to10",
              text: "6–10 years",
            },
            {
              value: "over10",
              text: "More than 10 years",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "workEnvironment",
          title: "What is your primary work environment?",
          choices: [
            {
              value: "solo",
              text: "Solo/Freelance",
            },
            {
              value: "smallTeam",
              text: "Small Team (<10 developers)",
            },
            {
              value: "largeTeam",
              text: "Large Team (10+ developers)",
            },
            {
              value: "academic",
              text: "Academic/Research",
            },
            {
              value: "other",
              text: "Other",
            },
          ],
        },
      ],
    },
    {
      name: "page_tool_usage",
      visibleIf: "{agreeToParticipate} = 'yes'",
      title: "Tool Usage",
      description: "Tell us about your use of coding assistance tools.",
      elements: [
        {
          type: "checkbox",
          name: "primaryLanguage",
          title: "What is your primary programming language(s)?",
          isRequired: true,
          choices: [
            {
              value: "javascript",
              text: "JavaScript/TypeScript",
            },
            {
              value: "python",
              text: "Python",
            },
            {
              value: "java",
              text: "Java",
            },
            {
              value: "csharp_cpp",
              text: "C#/C++",
            },
            {
              value: "php",
              text: "PHP",
            },
            {
              value: "rust",
              text: "Rust",
            },
          ],
          showOtherItem: true,
          otherText: "Other (please specify)",
        },
        {
          type: "radiogroup",
          name: "stackOverflowFrequency",
          title: "How often do you use Stack Overflow for coding assistance?",
          isRequired: true,
          choices: [
            {
              value: "daily",
              text: "Daily",
            },
            {
              value: "weekly",
              text: "Weekly",
            },
            {
              value: "monthly",
              text: "Monthly",
            },
            {
              value: "rarely",
              text: "Rarely",
            },
            {
              value: "never",
              text: "Never",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "aiToolUsage",
          title:
            "How often do you use AI coding assistants (e.g., Grok, ChatGPT, Copilot)?",
          isRequired: true,
          choices: [
            {
              value: "daily",
              text: "Daily",
            },
            {
              value: "weekly",
              text: "Weekly",
            },
            {
              value: "monthly",
              text: "Monthly",
            },
            {
              value: "rarely",
              text: "Rarely",
            },
            {
              value: "never",
              text: "Never",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "grokUsage",
          title: "Have you used Grok (xAI’s coding assistant)?",
          isRequired: true,
          choices: [
            {
              value: "yes",
              text: "Yes",
            },
            {
              value: "no",
              text: "No, but I use other AI tools",
            },
            {
              value: "never",
              text: "No, I’ve never used any AI assistant",
            },
          ],
        },
      ],
    },
    {
      name: "page_scenarios",
      visibleIf: "{agreeToParticipate} = 'yes'",
      title: "Scenario-Based Preferences",
      description:
        "Indicate your preferred tool for specific coding scenarios, considering factors like accuracy, speed, and trust.",
      elements: [
        {
          type: "radiogroup",
          name: "syntaxError",
          title: "For fixing a syntax error quickly, which tool do you prefer?",
          isRequired: true,
          choices: [
            {
              value: "grok",
              text: "Grok",
            },
            {
              value: "stackoverflow",
              text: "Stack Overflow",
            },
            {
              value: "both",
              text: "Both",
            },
            {
              value: "neither",
              text: "Neither",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "complexConcept",
          title:
            "For understanding a complex concept or algorithm, which tool do you prefer?",
          isRequired: true,
          choices: [
            {
              value: "grok",
              text: "Grok",
            },
            {
              value: "stackoverflow",
              text: "Stack Overflow",
            },
            {
              value: "both",
              text: "Both",
            },
            {
              value: "neither",
              text: "Neither",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "bestPractices",
          title:
            "For finding best practices or coding standards, which tool do you prefer?",
          isRequired: true,
          choices: [
            {
              value: "grok",
              text: "Grok",
            },
            {
              value: "stackoverflow",
              text: "Stack Overflow",
            },
            {
              value: "both",
              text: "Both",
            },
            {
              value: "neither",
              text: "Neither",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "debugging",
          title:
            "For debugging a complex issue in your code, which tool do you prefer?",
          isRequired: true,
          choices: [
            {
              value: "grok",
              text: "Grok",
            },
            {
              value: "stackoverflow",
              text: "Stack Overflow",
            },
            {
              value: "both",
              text: "Both",
            },
            {
              value: "neither",
              text: "Neither",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "trustPreference",
          title: "Which tool do you trust more for accurate coding solutions?",
          isRequired: true,
          choices: [
            {
              value: "grok",
              text: "Grok",
            },
            {
              value: "stackoverflow",
              text: "Stack Overflow",
            },
            {
              value: "both",
              text: "Both equally",
            },
            {
              value: "neither",
              text: "Neither",
            },
          ],
        },
      ],
    },
    {
      name: "page_comparison",
      visibleIf: "{agreeToParticipate} = 'yes' and {grokUsage} = 'yes'",
      title: "Comparing Stack Overflow and Grok Responses",
      description:
        "Please evaluate sample responses from Stack Overflow and Grok for the same coding question (to be provided).",
      elements: [
        {
          type: "radiogroup",
          name: "accuracyComparison",
          title:
            "Which tool’s response is more accurate for the provided coding question?",
          isRequired: true,
          choices: [
            {
              value: "grok",
              text: "Grok",
            },
            {
              value: "stackoverflow",
              text: "Stack Overflow",
            },
            {
              value: "both",
              text: "Both equally",
            },
            {
              value: "neither",
              text: "Neither",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "clarityComparison",
          title: "Which tool’s response is clearer and easier to understand?",
          isRequired: true,
          choices: [
            {
              value: "grok",
              text: "Grok",
            },
            {
              value: "stackoverflow",
              text: "Stack Overflow",
            },
            {
              value: "both",
              text: "Both equally",
            },
            {
              value: "neither",
              text: "Neither",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "relevanceComparison",
          title:
            "Which tool’s response is more relevant to the coding question?",
          isRequired: true,
          choices: [
            {
              value: "grok",
              text: "Grok",
            },
            {
              value: "stackoverflow",
              text: "Stack Overflow",
            },
            {
              value: "both",
              text: "Both equally",
            },
            {
              value: "neither",
              text: "Neither",
            },
          ],
        },
        {
          type: "comment",
          name: "openEndedFeedback",
          title:
            "What factors influence your preference for Grok or Stack Overflow? (e.g., speed, trust, ease of use, specific use cases)",
        },
      ],
    },
  ],
};
