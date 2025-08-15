export const json = {
  title:
    "Developer Preferences in AI vs. Community Q&A: Comparing Grok and Stack Overflow Responses",
  description:
    "This survey is part of a research study comparing developer preferences between AI coding assistants (like Grok) and community Q&A platforms (like Stack Overflow). All responses are anonymous and used solely for academic research. For an optimal experience, we recommend using a computer or holding your phone in horizontal orientation.\n\n",
  completedHtml:
    "<h3>Thank you for your time!</h3><p>Your responses have been recorded.</p>",
  pages: [
    {
      name: "page_agreement",
      description:
        "Purpose: This survey compares how developers use AI coding assistants (Grok) and community Q&A platforms (Stack Overflow) for coding assistance. Your input will help us understand preferences and influencing factors.\n\nAnonymity: All responses are anonymous, and no personally identifiable information is collected. Data is used solely for academic research.\n\nVoluntary Participation: Participation is voluntary, and you may withdraw at any time without penalty.",
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
          isRequired: true,
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
              value: "csharp",
              text: "C#",
            },
            {
              value: "cpp",
              text: "C++",
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
          type: "checkbox",
          name: "aiAssistantsUsed",
          title:
            "Which AI coding assistants have you used? (Select all that apply)",
          isRequired: true,
          choices: [
            {
              value: "grok",
              text: "Grok (xAI)",
            },
            {
              value: "chatgpt",
              text: "ChatGPT",
            },
            {
              value: "copilot",
              text: "GitHub Copilot",
            },
            {
              value: "gemini",
              text: "Google Gemini",
            },
            {
              value: "deepseek",
              text: "DeepSeek",
            },
          ],
          showOtherItem: true,
          otherText: "Other (please specify)",
        },
        {
          type: "radiogroup",
          name: "primaryAiAssistant",
          visibleIf: "{aiAssistantsUsed} notempty",
          title: "Which AI assistant do you primarily rely on?",
          isRequired: true,
          choices: [
            {
              value: "grok",
              text: "Grok (xAI)",
            },
            {
              value: "chatgpt",
              text: "ChatGPT",
            },
            {
              value: "copilot",
              text: "GitHub Copilot",
            },
            {
              value: "gemini",
              text: "Google Gemini",
            },
            {
              value: "deepseek",
              text: "DeepSeek",
            },
            {
              value: "none",
              text: "None / No primary",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "aiUsageTenure",
          title: "For how long have you been using AI coding assistants?",
          isRequired: true,
          choices: [
            {
              value: "lt3m",
              text: "Less than 3 months",
            },
            {
              value: "3to12m",
              text: "3–12 months",
            },
            {
              value: "1to2y",
              text: "1–2 years",
            },
            {
              value: "gt2y",
              text: "More than 2 years",
            },
          ],
        },
        {
          type: "checkbox",
          name: "aiIntegrationEnvironment",
          title:
            "Where do you primarily use AI assistants? (Select all that apply)",
          isRequired: true,
          choices: [
            {
              value: "ide",
              text: "IDE plugin (e.g., VS Code, JetBrains)",
            },
            {
              value: "browserExt",
              text: "Browser extension",
            },
            {
              value: "webApp",
              text: "Web app / Chat interface",
            },
            {
              value: "cli",
              text: "Terminal / CLI",
            },
            {
              value: "api",
              text: "API integration",
            },
          ],
          showOtherItem: true,
          otherText: "Other (please specify)",
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
          name: "grokNonUseReasons",
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
              value: "ai",
              text: "AI Tools",
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
              value: "ai",
              text: "AI Tools",
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
              value: "ai",
              text: "AI Tools",
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
              value: "ai",
              text: "AI Tools",
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
          name: "underDeadline",
          title:
            "When you are under time pressure (tight deadline), which tool do you prefer?",
          isRequired: true,
          choices: [
            {
              value: "ai",
              text: "AI Tools",
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
          name: "securityCritical",
          title:
            "For security- or compliance-critical code (e.g., auth, cryptography), which tool do you trust more?",
          isRequired: true,
          choices: [
            {
              value: "ai",
              text: "AI Tools",
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
          name: "teamCollab",
          title:
            "When collaborating with a team (code review/design decision), which source do you rely on?",
          isRequired: true,
          choices: [
            {
              value: "ai",
              text: "AI Tools",
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
              value: "ai",
              text: "AI Tools",
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
      name: "page1",
      visibleIf: "{agreeToParticipate} = 'yes'",
      elements: [
        {
          type: "html",
          name: "compare1",
          html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta\n    name="viewport"\n    content="width=device-width, initial-scale=1.0, maximum-scale=1"\n  />\n  <title>How do I reverse a string in Python? - Stack Overflow</title>\n  <script src="https://cdn.tailwindcss.com"></script>\n  <link rel="preconnect" href="https://fonts.googleapis.com" />\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n  <link\n    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"\n    rel="stylesheet"\n  />\n  <style>\n    body {\n      font-family: "Inter", sans-serif;\n      background-color: #f1f2f3;\n    }\n\n    .tag {\n      display: inline-block;\n      background-color: #e1ecf4;\n      color: #39739d;\n      padding: 4px 8px;\n      margin: 2px;\n      font-size: 13px;\n      border: 1px solid #39739d;\n      border-radius: 3px;\n      font-family: Arial, sans-serif;\n      text-decoration: none;\n      white-space: nowrap;\n    }\n    .tag:hover {\n      background-color: #d0e3f1;\n      cursor: pointer;\n    }\n\n    .code-block {\n      background-color: #f8f9f9;\n      border: 1px solid #e3e6e8;\n      border-radius: 6px;\n      padding: 12px;\n      font-family: "Courier New", Courier, monospace;\n      overflow-x: auto;\n      white-space: pre;\n      word-wrap: normal;\n    }\n\n    .vote-control {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      color: #babfc4;\n      width: 48px;\n      flex-shrink: 0;\n    }\n    .vote-arrow {\n      cursor: pointer;\n      padding: 4px;\n    }\n    .vote-arrow:hover {\n      color: #83888d;\n    }\n    .vote-count {\n      font-size: 1.25rem;\n      color: #6a737c;\n      margin: 4px 0;\n    }\n\n    .question-section,\n    .answer-section {\n      display: flex;\n      align-items: flex-start;\n      gap: 20px;\n      margin-bottom: 24px;\n    }\n    .answer-section {\n      background-color: white;\n      padding: 20px;\n      border-radius: 8px;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n      margin-bottom: 32px;\n    }\n\n    /* Allow main content column to shrink and wrap */\n    .content-col {\n      flex: 1 1 auto;\n      min-width: 0;\n    }\n\n    /* Wrap long words/links */\n    .content-col p,\n    .content-col h3,\n    .content-col h4,\n    .content-col div {\n      overflow-wrap: anywhere;\n      word-break: break-word;\n    }\n\n    .page-container {\n      max-width: 64rem;\n      width: 100%;\n    }\n  </style>\n</head>\n<body class="bg-gray-100">\n  <div class="page-container mx-auto p-4 md:p-6">\n    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center">\n      <h3 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">\n        How do I reverse a string in Python?\n      </h3>\n    </div>\n\n    <div class="border-b border-gray-300 pb-2 mb-6 text-sm text-gray-500">\n      <span>Asked <strong>12 years, 3 months ago</strong></span>\n      <span class="mx-2">|</span>\n      <span>Modified <strong>2 days ago</strong></span>\n      <span class="mx-2">|</span>\n      <span>Viewed <strong>8.7m times</strong></span>\n    </div>\n\n    <div class="question-section">\n      <div class="vote-control">\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n        <span class="vote-count">3824</span>\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n      </div>\n\n      <div class="content-col">\n        <p class="text-gray-800 text-base leading-relaxed">\n          There is no built-in <code>reverse</code> method for Python\'s <code>str</code> object. How can I reverse a string?\n        </p>\n        <br />\n        <div class="mt-4 flex flex-wrap gap-2">\n          <span class="tag">python</span>\n          <span class="tag">string</span>\n        </div>\n      </div>\n    </div>\n\n    <hr class="my-8 border-gray-300" />\n\n    <div class="flex justify-between items-center mb-6">\n      <h4 class="text-xl sm:text-2xl font-semibold text-gray-800">2 Answers</h4>\n    </div>\n\n    <div class="answer-section">\n      <div class="vote-control">\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n        <span class="vote-count">2456</span>\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n      </div>\n\n      <div class="content-col">\n        <h4 class="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Answer A</h4>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">\n          Using slicing:\n        </p>\n        <pre class="code-block"><code>>>> \'hello world\'[::-1]\n\'dlrow olleh\'</code></pre>\n        <p class="text-gray-800 text-base leading-relaxed mt-4">\n          Slice notation takes the form <code>[start:stop:step]</code>. In this case, we omit the <code>start</code> and <code>stop</code> positions since we want the whole string. We also use <code>step = -1</code>, which means, "repeatedly step from right to left by 1 character".\n        </p>\n        <div class="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">\n          <p class="text-sm text-gray-600">Answered by <strong>Answer A</strong></p>\n        </div>\n      </div>\n    </div>\n\n    <div class="answer-section">\n      <div class="vote-control">\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n        <span class="vote-count">7893</span>\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n      </div>\n\n      <div class="content-col">\n        <h4 class="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Answer B</h4>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">\n          Here are the most common ways to reverse a string in Python, since there\'s no built-in reverse method for strings:\n        </p>\n        <p class="text-base font-bold mt-6 mb-2 text-gray-800"><b>Using String Slicing (Most Concise):</b></p>\n        <pre class="code-block"><code>text = "hello"\nreversed_text = text[::-1]  # Output: "olleh"</code></pre>\n        <p class="text-gray-800 text-base leading-relaxed mt-4">\n          The slice <code>[::-1]</code> uses the format <code>[start:stop:step]</code>, where a step of -1 reverses the string.\n        </p>\n        <p class="text-base font-bold mt-6 mb-2 text-gray-800"><b>Using a Loop (Explicit Approach):</b></p>\n        <pre class="code-block"><code>text = "hello"\nreversed_text = ""\nfor char in text:\n    reversed_text = char + reversed_text\n# Output: "olleh"</code></pre>\n        <p class="text-gray-800 text-base leading-relaxed mt-4">\n          Iterates through each character and builds a new string by prepending each character.\n        </p>\n        <p class="text-base font-bold mt-6 mb-2 text-gray-800"><b>Using <code>join</code> and <code>reversed</code> (Readable):</b></p>\n        <pre class="code-block"><code>text = "hello"\nreversed_text = "".join(reversed(text))  # Output: "olleh"</code></pre>\n        <p class="text-gray-800 text-base leading-relaxed mt-4">\n          <code>reversed(text)</code> returns an iterator of characters in reverse order, and <code>join</code> combines them into a string.\n        </p>\n        <p class="text-gray-800 text-base leading-relaxed mt-6">\n          The slicing method (<code>text[::-1]</code>) is the most Pythonic and efficient for most cases. Use the loop method if you need to perform additional operations during reversal or for educational purposes. The <code>join</code> and <code>reversed</code> approach is clear and readable but slightly less performant.\n        </p>\n        <div class="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">\n          <p class="text-sm text-gray-600">Answered by <strong>Answer B</strong></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n</html>\n',
        },
        {
          type: "radiogroup",
          name: "compare1_answerA_accuracy",
          title: "Answer A is accurate and technically sound.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare1_answerA_clarity",
          title: "Answer A is clear and easy to understand.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare1_answerA_relevance",
          title: "Answer A directly addresses the question.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare1_answerB_accuracy",
          title: "Answer B is accurate and technically sound.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare1_answerB_clarity",
          title: "Answer B is clear and easy to understand.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare1_answerB_relevance",
          title: "Answer B directly addresses the question.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "boolean",
          name: "compare1_accept",
          title: "Which answer would you accept?",
          isRequired: true,
          labelTrue: "B",
          labelFalse: "A",
        },
        {
          type: "checkbox",
          name: "compare1_accept_why",
          visibleIf: "{compare1_accept} notempty",
          title:
            "Why did you choose your preferred answer? (Select all that apply)",
          isRequired: true,
          choices: [
            {
              value: "brevity",
              text: "It was shorter and more concise",
            },
            {
              value: "completeness",
              text: "It provided more comprehensive information",
            },
            {
              value: "clarity",
              text: "It was clearer and easier to understand",
            },
            {
              value: "accuracy",
              text: "It seemed more accurate or reliable",
            },
            {
              value: "multiple_methods",
              text: "It offered multiple solutions",
            },
            {
              value: "practicality",
              text: "It was more practical for my needs",
            },
          ],
          showOtherItem: true,
          otherText: "Other (please specify)",
        },
      ],
    },
    {
      name: "page2",
      visibleIf: "{agreeToParticipate} = 'yes'",
      elements: [
        {
          type: "html",
          name: "compare2",
          html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta\n    name="viewport"\n    content="width=device-width, initial-scale=1.0, maximum-scale=1"\n  />\n  <title>How to implement a singleton in C#? - Stack Overflow</title>\n  <script src="https://cdn.tailwindcss.com"></script>\n  <link rel="preconnect" href="https://fonts.googleapis.com" />\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n  <link\n    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"\n    rel="stylesheet"\n  />\n  <style>\n    body {\n      font-family: "Inter", sans-serif;\n      background-color: #f1f2f3;\n    }\n\n    .tag {\n      display: inline-block;\n      background-color: #e1ecf4;\n      color: #39739d;\n      padding: 4px 8px;\n      margin: 2px;\n      font-size: 13px;\n      border: 1px solid #39739d;\n      border-radius: 3px;\n      font-family: Arial, sans-serif;\n      text-decoration: none;\n      white-space: nowrap;\n    }\n    .tag:hover {\n      background-color: #d0e3f1;\n      cursor: pointer;\n    }\n\n    .code-block {\n      background-color: #f8f9f9;\n      border: 1px solid #e3e6e8;\n      border-radius: 6px;\n      padding: 12px;\n      font-family: "Courier New", Courier, monospace;\n      overflow-x: auto;\n      white-space: pre;\n      word-wrap: normal;\n    }\n\n    .vote-control {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      color: #babfc4;\n      width: 48px;\n      flex-shrink: 0;\n    }\n    .vote-arrow {\n      cursor: pointer;\n      padding: 4px;\n    }\n    .vote-arrow:hover {\n      color: #83888d;\n    }\n    .vote-count {\n      font-size: 1.25rem;\n      color: #6a737c;\n      margin: 4px 0;\n    }\n\n    .question-section,\n    .answer-section {\n      display: flex;\n      align-items: flex-start;\n      gap: 20px;\n      margin-bottom: 24px;\n    }\n    .answer-section {\n      background-color: white;\n      padding: 20px;\n      border-radius: 8px;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n      margin-bottom: 32px;\n    }\n\n    /* Main content column flex behavior */\n    .content-col {\n      flex: 1 1 auto;\n      min-width: 0;\n    }\n\n    /* Wrap long words/links */\n    .content-col p,\n    .content-col h3,\n    .content-col h4,\n    .content-col div {\n      overflow-wrap: anywhere;\n      word-break: break-word;\n    }\n\n    .page-container {\n      max-width: 64rem;\n      width: 100%;\n    }\n  </style>\n</head>\n<body class="bg-gray-100">\n  <div class="page-container mx-auto p-4 md:p-6">\n    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center">\n      <h3 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">\n        How to implement a singleton in C#?\n      </h3>\n    </div>\n\n    <div class="border-b border-gray-300 pb-2 mb-6 text-sm text-gray-500">\n      <span>Asked <strong>5 years, 6 months ago</strong></span>\n      <span class="mx-2">|</span>\n      <span>Modified <strong>1 month ago</strong></span>\n      <span class="mx-2">|</span>\n      <span>Viewed <strong>1.2m times</strong></span>\n    </div>\n\n    <div class="question-section">\n      <div class="vote-control">\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n        <span class="vote-count">1567</span>\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n      </div>\n\n      <div class="content-col">\n        <p class="text-gray-800 text-base leading-relaxed">\n          How do I implement the singleton pattern in C#? I want to put my constants and some basic functions in it as I use those everywhere in my project. I want to have them \'Global\' and not need to manually bind them every object I create.\n        </p>\n        <br />\n        <div class="mt-4 flex flex-wrap gap-2">\n          <span class="tag">c#</span>\n          <span class="tag">.net</span>\n          <span class="tag">singleton</span>\n        </div>\n      </div>\n    </div>\n\n    <hr class="my-8 border-gray-300" />\n\n    <div class="flex justify-between items-center mb-6">\n      <h4 class="text-xl sm:text-2xl font-semibold text-gray-800">2 Answers</h4>\n    </div>\n\n    <div class="answer-section">\n      <div class="vote-control">\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n        <span class="vote-count">923</span>\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n      </div>\n\n      <div class="content-col">\n        <h4 class="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Answer A</h4>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">\n          If you are just storing some global values and have some methods that don\'t need state, you don\'t need singleton. Just make the class and its properties/methods static.\n        </p>\n        <pre class="code-block"><code>public static class GlobalSomething\n{\n   public static int NumberOfSomething { get; set; }\n\n   public static string MangleString( string someValue )\n   {\n   }\n}</code></pre>\n        <p class="text-gray-800 text-base leading-relaxed mt-4">\n          Singleton is most useful when you have a normal class with state, but you only want one of them. The links that others have provided should be useful in exploring the Singleton pattern.\n        </p>\n        <div class="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">\n          <p class="text-sm text-gray-600">Answered by <strong>Answer A</strong></p>\n        </div>\n      </div>\n    </div>\n\n    <div class="answer-section">\n      <div class="vote-control">\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n        <span class="vote-count">1876</span>\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n      </div>\n\n      <div class="content-col">\n        <h4 class="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Answer B</h4>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">\n          Here\'s a straightforward way to implement a singleton in C# for your constants and utility functions. Use a static class if you just need global access without instance management, but since you asked for a singleton, here’s the pattern:\n        </p>\n        <pre class="code-block"><code>public sealed class MySingleton\n{\n    private static readonly Lazy&lt;MySingleton&gt; instance = new Lazy&lt;MySingleton&gt;(() => new MySingleton());\n    \n    // Private constructor to prevent instantiation\n    private MySingleton() { }\n\n    // Public accessor for the singleton instance\n    public static MySingleton Instance => instance.Value;\n\n    // Your constants and methods\n    public const int MyConstant = 42;\n    public string SomeGlobalSetting { get; } = "Default";\n\n    public void DoSomethingUseful()\n    {\n        // Your logic here\n        Console.WriteLine("Doing stuff globally!");\n    }\n}</code></pre>\n        <p class="text-gray-800 text-base leading-relaxed mt-4">\n          Use it like this: <code>MySingleton.Instance.DoSomethingUseful()</code> or <code>MySingleton.Instance.MyConstant</code>. The <code>Lazy&lt;T&gt;</code> ensures thread-safe, lazy initialization without locking overhead. If you don’t need instance semantics, a static class might be simpler: <code>public static class Globals { public const int MyConstant = 42; }</code>. Avoid singletons if you’re worried about testability or tight coupling—dependency injection might be better for that. Pick what fits your project.\n        </p>\n        <div class="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">\n          <p class="text-sm text-gray-600">Answered by <strong>Answer B</strong></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n</html>\n',
        },
        {
          type: "radiogroup",
          name: "compare2_answerA_accuracy",
          title: "Answer A is accurate and technically sound.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare2_answerA_clarity",
          title: "Answer A is clear and easy to understand.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare2_answerA_relevance",
          title: "Answer A directly addresses the question.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare2_answerB_accuracy",
          title: "Answer B is accurate and technically sound.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare2_answerB_clarity",
          title: "Answer B is clear and easy to understand.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare2_answerB_relevance",
          title: "Answer B directly addresses the question.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "boolean",
          name: "compare2_accept",
          title: "Which answer would you accept?",
          isRequired: true,
          labelTrue: "B",
          labelFalse: "A",
        },
        {
          type: "checkbox",
          name: "compare2_accept_why",
          visibleIf: "{compare2_accept} notempty",
          title:
            "Why did you choose your preferred answer? (Select all that apply)",
          isRequired: true,
          choices: [
            {
              value: "brevity",
              text: "It was shorter and more concise",
            },
            {
              value: "completeness",
              text: "It provided more comprehensive information",
            },
            {
              value: "clarity",
              text: "It was clearer and easier to understand",
            },
            {
              value: "accuracy",
              text: "It seemed more accurate or reliable",
            },
            {
              value: "multiple_methods",
              text: "It offered multiple solutions",
            },
            {
              value: "practicality",
              text: "It was more practical for my needs",
            },
          ],
          showOtherItem: true,
          otherText: "Other (please specify)",
        },
      ],
    },
    {
      name: "page3",
      visibleIf: "{agreeToParticipate} = 'yes'",
      elements: [
        {
          type: "html",
          name: "compare3",
          html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta\n    name="viewport"\n    content="width=device-width, initial-scale=1.0, maximum-scale=1"\n  />\n  <title>Convert XML to JSON using xmltodict package - Stack Overflow</title>\n  <script src="https://cdn.tailwindcss.com"></script>\n  <link rel="preconnect" href="https://fonts.googleapis.com" />\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n  <link\n    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"\n    rel="stylesheet"\n  />\n  <style>\n    body {\n      font-family: "Inter", sans-serif;\n      background-color: #f1f2f3;\n    }\n    .tag {\n      display: inline-block;\n      background-color: #e1ecf4;\n      color: #39739d;\n      padding: 4px 8px;\n      margin: 2px;\n      font-size: 13px;\n      border: 1px solid #39739d;\n      border-radius: 3px;\n      font-family: Arial, sans-serif;\n      text-decoration: none;\n      white-space: nowrap;\n    }\n    .tag:hover {\n      background-color: #d0e3f1;\n      cursor: pointer;\n    }\n\n    .code-block {\n      background-color: #f8f9f9;\n      border: 1px solid #e3e6e8;\n      border-radius: 6px;\n      padding: 12px;\n      font-family: "Courier New", Courier, monospace;\n      overflow-x: auto;   /* scroll horizontally if needed */\n      white-space: pre;   /* preserve formatting */\n      word-wrap: normal;  /* don\'t wrap inside code */\n    }\n\n    .vote-control {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      color: #babfc4;\n      width: 48px;\n      flex-shrink: 0;\n    }\n    .vote-arrow { cursor: pointer; padding: 4px; }\n    .vote-arrow:hover { color: #83888d; }\n    .vote-count { font-size: 1.25rem; color: #6a737c; margin: 4px 0; }\n\n    .question-section,\n    .answer-section {\n      display: flex;\n      align-items: flex-start;\n      gap: 20px;\n      margin-bottom: 24px;\n    }\n    .answer-section {\n      background-color: white;\n      padding: 20px;\n      border-radius: 8px;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n      margin-bottom: 32px;\n    }\n\n    /* Main content column: allow shrinking/wrapping next to votes */\n    .content-col {\n      flex: 1 1 auto;\n      min-width: 0;\n    }\n\n    /* Wrap long words/links inside content */\n    .content-col p,\n    .content-col h3,\n    .content-col h4,\n    .content-col div {\n      overflow-wrap: anywhere;\n      word-break: break-word;\n    }\n\n    /* Keep page within viewport width */\n    .page-container {\n      max-width: 64rem; /* ~max-w-4xl */\n      width: 100%;\n    }\n  </style>\n</head>\n<body class="bg-gray-100">\n  <div class="page-container mx-auto p-4 md:p-6">\n    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center">\n      <h3 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">\n        Convert XML to JSON using xmltodict package\n      </h3>\n    </div>\n\n    <div class="border-b border-gray-300 pb-2 mb-6 text-sm text-gray-500">\n      <span>Asked <strong>3 months ago</strong></span>\n      <span class="mx-2">|</span>\n      <span>Modified <strong>1 day ago</strong></span>\n      <span class="mx-2">|</span>\n      <span>Viewed <strong>1.2k times</strong></span>\n    </div>\n\n    <div class="question-section">\n      <div class="vote-control">\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n        <span class="vote-count">42</span>\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n      </div>\n\n      <div class="content-col">\n        <p class="text-gray-800 text-base leading-relaxed">\n          I\'m trying to convert the below XML file to JSON using xmltodict package but getting Expat syntax error\n        </p>\n\n        <p class="text-gray-800 text-base leading-relaxed mt-4">\n          <strong>abc.xml:</strong>\n        </p>\n        <pre class="code-block"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;\n&lt;testsuites tests="1" failures="0" disabled="0" errors="0" time="0.213" timestamp="2025-06-22T17:35:10.404" name="AllTests"&gt;\n    &lt;testsuite name="qw" tests="4" failures="0" disabled="0" skipped="0" errors="0" time="0.213" timestamp="2025-06-22T17:35:10.404"&gt;\n        &lt;testcase name="er" file="" line="" status="run" result="PASSED" time="0.0" timestamp="2025-06-22T17:35:10.404" classname="qw" /&gt;\n    &lt;/testsuite&gt;\n&lt;/testsuites&gt;</code></pre>\n\n        <p class="text-gray-800 text-base leading-relaxed mt-4">\n          <strong>main.py:</strong>\n        </p>\n        <pre class="code-block"><code>import xmltodict, json\n\ndef main():\n    o = xmltodict.parse("abc.xml")\n    json.dumps(o)\n\nif __name__ == "__main__":\n    main()</code></pre>\n\n        <p class="text-gray-800 text-base leading-relaxed mt-4">\n          <strong>Error:</strong>\n        </p>\n        <pre class="code-block"><code>Traceback (most recent call last):\n  File "/home/harry/xml_to_json/main.py", line 9, in &lt;module&gt;\n    main()\n  File "/home/harry/xml_to_json/main.py", line 5, in main\n    o = xmltodict.parse("abc.xml")\n        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File "/home/harry/xml_to_json/.venv/lib/python3.12/site-packages/xmltodict.py", line 359, in parse\n    parser.Parse(xml_input, True)\nxml.parsers.expat.ExpatError: syntax error: line 1, column 0</code></pre>\n\n        <div class="mt-4 flex flex-wrap gap-2">\n          <span class="tag">python</span>\n          <span class="tag">xml</span>\n          <span class="tag">json</span>\n          <span class="tag">xmltodict</span>\n        </div>\n      </div>\n    </div>\n\n    <hr class="my-8 border-gray-300" />\n\n    <div class="flex justify-between items-center mb-6">\n      <h4 class="text-xl sm:text-2xl font-semibold text-gray-800">2 Answers</h4>\n    </div>\n\n    <div class="answer-section">\n      <div class="vote-control">\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n        <span class="vote-count">35</span>\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n      </div>\n\n      <div class="content-col">\n        <h4 class="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Answer A</h4>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">\n          You are passing path to the file ("abc.xml"), instead of actual content of the file, to the <code>xmltodict.parse</code> method. You need first to read the file:\n        </p>\n        <pre class="code-block"><code>with open("abc.xml", "r", encoding="UTF-8") as xml_file:\n    xml_content = xml_file.read()</code></pre>\n        <p class="text-gray-800 text-base leading-relaxed mt-4">\n          then parse:\n        </p>\n        <pre class="code-block"><code>o = xmltodict.parse(xml_content)</code></pre>\n        <div class="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">\n          <p class="text-sm text-gray-600">Answered by <strong>Answer A</strong></p>\n        </div>\n      </div>\n    </div>\n\n    <div class="answer-section">\n      <div class="vote-control">\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n        <span class="vote-count">58</span>\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n      </div>\n\n      <div class="content-col">\n        <h4 class="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Answer B</h4>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">\n          The error occurs because <code>xmltodict.parse()</code> expects either an XML string or a file-like object, but you\'re passing a filename ("abc.xml") directly. To fix this, you need to read the XML file content first. Here\'s the corrected code:\n        </p>\n        <pre class="code-block"><code>import xmltodict\nimport json\n\ndef main():\n    # Read the XML file content\n    with open("abc.xml", "r") as file:\n        xml_content = file.read()\n    \n    # Parse XML to dict\n    o = xmltodict.parse(xml_content)\n    \n    # Convert dict to JSON\n    json_output = json.dumps(o, indent=2)\n    \n    # Print or save the JSON output\n    print(json_output)\n    \n    # Optionally, save to a file\n    with open("output.json", "w") as json_file:\n        json_file.write(json_output)\n\nif __name__ == "__main__":\n    main()</code></pre>\n        <div class="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">\n          <p class="text-sm text-gray-600">Answered by <strong>Answer B</strong></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n</html>\n',
        },
        {
          type: "radiogroup",
          name: "compare3_answerA_accuracy",
          title: "Answer A is accurate and technically sound.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare3_answerA_clarity",
          title: "Answer A is clear and easy to understand.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare3_answerA_relevance",
          title: "Answer A directly addresses the question.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare3_answerB_accuracy",
          title: "Answer B is accurate and technically sound.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare3_answerB_clarity",
          title: "Answer B is clear and easy to understand.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare3_answerB_relevance",
          title: "Answer B directly addresses the question.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "boolean",
          name: "compare3_accept",
          title: "Which answer would you accept?",
          isRequired: true,
          labelTrue: "B",
          labelFalse: "A",
        },
        {
          type: "checkbox",
          name: "compare3_accept_why",
          visibleIf: "{compare3_accept} notempty",
          title:
            "Why did you choose your preferred answer? (Select all that apply)",
          isRequired: true,
          choices: [
            {
              value: "brevity",
              text: "It was shorter and more concise",
            },
            {
              value: "completeness",
              text: "It provided more comprehensive information",
            },
            {
              value: "clarity",
              text: "It was clearer and easier to understand",
            },
            {
              value: "accuracy",
              text: "It seemed more accurate or reliable",
            },
            {
              value: "multiple_methods",
              text: "It offered multiple solutions",
            },
            {
              value: "practicality",
              text: "It was more practical for my needs",
            },
          ],
          showOtherItem: true,
          otherText: "Other (please specify)",
        },
      ],
    },
    {
      name: "page4",
      visibleIf: "{agreeToParticipate} = 'yes'",
      elements: [
        {
          type: "html",
          name: "compare4",
          html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta\n    name="viewport"\n    content="width=device-width, initial-scale=1.0, maximum-scale=1"\n  />\n  <title>Can we do an assignment operation in the true/false part of IIF in VB.net? - Stack Overflow</title>\n  <script src="https://cdn.tailwindcss.com"></script>\n  <link rel="preconnect" href="https://fonts.googleapis.com" />\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n  <link\n    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"\n    rel="stylesheet"\n  />\n  <style>\n    body { font-family: "Inter", sans-serif; background-color: #f1f2f3; }\n\n    .tag {\n      display: inline-block;\n      background-color: #e1ecf4;\n      color: #39739d;\n      padding: 4px 8px;\n      margin: 2px;\n      font-size: 13px;\n      border: 1px solid #39739d;\n      border-radius: 3px;\n      font-family: Arial, sans-serif;\n      text-decoration: none;\n      white-space: nowrap;\n    }\n    .tag:hover { background-color: #d0e3f1; cursor: pointer; }\n\n    .code-block {\n      background-color: #f8f9f9;\n      border: 1px solid #e3e6e8;\n      border-radius: 6px;\n      padding: 12px;\n      font-family: "Courier New", Courier, monospace;\n      overflow-x: auto;   /* prevent layout blowout */\n      white-space: pre;   /* preserve formatting */\n      word-wrap: normal;  /* no wrapping inside code */\n    }\n\n    .vote-control {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      color: #babfc4;\n      width: 48px;\n      flex-shrink: 0;\n    }\n    .vote-arrow { cursor: pointer; padding: 4px; }\n    .vote-arrow:hover { color: #83888d; }\n    .vote-count { font-size: 1.25rem; color: #6a737c; margin: 4px 0; }\n\n    .question-section, .answer-section {\n      display: flex;\n      align-items: flex-start;\n      gap: 20px;\n      margin-bottom: 24px;\n    }\n    .answer-section {\n      background-color: white;\n      padding: 20px;\n      border-radius: 8px;\n      box-shadow: 0 2px 4px rgba(0,0,0,0.05);\n      margin-bottom: 32px;\n    }\n\n    /* Main content column that can shrink next to votes */\n    .content-col { flex: 1 1 auto; min-width: 0; }\n\n    /* Wrap long words/links in content to avoid overflow */\n    .content-col p, .content-col h3, .content-col h4, .content-col div {\n      overflow-wrap: anywhere;\n      word-break: break-word;\n    }\n\n    /* Page container cap */\n    .page-container { max-width: 64rem; width: 100%; }\n  </style>\n</head>\n<body class="bg-gray-100">\n  <div class="page-container mx-auto p-4 md:p-6">\n    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center">\n      <h3 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">\n        Can we do an assignment operation in the true/false part of IIF in VB.net?\n      </h3>\n    </div>\n\n    <div class="border-b border-gray-300 pb-2 mb-6 text-sm text-gray-500">\n      <span>Asked <strong>1 years, 1 months ago</strong></span>\n      <span class="mx-2">|</span>\n      <span>Modified <strong>3 days ago</strong></span>\n      <span class="mx-2">|</span>\n      <span>Viewed <strong>1.2k times</strong></span>\n    </div>\n\n    <div class="question-section">\n      <div class="vote-control">\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n        <span class="vote-count">127</span>\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n      </div>\n\n      <div class="content-col">\n        <p class="text-gray-800 text-base leading-relaxed">\n          Can we do an assignment operation in either true or false parts of the IIF function of VB.net?\n        </p>\n<pre class="code-block"><code>Public Sub Main(args() As String)\n    Dim score As Integer = 0\n    Dim scoreString As String = ""\n    \n    IIf(score = 0, (score = score + 1), (score = score + 2))\n    \n    scoreString = score.ToString()\n    \n    Console.WriteLine("ScoreString : " + scoreString)\nEnd Sub</code></pre>\n        <div class="mt-4 flex flex-wrap gap-2">\n          <span class="tag">vb.net</span>\n          <span class="tag">iif</span>\n        </div>\n      </div>\n    </div>\n\n    <hr class="my-8 border-gray-300" />\n\n    <div class="flex justify-between items-center mb-6">\n      <h4 class="text-xl sm:text-2xl font-semibold text-gray-800">2 Answers</h4>\n    </div>\n\n    <div class="answer-section">\n      <div class="vote-control">\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n        <span class="vote-count">89</span>\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n      </div>\n\n      <div class="content-col">\n        <h4 class="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Answer A</h4>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">\n          <code>IIf</code> returns a value, either the true or the false condition. So this is what you actually need:\n        </p>\n<pre class="code-block"><code>score = IIf(score = 0, score + 1, score + 2)</code></pre>\n        <div class="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">\n          <p class="text-sm text-gray-600">Answered by <strong>Answer A</strong></p>\n        </div>\n      </div>\n    </div>\n\n    <div class="answer-section">\n      <div class="vote-control">\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n        <span class="vote-count">142</span>\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n      </div>\n\n      <div class="content-col">\n        <h4 class="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Answer B</h4>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">\n          In VB.NET, the IIf function cannot directly perform assignment operations within its true or false parts because IIf is a function that evaluates and returns a value, not a statement that can execute assignments. The syntax you provided attempts to perform assignments (score = score + 1) and (score = score + 2) inside the IIf function, which is invalid and will result in a compilation error.\n        </p>\n        <p class="text-base font-bold mt-6 mb-2 text-gray-800">Explanation</p>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">\n          The IIf function in VB.NET has the syntax: <code>IIf(condition, truePart, falsePart)</code>. It evaluates the condition and returns either the truePart or falsePart value. It does not execute statements like assignments. Assignments (e.g., <code>score = score + 1</code>) are statements, not expressions that produce a value, so they cannot be used directly in IIf. To achieve the desired effect, you need to perform the assignment outside the IIf function or use a regular If statement.\n        </p>\n        <p class="text-base font-bold mt-6 mb-2 text-gray-800">Corrected Code</p>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">Here are two ways to achieve what you want:</p>\n        <p class="text-base font-bold mt-6 mb-2 text-gray-800">Option 1: Using a Regular If Statement</p>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">This is the most straightforward approach, as it allows assignments within the If block:</p>\n<pre class="code-block"><code>Public Sub Main(args() As String)\n    Dim score As Integer = 0\n    Dim scoreString As String = ""\n\n    If score = 0 Then\n        score = score + 1\n    Else\n        score = score + 2\n    End If\n\n    scoreString = score.ToString()\n    Console.WriteLine("ScoreString : " + scoreString)\nEnd Sub</code></pre>\n        <p class="text-gray-800 text-base leading-relaxed mt-4">Output: <code>ScoreString : 1</code></p>\n\n        <p class="text-base font-bold mt-6 mb-2 text-gray-800">Option 2: Using IIf to Return a Value</p>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">If you want to use IIf, you can compute the value to assign to score and perform the assignment outside the IIf:</p>\n<pre class="code-block"><code>Public Sub Main(args() As String)\n    Dim score As Integer = 0\n    Dim scoreString As String = ""\n\n    score = IIf(score = 0, score + 1, score + 2)\n    scoreString = score.ToString()\n    Console.WriteLine("ScoreString : " + scoreString)\nEnd Sub</code></pre>\n        <p class="text-gray-800 text-base leading-relaxed mt-4">Output: <code>ScoreString : 1</code></p>\n\n        <div class="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">\n          <p class="text-sm text-gray-600">Answered by <strong>Answer B</strong></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n</html>\n',
        },
        {
          type: "radiogroup",
          name: "compare4_answerA_accuracy",
          title: "Answer A is accurate and technically sound.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare4_answerA_clarity",
          title: "Answer A is clear and easy to understand.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare4_answerA_relevance",
          title: "Answer A directly addresses the question.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare4_answerB_accuracy",
          title: "Answer B is accurate and technically sound.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare4_answerB_clarity",
          title: "Answer B is clear and easy to understand.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare4_answerB_relevance",
          title: "Answer B directly addresses the question.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "boolean",
          name: "compare4_accept",
          title: "Which answer would you accept?",
          isRequired: true,
          labelTrue: "B",
          labelFalse: "A",
        },
        {
          type: "checkbox",
          name: "compare4_accept_why",
          visibleIf: "{compare4_accept} notempty",
          title:
            "Why did you choose your preferred answer? (Select all that apply)",
          isRequired: true,
          choices: [
            {
              value: "brevity",
              text: "It was shorter and more concise",
            },
            {
              value: "completeness",
              text: "It provided more comprehensive information",
            },
            {
              value: "clarity",
              text: "It was clearer and easier to understand",
            },
            {
              value: "accuracy",
              text: "It seemed more accurate or reliable",
            },
            {
              value: "multiple_methods",
              text: "It offered multiple solutions",
            },
            {
              value: "practicality",
              text: "It was more practical for my needs",
            },
          ],
          showOtherItem: true,
          otherText: "Other (please specify)",
        },
      ],
    },
    {
      name: "page5",
      visibleIf: "{agreeToParticipate} = 'yes'",
      elements: [
        {
          type: "html",
          name: "compare5",
          html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta\n    name="viewport"\n    content="width=device-width, initial-scale=1.0, maximum-scale=1"\n  />\n  <title>Missing file when installing a github repo with pip - Stack Overflow</title>\n  <script src="https://cdn.tailwindcss.com"></script>\n  <link rel="preconnect" href="https://fonts.googleapis.com" />\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n  <link\n    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"\n    rel="stylesheet"\n  />\n  <style>\n    body { font-family: "Inter", sans-serif; background-color: #f1f2f3; }\n\n    .tag {\n      display: inline-block;\n      background-color: #e1ecf4;\n      color: #39739d;\n      padding: 4px 8px;\n      margin: 2px;\n      font-size: 13px;\n      border: 1px solid #39739d;\n      border-radius: 3px;\n      font-family: Arial, sans-serif;\n      text-decoration: none;\n      white-space: nowrap;\n    }\n    .tag:hover { background-color: #d0e3f1; cursor: pointer; }\n\n    .code-block {\n      background-color: #f8f9f9;\n      border: 1px solid #e3e6e8;\n      border-radius: 6px;\n      padding: 12px;\n      font-family: "Courier New", Courier, monospace;\n      overflow-x: auto;   /* prevent layout blowout */\n      white-space: pre;   /* preserve formatting */\n      word-wrap: normal;  /* no wrapping inside code */\n    }\n\n    .vote-control {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      color: #babfc4;\n      width: 48px;\n      flex-shrink: 0;\n    }\n    .vote-arrow { cursor: pointer; padding: 4px; }\n    .vote-arrow:hover { color: #83888d; }\n    .vote-count { font-size: 1.25rem; color: #6a737c; margin: 4px 0; }\n\n    .question-section, .answer-section {\n      display: flex;\n      align-items: flex-start;\n      gap: 20px;\n      margin-bottom: 24px;\n    }\n    .answer-section {\n      background-color: white;\n      padding: 20px;\n      border-radius: 8px;\n      box-shadow: 0 2px 4px rgba(0,0,0,0.05);\n      margin-bottom: 32px;\n    }\n\n    /* Main content column that can shrink next to votes */\n    .content-col { flex: 1 1 auto; min-width: 0; }\n\n    /* Wrap long words/links in content to avoid overflow */\n    .content-col p, .content-col h3, .content-col h4, .content-col div {\n      overflow-wrap: anywhere;\n      word-break: break-word;\n    }\n\n    /* Page container cap */\n    .page-container { max-width: 64rem; width: 100%; }\n  </style>\n</head>\n<body class="bg-gray-100">\n\n  <div class="page-container mx-auto p-4 md:p-6">\n\n    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center">\n      <h3 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">\n        Missing file when installing a github repo with pip\n      </h3>\n    </div>\n\n    <div class="border-b border-gray-300 pb-2 mb-6 text-sm text-gray-500">\n      <span>Asked <strong>2 years, 5 months ago</strong></span>\n      <span class="mx-2">|</span>\n      <span>Modified <strong>1 month ago</strong></span>\n      <span class="mx-2">|</span>\n      <span>Viewed <strong>1.2k times</strong></span>\n    </div>\n\n    <div class="question-section">\n      <div class="vote-control">\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n        <span class="vote-count">127</span>\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n      </div>\n\n      <div class="content-col">\n        <p class="text-gray-800 text-base leading-relaxed">\n          I tried to install <a class="underline text-blue-700" href="https://github.com/facebookresearch/perception_models">https://github.com/facebookresearch/perception_models</a> by\n        </p>\n        <pre class="code-block"><code>pip install git+https://github.com/facebookresearch/perception_models.git</code></pre>\n        <p class="text-gray-800 text-base leading-relaxed">\n          Expectation was that it would basically clone the repository as a package, but after running my code I found that one of the files (<code>core/vision_encoder/bpe_simple_vocab_16e6.txt.gz</code>) was missing. It worked after I manually copied it into the installed package, but this does not feel like the proper way.\n        </p>\n        <p class="text-gray-800 text-base leading-relaxed">\n          README.md suggests using <code>git clone</code> - is this the only way? I prefer not to clutter my repository with external modules that won\'t be modified.\n        </p>\n        <div class="mt-4 flex flex-wrap gap-2">\n          <span class="tag">python</span>\n          <span class="tag">git</span>\n          <span class="tag">pip</span>\n        </div>\n      </div>\n    </div>\n\n    <hr class="my-8 border-gray-300" />\n\n    <div class="flex justify-between items-center mb-6">\n      <h4 class="text-xl sm:text-2xl font-semibold text-gray-800">2 Answers</h4>\n    </div>\n\n    <div class="answer-section">\n      <div class="vote-control">\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n        <span class="vote-count">89</span>\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n      </div>\n\n      <div class="content-col">\n        <h4 class="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Answer A</h4>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">\n          You’re right - <code>pip install git+...</code> doesn’t include large files like <code>bpe_simple_vocab_16e6.txt.gz</code> because it doesn’t fetch LFS-stored files or certain extra assets. The method is to:\n        </p>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">Clone the repository, then install it in editable mode using:</p>\n        <pre class="code-block"><code>git clone https://github.com/facebookresearch/perception_models.git\ncd perception_models\npip install -e .</code></pre>\n        <p class="text-gray-800 text-base leading-relaxed mt-4">\n          Using <code>pip install git+....</code> won’t include those files - so cloning is the proper approach unless they update the packaging.\n        </p>\n        <div class="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">\n          <p class="text-sm text-gray-600">Answered by <strong>Answer A</strong></p>\n        </div>\n      </div>\n    </div>\n\n    <div class="answer-section">\n      <div class="vote-control">\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n        <span class="vote-count">156</span>\n        <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n      </div>\n\n      <div class="content-col">\n        <h4 class="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Answer B</h4>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">\n          The issue likely stems from the repository\'s setup not including all necessary files in the Python package distribution when installed via <code>pip</code>. The <code>bpe_simple_vocab_16e6.txt.gz</code> file is present in the GitHub repository but may not be included in the package\'s <code>MANIFEST.in</code> or properly referenced in the <code>setup.py</code>/<code>pyproject.toml</code>, causing it to be omitted during <code>pip install</code>.\n        </p>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">\n          Using <code>git clone</code> is the recommended approach per the README, as it ensures all files, including non-Python assets like <code>bpe_simple_vocab_16e6.txt.gz</code>, are downloaded. This is likely the most reliable way to get the full repository content.\n        </p>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">To avoid cluttering your repository while still using <code>git clone</code>, you can:</p>\n        <ol class="list-decimal pl-6 mb-4">\n          <li>Clone the repository to a separate directory outside your project.</li>\n          <li>Reference the cloned directory in your <code>PYTHONPATH</code> or install it in editable mode with <code>pip install -e /path/to/cloned/repo</code>.</li>\n        </ol>\n        <p class="text-gray-800 text-base leading-relaxed mb-4">\n          Alternatively, you can use <code>pip install git+https://github.com/facebookresearch/perception_models.git</code> and manually copy the missing file, as you did, but this is not ideal for reproducibility. Another option is to fork the repository, fix the packaging issue (e.g., update <code>MANIFEST.in</code> to include the file), and install from your fork.\n        </p>\n        <div class="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">\n          <p class="text-sm text-gray-600">Answered by <strong>Answer B</strong></p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</body>\n</html>\n',
        },
        {
          type: "radiogroup",
          name: "compare5_answerA_accuracy",
          title: "Answer A is accurate and technically sound.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare5_answerA_clarity",
          title: "Answer A is clear and easy to understand.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare5_answerA_relevance",
          title: "Answer A directly addresses the question.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare5_answerB_accuracy",
          title: "Answer B is accurate and technically sound.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare5_answerB_clarity",
          title: "Answer B is clear and easy to understand.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "compare5_answerB_relevance",
          title: "Answer B directly addresses the question.",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "1 - Strongly Disagree",
            },
            {
              value: "2",
              text: "2 - Disagree",
            },
            {
              value: "3",
              text: "3 - Neutral",
            },
            {
              value: "4",
              text: "4 - Agree",
            },
            {
              value: "5",
              text: "5 - Strongly Agree",
            },
          ],
        },
        {
          type: "boolean",
          name: "compare5_accept",
          title: "Which answer would you accept?",
          isRequired: true,
          labelTrue: "B",
          labelFalse: "A",
        },
        {
          type: "checkbox",
          name: "compare5_accept_why",
          visibleIf: "{compare5_accept} notempty",
          title:
            "Why did you choose your preferred answer? (Select all that apply)",
          isRequired: true,
          choices: [
            {
              value: "brevity",
              text: "It was shorter and more concise",
            },
            {
              value: "completeness",
              text: "It provided more comprehensive information",
            },
            {
              value: "clarity",
              text: "It was clearer and easier to understand",
            },
            {
              value: "accuracy",
              text: "It seemed more accurate or reliable",
            },
            {
              value: "multiple_methods",
              text: "It offered multiple solutions",
            },
            {
              value: "practicality",
              text: "It was more practical for my needs",
            },
          ],
          showOtherItem: true,
          otherText: "Other (please specify)",
        },
      ],
    },
  ],
};
