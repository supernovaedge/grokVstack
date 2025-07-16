export const json = {
  title:
    "Developer Preferences in AI vs. Community Q&A: Comparing Grok and Stack Overflow Responses",
  description:
    "This survey is part of a research study comparing developer preferences between AI coding assistants (like Grok) and community Q&A platforms (like Stack Overflow). All responses are anonymous and used solely for academic research.",
  completedHtml:
    "<h3>Thank you for your time!</h3><p>We appreciate you considering our survey. If you chose not to participate, your responses have not been recorded.</p>",
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
          description: 'Select "Yes, I consent" to move to the questions.',
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
        {
          type: "checkbox",
          name: "question1",
          visibleIf: "{grokUsage} = 'no' or {grokUsage} = 'never'",
          title:
            "If you have not used Grok, what are the reasons? (Select all that apply)",
          isRequired: true,
          choices: [
            {
              value: "unaware",
              text: "I was not aware of Grok",
            },
            {
              value: "access",
              text: "I don’t have access to Grok",
            },
            {
              value: "trust",
              text: "I don’t trust AI coding assistants",
            },
            {
              value: "cost",
              text: "Cost or subscription concerns",
            },
            {
              value: "preference",
              text: "I prefer other tools (e.g., Stack Overflow, Copilot)",
            },
            {
              value: "other",
              text: "Other (please specify)",
            },
          ],
          showOtherItem: true,
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
      visibleIf: "{agreeToParticipate} = 'yes'",
      title: "Evaluating Coding Responses",
      elements: [
        {
          type: "html",
          name: "question6",
          html: '<div>  \n  <section style="margin-bottom: 1.5rem;">\n    <h2 style="font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.75rem;">What You’ll Be Doing</h2>\n    <p style="color: #4b5563; line-height: 1.5;">\n      In the next section, you will evaluate a sample programming question styled like those on Stack Overflow. The question will have two responses, labeled <strong>Answer A</strong> and <strong>Answer B</strong>. Your task is to compare these responses based on specific criteria to help us understand your preferences for coding assistance tools.\n    </p>\n  </section>\n\n  <section style="margin-bottom: 1.5rem;">\n    <h2 style="font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.75rem;">How to Approach the Questions</h2>\n    <ul style="list-style: disc; padding-left: 1.5rem; color: #4b5563; line-height: 1.5; margin-bottom: 0.5rem;">\n      <li><strong>Read Carefully</strong>: Review the sample question and both Answer A and Answer B thoroughly to understand the context and content.</li>\n      <li><strong>Evaluate Using the Likert Scale</strong>: Rate each answer on a scale from 1 (Strongly Disagree) to 5 (Strongly Agree) for criteria such as:\n        <ul style="list-style: circle; padding-left: 1.5rem; margin-top: 0.25rem;">\n          <li><strong>Accuracy</strong>: Is the response correct and technically sound?</li>\n          <li><strong>Clarity</strong>: Is the response easy to understand and well-explained?</li>\n          <li><strong>Relevance</strong>: Does the response directly address the question asked?</li>\n        </ul>\n      </li>\n      <li><strong>Provide Honest Feedback</strong>: Rate each answer based on your experience and perception, considering how useful it would be in a real coding scenario.</li>\n    </ul>\n  </section>\n\n  <section style="margin-bottom: 1.5rem;">\n    <h2 style="font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.75rem;">Example of a Likert Scale Question</h2>\n    <p style="color: #4b5563; line-height: 1.5; margin-bottom: 0.5rem;">\n      For the statement “Answer A is accurate,” you will select one option:\n    </p>\n    <div style="background-color: #f9fafb; padding: 1rem; border-radius: 0.375rem;">\n      <p style="color: #4b5563;">\n        <strong>1</strong>: Strongly Disagree | <strong>2</strong>: Disagree | <strong>3</strong>: Neutral | <strong>4</strong>: Agree | <strong>5</strong>: Strongly Agree\n      </p>\n    </div>\n  </section>\n\n  <section style="margin-bottom: 1.5rem;">\n    <h2 style="font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.75rem;">Important Note</h2>\n    <p style="color: #4b5563; line-height: 1.5;">\n      To ensure an unbiased evaluation, the source of each answer (whether from an AI tool like Grok or a community platform like Stack Overflow) will not be disclosed. Please focus on the content of the responses when making your judgments.\n    </p>\n  </section>\n</div>',
        },
      ],
    },
  ],
};
