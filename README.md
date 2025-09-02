#grokVstack
This repository supports the master’s thesis, “Developer Preferences in AI vs. Community Q&A: Comparing Grok and Stack Overflow Responses,” by providing survey code, raw data, and visuals.
Repository Structure

Master Branch: Contains json.js, the SurveyJS JSON configuration for the survey (consent, demographics, tool usage, scenario-based preferences, coding response evaluations). Load in a SurveyJS environment to run the survey.
Main Branch:

4.1 Demographic Characteristics: Excel file (survey_responses.xlsx) with raw data and statistics (e.g., roles, experience) and PNGs for charts (e.g., Figure 4.1).
4.2 Tool Usage Patterns and Adoption: Excel file with data on Stack Overflow/AI tool usage and PNGs for charts.
4.3 Scenario-Based Preferences: Excel file with preferences for AI vs. Stack Overflow across five scenarios and PNGs for charts.
4.4 Evaluation of Coding Responses: Excel file with Likert-scale ratings and preferences for five scenarios and PNGs for charts.
Scenario Based Questions: Five subfolders (compare1–compare5), each with:

question.png: Scenario question (e.g., Python string reversal for compare1).
answerA.png and answerB.png: Answer A and B visuals.





Data Interpretation

Excel Files: Contain anonymized responses (50 respondents), means, standard deviations, p-values, and Spearman correlations. Variable names (e.g., compare1_answerA_accuracy) map to survey questions (1 = Strongly Disagree, 5 = Strongly Agree).
PNGs: Visualize charts (e.g., bar charts, heatmaps) and scenario questions/answers referenced in Chapter 4.
Ethical Note: All data are anonymized, with no personally identifiable information, per the thesis’s ethical guidelines.

Access

Survey code: Master branch (json.js).
Data and visuals: Main branch (chapter folders, Scenario Based Questions).

For details, see Appendix C of the thesis.
