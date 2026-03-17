# QuickFire Database Schema

## students

* studentId
* name
* department
* totalScore
* streak
* badges
* weakTopics

Example:
{
"studentId": "STU001",
"name": "Demo Student",
"department": "CSE",
"totalScore": 0,
"streak": 0,
"badges": [],
"weakTopics": []
}

## questions

* questionId
* question
* options
* answer
* explanation
* topic
* difficulty
* createdAt

Example:
{
"questionId": "Q001",
"question": "What is DBMS?",
"options": ["A", "B", "C", "D"],
"answer": "A",
"explanation": "Database Management System",
"topic": "DBMS",
"difficulty": "Medium"
}

## leaderboard

* studentId
* rank
* score
* badge

## battles

* roomId
* questionIds
* players
* scores
* status

## videos

* videoId
* studentId
* questionId
* title
* description
* tags
* views
* upvotes

## badges

* badgeName
* studentId
* earnedAt
