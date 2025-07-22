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
      title: "Evaluating Coding Responses\r\n",
      elements: [
        {
          type: "html",
          name: "question6",
          html: '<div>  \n  <section style="margin-bottom: 1.5rem;">\n    <h2 style="font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.75rem;">What You’ll Be Doing</h2>\n    <p style="color: #4b5563; line-height: 1.5;">\n      In the next section, you will evaluate a sample programming question styled like those on Stack Overflow. The question will have two responses, labeled <strong>Answer A</strong> and <strong>Answer B</strong>. Your task is to compare these responses based on specific criteria to help us understand your preferences for coding assistance tools.\n    </p>\n  </section>\n\n  <section style="margin-bottom: 1.5rem;">\n    <h2 style="font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.75rem;">How to Approach the Questions</h2>\n    <ul style="list-style: disc; padding-left: 1.5rem; color: #4b5563; line-height: 1.5; margin-bottom: 0.5rem;">\n      <li><strong>Read Carefully</strong>: Review the sample question and both Answer A and Answer B thoroughly to understand the context and content.</li>\n      <li><strong>Evaluate Using the Likert Scale</strong>: Rate each answer on a scale from 1 (Strongly Disagree) to 5 (Strongly Agree) for criteria such as:\n        <ul style="list-style: circle; padding-left: 1.5rem; margin-top: 0.25rem;">\n          <li><strong>Accuracy</strong>: Is the response correct and technically sound?</li>\n          <li><strong>Clarity</strong>: Is the response easy to understand and well-explained?</li>\n          <li><strong>Relevance</strong>: Does the response directly address the question asked?</li>\n        </ul>\n      </li>\n      <li><strong>Provide Honest Feedback</strong>: Rate each answer based on your experience and perception, considering how useful it would be in a real coding scenario.</li>\n    </ul>\n  </section>\n\n  <section style="margin-bottom: 1.5rem;">\n    <h2 style="font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.75rem;">Example of a Likert Scale Question</h2>\n    <p style="color: #4b5563; line-height: 1.5; margin-bottom: 0.5rem;">\n      For the statement “Answer A is accurate,” you will select one option:\n    </p>\n    <div style="background-color: #f9fafb; padding: 1rem; border-radius: 0.375rem;">\n      <p style="color: #4b5563;">\n        <strong>1</strong>: Strongly Disagree | <strong>2</strong>: Disagree | <strong>3</strong>: Neutral | <strong>4</strong>: Agree | <strong>5</strong>: Strongly Agree\n      </p>\n    </div>\n  </section>\n\n  <section style="margin-bottom: 1.5rem;">\n    <h2 style="font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.75rem;">Important Note</h2>\n    <p style="color: #4b5563; line-height: 1.5;">\n     To ensure an unbiased evaluation, the source of each answer (whether from an AI tool like Grok or a community platform like Stack Overflow) is not disclosed, and the assignment of Answer A and Answer B to these sources is randomized. The Stack Overflow-like appearance of the question is designed to enhance comprehension and mimic a familiar Q&A format. Vote counts displayed (e.g., scores for the question and answers) are randomly generated and do not reflect actual Stack Overflow data. <b>Please focus on the content of the responses when making your judgments.</b>\n\n\n    </p>\n  </section>\n</div>',
        },
      ],
    },
    {
      name: "page1",
      elements: [
        {
          type: "html",
          name: "question2",
          html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>How do I reverse a string in Python? - Stack Overflow</title>\n    <script src="https://cdn.tailwindcss.com"></script>\n    <link rel="preconnect" href="https://fonts.googleapis.com">\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">\n    <style>\n        body {\n            font-family: \'Inter\', sans-serif;\n            background-color: #F1F2F3;\n        }\n.tag {\n      display: inline-block;\n      background-color: #e1ecf4;\n      color: #39739d;\n      padding: 4px 8px;\n      margin: 2px;\n      font-size: 13px;\n      border: 1px solid #39739d;\n      border-radius: 3px;\n      font-family: Arial, sans-serif;\n      text-decoration: none;\n    }\n\n    .tag:hover {\n      background-color: #d0e3f1;\n      cursor: pointer;\n    }\n        .code-block {\n            background-color: #F8F9F9;\n            border: 1px solid #E3E6E8;\n            border-radius: 6px;\n            padding: 12px;\n            font-family: \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', \'Courier New\', monospace;\n            font-size: 14px;\n            line-height: 1.4;\n            white-space: pre-wrap;\n            word-wrap: break-word;\n        }\n        /* Base vote-control styling */\n        .vote-control {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            color: #BABFC4;\n            width: 48px;\n            flex-shrink: 0;\n        }\n        .vote-arrow {\n            cursor: pointer;\n            padding: 4px;\n        }\n        .vote-arrow:hover {\n            color: #83888D;\n        }\n        .vote-count {\n            font-size: 1.25rem;\n            color: #6A737C;\n            margin: 4px 0;\n        }\n\n        /* --- STYLES FOR LAYOUT --- */\n\n        .question-section, .answer-section {\n            display: flex;\n            align-items: flex-start;\n            gap: 20px;\n            margin-bottom: 24px;\n        }\n        \n        .answer-section {\n            background-color: white;\n            padding: 20px;\n            border-radius: 8px;\n            box-shadow: 0 2px 4px rgba(0,0,0,0.05);\n            margin-bottom: 32px;\n        }\n        \n        /* The following override rules have been removed as they forced a horizontal layout.\n           The base .vote-control class now correctly applies to all sections,\n           ensuring a consistent vertical alignment for the scores. */\n        \n        .question-section > div.w-full,\n        .answer-section > div.w-full {\n            flex-grow: 1;\n        }\n    </style>\n</head>\n<body class="bg-gray-100">\n\n    <div class="container mx-auto p-4 md:p-6 max-w-4xl">\n\n        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center">\n            <h3 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">How do I reverse a string in Python?</h3>\n        </div>\n\n        <div class="border-b border-gray-300 pb-2 mb-6 text-sm text-gray-500">\n            <span>Asked <strong>12 years, 3 months ago</strong></span>\n            <span class="mx-2">|</span>\n            <span>Modified <strong>2 days ago</strong></span>\n            <span class="mx-2">|</span>\n            <span>Viewed <strong>8.7m times</strong></span>\n        </div>\n\n        <div class="question-section">\n            <div class="vote-control">\n                <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n                <span class="vote-count">3824</span>\n                <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n            </div>\n\n            <div class="w-full">\n                <p class="text-gray-800 text-base leading-relaxed">\n                    There is no built-in <code>reverse</code> method for Python\'s <code>str</code> object. How can I reverse a string?\n                </p><br>\n                <div class="mt-4 flex flex-wrap gap-2">\n                      <span class="tag">python</span>\n  <span class="tag">string</span>\n                </div>\n            </div>\n        </div>\n\n        <hr class="my-8 border-gray-300">\n\n        <div class="flex justify-between items-center mb-6">\n            <h4 class="text-xl sm:text-2xl font-semibold text-gray-800">2 Answers</h4>\n        </div>\n\n        <div class="answer-section">\n            <div class="vote-control">\n                <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n                <span class="vote-count">2456</span>\n                <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n            </div>\n\n            <div class="w-full">\n                <h4 class="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Answer A</h4>\n                <p class="text-gray-800 text-base leading-relaxed mb-4">\n                    Using slicing:\n                </p>\n                <pre class="code-block"><code>>>> \'hello world\'[::-1]\n\'dlrow olleh\'</code></pre>\n                <p class="text-gray-800 text-base leading-relaxed mt-4">\n                    Slice notation takes the form <code>[start:stop:step]</code>. In this case, we omit the <code>start</code> and <code>stop</code> positions since we want the whole string. We also use <code>step = -1</code>, which means, "repeatedly step from right to left by 1 character".\n                </p>\n                <div class="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">\n                    <p class="text-sm text-gray-600">Answered by <strong>Answer A</strong></p>\n                </div>\n            </div>\n        </div>\n\n        <div class="answer-section">\n            <div class="vote-control">\n                <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>\n                <span class="vote-count">7893</span>\n                <svg class="vote-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\n            </div>\n\n            <div class="w-full">\n                <h4 class="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Answer B</h4>\n                <p class="text-gray-800 text-base leading-relaxed mb-4">\n                    Here are the most common ways to reverse a string in Python, since there\'s no built-in reverse method for strings:\n                </p>\n                <p class="text-base font-bold mt-6 mb-2 text-gray-800"><b>Using String Slicing (Most Concise):</b></p>\n                <pre class="code-block"><code>text = "hello"\nreversed_text = text[::-1]  # Output: "olleh"</code></pre>\n                <p class="text-gray-800 text-base leading-relaxed mt-4">\n                    The slice <code>[::-1]</code> uses the format <code>[start:stop:step]</code>, where a step of -1 reverses the string.\n                </p>\n                <p class="text-base font-bold mt-6 mb-2 text-gray-800"><b>Using a Loop (Explicit Approach):</b></p>\n                <pre class="code-block"><code>text = "hello"\nreversed_text = ""\nfor char in text:\n    reversed_text = char + reversed_text\n# Output: "olleh"</code></pre>\n                <p class="text-gray-800 text-base leading-relaxed mt-4">\n                    Iterates through each character and builds a new string by prepending each character.\n                </p>\n                <p class="text-base font-bold mt-6 mb-2 text-gray-800"><b>Using <code>join</code> and <code>reversed</code> (Readable):</b></p>\n                <pre class="code-block"><code>text = "hello"\nreversed_text = "".join(reversed(text))  # Output: "olleh"</code></pre>\n                <p class="text-gray-800 text-base leading-relaxed mt-4">\n                    <code>reversed(text)</code> returns an iterator of characters in reverse order, and <code>join</code> combines them into a string.\n                </p>\n                <p class="text-gray-800 text-base leading-relaxed mt-6">\n                    The slicing method (<code>text[::-1]</code>) is the most Pythonic and efficient for most cases. Use the loop method if you need to perform additional operations during reversal or for educational purposes. The <code>join</code> and <code>reversed</code> approach is clear and readable but slightly less performant.\n                </p>\n                <div class="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">\n                    <p class="text-sm text-gray-600">Answered by <strong>Answer B</strong></p>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</body>\n</html>',
        },
        {
          type: "radiogroup",
          name: "answerA_accuracy",
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
          name: "answerA_clarity",
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
          name: "answerA_relevance",
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
          name: "answerB_accuracy",
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
          name: "answerB_clarity",
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
          name: "answerB_relevance",
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
          name: "question3",
          title: "Which answer would you accept?",
          isRequired: true,
          labelTrue: "B",
          labelFalse: "A",
        },
        {
          type: "checkbox",
          name: "preference_reason",
          visibleIf: "{question3} notempty",
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
