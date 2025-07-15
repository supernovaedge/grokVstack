export const json = {
  title:
    "Developer Preferences in AI vs. Community Q&A: Comparing Grok and Stack Overflow Responses",
  description:
    "All responses are anonymous and used solely for academic research.",
  completedHtml:
    "<h3>Thank you for your time!</h3><p>We appreciate you considering our survey. If you chose not to participate, your responses have not been recorded.</p>",
  pages: [
    {
      name: "page_agreement",
      description:
        "Purpose of the Study: This survey is part of a research study comparing developer preferences between AI coding assistants (like Grok) and community Q&A platforms (like Stack Overflow). Your responses will help us understand how developers choose between these tools and what factors influence their preferences.\n\nAnonymity and Confidentiality: Your responses will be anonymous, and no personally identifiable information will be collected. The data will be used solely for academic research.\n\nVoluntary Participation: Participation is voluntary, and you can withdraw at any time. There are no penalties for not participating.",
      elements: [
        {
          type: "radiogroup",
          name: "agreeToParticipate",
          title: "Do you agree to participate in this survey?",
          isRequired: true,
          choices: [
            {
              value: "yes",
              text: "Yes, I agree",
            },
            {
              value: "no",
              text: "No, I do not agree",
            },
          ],
        },
      ],
    },
    {
      name: "page_survey_content",
      visibleIf: "{agreeToParticipate} = 'yes'",
      elements: [
        {
          type: "rating",
          name: "yourFirstQuestion",
          title: "Please enter some text here (example question):",
          isRequired: true,
        },
      ],
    },
    {
      name: "page1",
      visibleIf: "{agreeToParticipate} = 'yes'",
      elements: [
        {
          type: "rating",
          name: "question1",
          title: "Please enter some text here (example question):",
          isRequired: true,
        },
      ],
    },
    {
      name: "page2",
      visibleIf: "{agreeToParticipate} = 'yes'",
      elements: [
        {
          type: "rating",
          name: "question2",
          title: "Please enter some text here (example question):",
          isRequired: true,
        },
      ],
    },
  ],
};
