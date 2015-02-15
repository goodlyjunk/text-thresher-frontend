module.exports = function(app) {
  var express = require('express');
  var mockServerRouter = express.Router();
  var tuas = {
    "count": 5, 
    "next": "http://127.0.0.1:5000/api/tuas/?page=2", 
    "previous": null, 
    "results": [
        {
            "id": Math.floor(Math.random()*10001),
            "tua_id": 2, 
            "analysis_type": {
                "id": 1, 
                "name": "Protester", 
                "instructions": "The highlighted text describes an event occurring during the Occupy movement. We need your help to categorize what kind of event this was. Compare the information in the highlighted text to the definitions in the table below.", 
                "glossary": {
                    "moving a camp to a new location": "", 
                    "independent": "", 
                    "blocking action": "type of protester-initiated event where a group of individuals", 
                    "march/parade": "type of protester-initiated event.", 
                    "strategic sabotage": "", 
                    "divestment action": "", 
                    "strategic violence": "", 
                    "counterprotester": "", 
                    "establishing a camp": "", 
                    "camp": "", 
                    "disrupting an on-going event of the perceived 1%": "", 
                    "community response": "", 
                    "strike": "", 
                    "rally/demonstration": "", 
                    "injuries": "", 
                    "voluntary dissolution of a camp": ""
                }, 
                "topics": [
                    {
                        "id": 1, 
                        "topic_id": 1, 
                        "name": "Event type", 
                        "questions": [
                            {
                                "id": 1, 
                                "question_id": 1, 
                                "type": "mc", 
                                "text": "What type of event is described in the highlighted text?", 
                                "answers": [
                                    {
                                        "id": 1, 
                                        "answer_id": 1, 
                                        "text": "March/Parade"
                                    }, 
                                    {
                                        "id": 2, 
                                        "answer_id": 2, 
                                        "text": "Rally/Demonstration"
                                    }, 
                                    {
                                        "id": 3, 
                                        "answer_id": 3, 
                                        "text": "Strike"
                                    }, 
                                    {
                                        "id": 4, 
                                        "answer_id": 4, 
                                        "text": "Blocking Action"
                                    }, 
                                    {
                                        "id": 5, 
                                        "answer_id": 5, 
                                        "text": "Establishing a Camp"
                                    }, 
                                    {
                                        "id": 6, 
                                        "answer_id": 6, 
                                        "text": "Moving a camp to a new location"
                                    }, 
                                    {
                                        "id": 7, 
                                        "answer_id": 7, 
                                        "text": "Disrupting an on-going event of the perceived 1%"
                                    }, 
                                    {
                                        "id": 8, 
                                        "answer_id": 8, 
                                        "text": "Divestment Action"
                                    }, 
                                    {
                                        "id": 9, 
                                        "answer_id": 9, 
                                        "text": "Voluntary Dissolution of a camp"
                                    }, 
                                    {
                                        "id": 10, 
                                        "answer_id": 10, 
                                        "text": "Strategic Violence"
                                    }, 
                                    {
                                        "id": 11, 
                                        "answer_id": 11, 
                                        "text": "Strategic Sabotage"
                                    }
                                ]
                            }, 
                            {
                                "id": 2, 
                                "question_id": 2, 
                                "type": "mc", 
                                "text": "What did the crowd block?", 
                                "answers": [
                                    {
                                        "id": 12, 
                                        "answer_id": 1, 
                                        "text": "Sidewalk"
                                    }, 
                                    {
                                        "id": 13, 
                                        "answer_id": 2, 
                                        "text": "Street"
                                    }, 
                                    {
                                        "id": 14, 
                                        "answer_id": 3, 
                                        "text": "Public transportation"
                                    }, 
                                    {
                                        "id": 15, 
                                        "answer_id": 4, 
                                        "text": "Airport"
                                    }, 
                                    {
                                        "id": 16, 
                                        "answer_id": 5, 
                                        "text": "Shipping port"
                                    }
                                ]
                            }, 
                            {
                                "id": 3, 
                                "question_id": 3, 
                                "type": "mc", 
                                "text": "What type of event did the protesters disrupt?", 
                                "answers": [
                                    {
                                        "id": 17, 
                                        "answer_id": 1, 
                                        "text": "Political campaign"
                                    }, 
                                    {
                                        "id": 18, 
                                        "answer_id": 2, 
                                        "text": "Politician's speech"
                                    }, 
                                    {
                                        "id": 19, 
                                        "answer_id": 3, 
                                        "text": "City council meeting"
                                    }, 
                                    {
                                        "id": 20, 
                                        "answer_id": 4, 
                                        "text": "Auction"
                                    }
                                ]
                            }, 
                            {
                                "id": 4, 
                                "question_id": 4, 
                                "type": "mc", 
                                "text": "What is the position or title of the 1% who is being protested against?", 
                                "answers": [
                                    {
                                        "id": 21, 
                                        "answer_id": 1, 
                                        "text": "CEO of some company"
                                    }, 
                                    {
                                        "id": 22, 
                                        "answer_id": 2, 
                                        "text": "City mayor"
                                    }, 
                                    {
                                        "id": 23, 
                                        "answer_id": 3, 
                                        "text": "City council member"
                                    }, 
                                    {
                                        "id": 24, 
                                        "answer_id": 4, 
                                        "text": "State legislature"
                                    }, 
                                    {
                                        "id": 25, 
                                        "answer_id": 5, 
                                        "text": "U.S. president"
                                    }
                                ]
                            }, 
                            {
                                "id": 5, 
                                "question_id": 5, 
                                "type": "mc", 
                                "text": "What type of strategic violence occurred?", 
                                "answers": [
                                    {
                                        "id": 26, 
                                        "answer_id": 1, 
                                        "text": "Kidnapping"
                                    }, 
                                    {
                                        "id": 27, 
                                        "answer_id": 2, 
                                        "text": "Assassination"
                                    }, 
                                    {
                                        "id": 28, 
                                        "answer_id": 3, 
                                        "text": "Bombing"
                                    }, 
                                    {
                                        "id": 29, 
                                        "answer_id": 4, 
                                        "text": "Assault"
                                    }
                                ]
                            }, 
                            {
                                "id": 6, 
                                "question_id": 6, 
                                "type": "mc", 
                                "text": "What type of strategic sabotage occurred?", 
                                "answers": [
                                    {
                                        "id": 30, 
                                        "answer_id": 1, 
                                        "text": "Pre-planned vandalism"
                                    }, 
                                    {
                                        "id": 31, 
                                        "answer_id": 2, 
                                        "text": "Pre-planned arson"
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        "id": 2, 
                        "topic_id": 2, 
                        "name": "Event setting and composition (location, attendance, time/duration)", 
                        "questions": [
                            {
                                "id": 7, 
                                "question_id": 1, 
                                "type": "mc", 
                                "text": "Which of the following information does the text give about the event's location?", 
                                "answers": [
                                    {
                                        "id": 32, 
                                        "answer_id": 1, 
                                        "text": "The exact location or address"
                                    }, 
                                    {
                                        "id": 33, 
                                        "answer_id": 2, 
                                        "text": "An approximate location, or clues about where the event took place (e.g. \"the small group of protesters marched down Market Street)"
                                    }, 
                                    {
                                        "id": 34, 
                                        "answer_id": 3, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 8, 
                                "question_id": 2, 
                                "type": "tb", 
                                "text": "Exactly where did the event take place?", 
                                "answers": []
                            }, 
                            {
                                "id": 9, 
                                "question_id": 3, 
                                "type": "tb", 
                                "text": "Please highlight the text that gives clues about the approximate location of this event.", 
                                "answers": []
                            }, 
                            {
                                "id": 10, 
                                "question_id": 4, 
                                "type": "mc", 
                                "text": "Which of the following information does the text give about the number of protesters at the event?", 
                                "answers": [
                                    {
                                        "id": 35, 
                                        "answer_id": 1, 
                                        "text": "The exact number"
                                    }, 
                                    {
                                        "id": 36, 
                                        "answer_id": 2, 
                                        "text": "An estimate or approximate number"
                                    }, 
                                    {
                                        "id": 37, 
                                        "answer_id": 3, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 11, 
                                "question_id": 5, 
                                "type": "tb", 
                                "text": "Exactly how many protesters were in attendance?", 
                                "answers": []
                            }, 
                            {
                                "id": 12, 
                                "question_id": 6, 
                                "type": "mc", 
                                "text": "Approximately how many protesters were in attendance?", 
                                "answers": [
                                    {
                                        "id": 38, 
                                        "answer_id": 1, 
                                        "text": "A \"few,\" \"handful,\" \"small group,\" 2-5"
                                    }, 
                                    {
                                        "id": 39, 
                                        "answer_id": 2, 
                                        "text": "\"Several,\" a \"group\", 6-11"
                                    }, 
                                    {
                                        "id": 40, 
                                        "answer_id": 3, 
                                        "text": "\"A dozen (or so)\" 12-19"
                                    }, 
                                    {
                                        "id": 41, 
                                        "answer_id": 4, 
                                        "text": "\"A small crowd \" A couple dozen\" 20-34"
                                    }, 
                                    {
                                        "id": 42, 
                                        "answer_id": 5, 
                                        "text": "\"A crowd\" 35-75"
                                    }, 
                                    {
                                        "id": 43, 
                                        "answer_id": 6, 
                                        "text": "A \"large crowd\" \" a hundred or so\" 76-150"
                                    }, 
                                    {
                                        "id": 44, 
                                        "answer_id": 7, 
                                        "text": "A \"mass,\" \"hundreds\" 150-500"
                                    }, 
                                    {
                                        "id": 45, 
                                        "answer_id": 8, 
                                        "text": "\"Several hundred\" 501-850"
                                    }, 
                                    {
                                        "id": 46, 
                                        "answer_id": 9, 
                                        "text": "\"About a thousand\" 851-1300"
                                    }, 
                                    {
                                        "id": 47, 
                                        "answer_id": 10, 
                                        "text": "\"Thousands,\" A few thousand\" 1300-4500"
                                    }, 
                                    {
                                        "id": 48, 
                                        "answer_id": 11, 
                                        "text": "\"Several thousand\" 4501-8500"
                                    }, 
                                    {
                                        "id": 49, 
                                        "answer_id": 12, 
                                        "text": "\"Around ten thousand\" 8501-12000"
                                    }, 
                                    {
                                        "id": 50, 
                                        "answer_id": 13, 
                                        "text": "\"Well over ten thousand\" 1201-17000"
                                    }, 
                                    {
                                        "id": 51, 
                                        "answer_id": 14, 
                                        "text": "Tens of thousands 17001-30,000"
                                    }, 
                                    {
                                        "id": 52, 
                                        "answer_id": 15, 
                                        "text": "More than 30,000"
                                    }
                                ]
                            }, 
                            {
                                "id": 13, 
                                "question_id": 7, 
                                "type": "cl", 
                                "text": "Who estimated the number of protesters in attendance?", 
                                "answers": [
                                    {
                                        "id": 53, 
                                        "answer_id": 1, 
                                        "text": "Media"
                                    }, 
                                    {
                                        "id": 54, 
                                        "answer_id": 2, 
                                        "text": "Police"
                                    }, 
                                    {
                                        "id": 55, 
                                        "answer_id": 3, 
                                        "text": "City official"
                                    }, 
                                    {
                                        "id": 56, 
                                        "answer_id": 4, 
                                        "text": "Protester"
                                    }, 
                                    {
                                        "id": 57, 
                                        "answer_id": 5, 
                                        "text": "Citizen or other person not affiliated with the camp, media, police, or city"
                                    }, 
                                    {
                                        "id": 58, 
                                        "answer_id": 6, 
                                        "text": "Information not given"
                                    }, 
                                    {
                                        "id": 59, 
                                        "answer_id": 7, 
                                        "text": "Other"
                                    }
                                ]
                            }, 
                            {
                                "id": 14, 
                                "question_id": 8, 
                                "type": "mc", 
                                "text": "Which of the following information does the text give about the number of police at the event?", 
                                "answers": [
                                    {
                                        "id": 60, 
                                        "answer_id": 1, 
                                        "text": "The exact number"
                                    }, 
                                    {
                                        "id": 61, 
                                        "answer_id": 2, 
                                        "text": "An estimate or approximate number"
                                    }, 
                                    {
                                        "id": 62, 
                                        "answer_id": 3, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 15, 
                                "question_id": 9, 
                                "type": "tb", 
                                "text": "Exactly how many police were in attendance?", 
                                "answers": []
                            }, 
                            {
                                "id": 16, 
                                "question_id": 10, 
                                "type": "mc", 
                                "text": "Approximately how many police were in attendance?", 
                                "answers": [
                                    {
                                        "id": 63, 
                                        "answer_id": 1, 
                                        "text": "A \"few,\" \"handful,\" \"small group,\" 2-5"
                                    }, 
                                    {
                                        "id": 64, 
                                        "answer_id": 2, 
                                        "text": "\"Several,\" a \"group\", 6-11"
                                    }, 
                                    {
                                        "id": 65, 
                                        "answer_id": 3, 
                                        "text": "\"A dozen (or so)\" 12-19"
                                    }, 
                                    {
                                        "id": 66, 
                                        "answer_id": 4, 
                                        "text": "\"A small crowd\" A couple dozen\" 20-34"
                                    }, 
                                    {
                                        "id": 67, 
                                        "answer_id": 5, 
                                        "text": "\"A crowd\" 35-75"
                                    }, 
                                    {
                                        "id": 68, 
                                        "answer_id": 6, 
                                        "text": "A \"large crowd\" \"a hundred or so\" 76-150"
                                    }, 
                                    {
                                        "id": 69, 
                                        "answer_id": 7, 
                                        "text": "A \"mass,\" \"hundreds\" 150-500"
                                    }, 
                                    {
                                        "id": 70, 
                                        "answer_id": 8, 
                                        "text": "\"Several hundred\" 501-850"
                                    }, 
                                    {
                                        "id": 71, 
                                        "answer_id": 9, 
                                        "text": "\"About a thousand\" 851-1300"
                                    }, 
                                    {
                                        "id": 72, 
                                        "answer_id": 10, 
                                        "text": "\"Thousands,\" A few thousand\" 1300-4500"
                                    }, 
                                    {
                                        "id": 73, 
                                        "answer_id": 11, 
                                        "text": "\"Several thousand\" 4501-8500"
                                    }, 
                                    {
                                        "id": 74, 
                                        "answer_id": 12, 
                                        "text": "\"Around ten thousand\" 8501-12000"
                                    }, 
                                    {
                                        "id": 75, 
                                        "answer_id": 13, 
                                        "text": "\"Well over ten thousand\" 1201-17000"
                                    }, 
                                    {
                                        "id": 76, 
                                        "answer_id": 14, 
                                        "text": "Tens of thousands 17001-30,000"
                                    }, 
                                    {
                                        "id": 77, 
                                        "answer_id": 15, 
                                        "text": "More than 30,000"
                                    }
                                ]
                            }, 
                            {
                                "id": 17, 
                                "question_id": 11, 
                                "type": "mc", 
                                "text": "Who estimated the number of police in attendance?", 
                                "answers": [
                                    {
                                        "id": 78, 
                                        "answer_id": 1, 
                                        "text": "Media"
                                    }, 
                                    {
                                        "id": 79, 
                                        "answer_id": 2, 
                                        "text": "Police"
                                    }, 
                                    {
                                        "id": 80, 
                                        "answer_id": 3, 
                                        "text": "City official"
                                    }, 
                                    {
                                        "id": 81, 
                                        "answer_id": 4, 
                                        "text": "Protester"
                                    }, 
                                    {
                                        "id": 82, 
                                        "answer_id": 5, 
                                        "text": "Citizen or other person not affiliated with the camp, media, police, or city"
                                    }, 
                                    {
                                        "id": 83, 
                                        "answer_id": 6, 
                                        "text": "Information not given"
                                    }, 
                                    {
                                        "id": 84, 
                                        "answer_id": 7, 
                                        "text": "Other"
                                    }
                                ]
                            }, 
                            {
                                "id": 18, 
                                "question_id": 12, 
                                "type": "cl", 
                                "text": "Which of the following groups and identities were present at the event?", 
                                "answers": [
                                    {
                                        "id": 85, 
                                        "answer_id": 1, 
                                        "text": "Anarchists"
                                    }, 
                                    {
                                        "id": 86, 
                                        "answer_id": 2, 
                                        "text": "Homeless people"
                                    }, 
                                    {
                                        "id": 87, 
                                        "answer_id": 3, 
                                        "text": "Union members"
                                    }, 
                                    {
                                        "id": 88, 
                                        "answer_id": 4, 
                                        "text": "Reinforcement campers from other cities"
                                    }, 
                                    {
                                        "id": 89, 
                                        "answer_id": 5, 
                                        "text": "Religious leaders or communities"
                                    }, 
                                    {
                                        "id": 90, 
                                        "answer_id": 6, 
                                        "text": "Occupy the Hood protesters"
                                    }, 
                                    {
                                        "id": 91, 
                                        "answer_id": 7, 
                                        "text": "Other groups allied with Occupy"
                                    }, 
                                    {
                                        "id": 92, 
                                        "answer_id": 8, 
                                        "text": "African-American people"
                                    }, 
                                    {
                                        "id": 93, 
                                        "answer_id": 9, 
                                        "text": "Hispanic/Latino/Chicano people"
                                    }, 
                                    {
                                        "id": 94, 
                                        "answer_id": 10, 
                                        "text": "Asian-American/Pacific Islander people"
                                    }, 
                                    {
                                        "id": 95, 
                                        "answer_id": 11, 
                                        "text": "Native American people"
                                    }, 
                                    {
                                        "id": 96, 
                                        "answer_id": 12, 
                                        "text": "People under the age of 30"
                                    }, 
                                    {
                                        "id": 97, 
                                        "answer_id": 13, 
                                        "text": "Children"
                                    }, 
                                    {
                                        "id": 98, 
                                        "answer_id": 14, 
                                        "text": "Women"
                                    }, 
                                    {
                                        "id": 99, 
                                        "answer_id": 15, 
                                        "text": "Celebrities"
                                    }, 
                                    {
                                        "id": 100, 
                                        "answer_id": 16, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 19, 
                                "question_id": 13, 
                                "type": "cl", 
                                "text": "Which of the following economic class groups were present at the event?", 
                                "answers": [
                                    {
                                        "id": 101, 
                                        "answer_id": 1, 
                                        "text": "A wide variety of classes"
                                    }, 
                                    {
                                        "id": 102, 
                                        "answer_id": 2, 
                                        "text": "Working/Lower (less than $25,000)"
                                    }, 
                                    {
                                        "id": 103, 
                                        "answer_id": 3, 
                                        "text": "Lower-Middle ($25,000-$49,999)"
                                    }, 
                                    {
                                        "id": 104, 
                                        "answer_id": 4, 
                                        "text": "Middle ($50,000-$74,999)"
                                    }, 
                                    {
                                        "id": 105, 
                                        "answer_id": 5, 
                                        "text": "Upper-Middle ($75,000-$100,000)"
                                    }, 
                                    {
                                        "id": 106, 
                                        "answer_id": 6, 
                                        "text": "Upper ($100,000+)"
                                    }, 
                                    {
                                        "id": 107, 
                                        "answer_id": 7, 
                                        "text": "The 1% ($250,000+)"
                                    }, 
                                    {
                                        "id": 108, 
                                        "answer_id": 8, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 20, 
                                "question_id": 14, 
                                "type": "cl", 
                                "text": "Which of the following age groups were present at the event?", 
                                "answers": [
                                    {
                                        "id": 109, 
                                        "answer_id": 1, 
                                        "text": "A wide variety of ages"
                                    }, 
                                    {
                                        "id": 110, 
                                        "answer_id": 2, 
                                        "text": "Under 18"
                                    }, 
                                    {
                                        "id": 111, 
                                        "answer_id": 3, 
                                        "text": "18-25"
                                    }, 
                                    {
                                        "id": 112, 
                                        "answer_id": 4, 
                                        "text": "26-34"
                                    }, 
                                    {
                                        "id": 113, 
                                        "answer_id": 5, 
                                        "text": "35-44"
                                    }, 
                                    {
                                        "id": 114, 
                                        "answer_id": 6, 
                                        "text": "45-64"
                                    }, 
                                    {
                                        "id": 115, 
                                        "answer_id": 7, 
                                        "text": "65+"
                                    }, 
                                    {
                                        "id": 116, 
                                        "answer_id": 8, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 21, 
                                "question_id": 15, 
                                "type": "cl", 
                                "text": "Which of the following educational attainment groups were present at the event?", 
                                "answers": [
                                    {
                                        "id": 117, 
                                        "answer_id": 1, 
                                        "text": "People with a wide variety of educational attainment levels"
                                    }, 
                                    {
                                        "id": 118, 
                                        "answer_id": 2, 
                                        "text": "Less than high school diploma"
                                    }, 
                                    {
                                        "id": 119, 
                                        "answer_id": 3, 
                                        "text": "High school diploma/GED"
                                    }, 
                                    {
                                        "id": 120, 
                                        "answer_id": 4, 
                                        "text": "Some college (2 years or fewer)"
                                    }, 
                                    {
                                        "id": 121, 
                                        "answer_id": 5, 
                                        "text": "College degree (B.A., B.S., trade school, technical school)"
                                    }, 
                                    {
                                        "id": 122, 
                                        "answer_id": 6, 
                                        "text": "Master's degree"
                                    }, 
                                    {
                                        "id": 123, 
                                        "answer_id": 7, 
                                        "text": "PhD"
                                    }, 
                                    {
                                        "id": 124, 
                                        "answer_id": 8, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 22, 
                                "question_id": 16, 
                                "type": "cl", 
                                "text": "Which of the following job titles/occupations are held by people who attended the event?", 
                                "answers": [
                                    {
                                        "id": 125, 
                                        "answer_id": 1, 
                                        "text": "People with a wide variety of job titles/occupations"
                                    }, 
                                    {
                                        "id": 126, 
                                        "answer_id": 2, 
                                        "text": "Unemployed"
                                    }, 
                                    {
                                        "id": 127, 
                                        "answer_id": 3, 
                                        "text": "Teacher, professor"
                                    }, 
                                    {
                                        "id": 128, 
                                        "answer_id": 4, 
                                        "text": "Business worker"
                                    }, 
                                    {
                                        "id": 129, 
                                        "answer_id": 5, 
                                        "text": "Factory worker"
                                    }, 
                                    {
                                        "id": 130, 
                                        "answer_id": 6, 
                                        "text": "Caretaker"
                                    }, 
                                    {
                                        "id": 131, 
                                        "answer_id": 7, 
                                        "text": "Farmer"
                                    }
                                ]
                            }, 
                            {
                                "id": 23, 
                                "question_id": 17, 
                                "type": "mc", 
                                "text": "Which of the following information does the text give about when the event occurred?", 
                                "answers": [
                                    {
                                        "id": 132, 
                                        "answer_id": 1, 
                                        "text": "The exact start time"
                                    }, 
                                    {
                                        "id": 133, 
                                        "answer_id": 2, 
                                        "text": "An approximate start time"
                                    }, 
                                    {
                                        "id": 134, 
                                        "answer_id": 3, 
                                        "text": "The exact end time"
                                    }, 
                                    {
                                        "id": 135, 
                                        "answer_id": 4, 
                                        "text": "An approximate end time"
                                    }, 
                                    {
                                        "id": 136, 
                                        "answer_id": 5, 
                                        "text": "The duration (the length of time the event lasted after it began)"
                                    }, 
                                    {
                                        "id": 137, 
                                        "answer_id": 6, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 24, 
                                "question_id": 18, 
                                "type": "tb", 
                                "text": "When exactly did the event begin?", 
                                "answers": []
                            }, 
                            {
                                "id": 25, 
                                "question_id": 19, 
                                "type": "mc", 
                                "text": "Approximately when did the event begin?", 
                                "answers": [
                                    {
                                        "id": 138, 
                                        "answer_id": 1, 
                                        "text": "Early morning (4am-9am)"
                                    }, 
                                    {
                                        "id": 139, 
                                        "answer_id": 2, 
                                        "text": "Late morning (9am-12pm)"
                                    }, 
                                    {
                                        "id": 140, 
                                        "answer_id": 3, 
                                        "text": "Afternoon (12pm-5pm)"
                                    }, 
                                    {
                                        "id": 141, 
                                        "answer_id": 4, 
                                        "text": "Evening (5pm-8pm)"
                                    }, 
                                    {
                                        "id": 142, 
                                        "answer_id": 5, 
                                        "text": "Night (8pm-11pm)"
                                    }, 
                                    {
                                        "id": 143, 
                                        "answer_id": 6, 
                                        "text": "Late night (11pm-4am)"
                                    }
                                ]
                            }, 
                            {
                                "id": 26, 
                                "question_id": 20, 
                                "type": "tb", 
                                "text": "When exactly did the event end?", 
                                "answers": []
                            }, 
                            {
                                "id": 27, 
                                "question_id": 21, 
                                "type": "mc", 
                                "text": "Approximately when did the event end?", 
                                "answers": [
                                    {
                                        "id": 144, 
                                        "answer_id": 1, 
                                        "text": "Early morning (4am-9am)"
                                    }, 
                                    {
                                        "id": 145, 
                                        "answer_id": 2, 
                                        "text": "Late morning (9am-12pm)"
                                    }, 
                                    {
                                        "id": 146, 
                                        "answer_id": 3, 
                                        "text": "Afternoon (12pm-5pm)"
                                    }, 
                                    {
                                        "id": 147, 
                                        "answer_id": 4, 
                                        "text": "Evening (5pm-8pm)"
                                    }, 
                                    {
                                        "id": 148, 
                                        "answer_id": 5, 
                                        "text": "Night (8pm-11pm)"
                                    }, 
                                    {
                                        "id": 149, 
                                        "answer_id": 6, 
                                        "text": "Late night (11pm-4am)"
                                    }
                                ]
                            }, 
                            {
                                "id": 28, 
                                "question_id": 22, 
                                "type": "mc", 
                                "text": "Approximately how long did the event last?", 
                                "answers": [
                                    {
                                        "id": 150, 
                                        "answer_id": 1, 
                                        "text": "***will add attributes***"
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        "id": 3, 
                        "topic_id": 3, 
                        "name": "Arrests/injuries", 
                        "questions": [
                            {
                                "id": 29, 
                                "question_id": 1, 
                                "type": "mc", 
                                "text": "Which of the following information does the text give about arrests that occurred during the event?", 
                                "answers": [
                                    {
                                        "id": 151, 
                                        "answer_id": 1, 
                                        "text": "The exact number"
                                    }, 
                                    {
                                        "id": 152, 
                                        "answer_id": 2, 
                                        "text": "An estimate or approximate number"
                                    }, 
                                    {
                                        "id": 153, 
                                        "answer_id": 3, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 30, 
                                "question_id": 2, 
                                "type": "tb", 
                                "text": "Exactly how many arrests occurred during the event? (If the text specifically states, \"no arrests were made,\" then type in the number 0)", 
                                "answers": []
                            }, 
                            {
                                "id": 31, 
                                "question_id": 3, 
                                "type": "mc", 
                                "text": "Approximately how many arrests occurred?", 
                                "answers": [
                                    {
                                        "id": 154, 
                                        "answer_id": 1, 
                                        "text": "1-5"
                                    }, 
                                    {
                                        "id": 155, 
                                        "answer_id": 2, 
                                        "text": "5-10"
                                    }, 
                                    {
                                        "id": 156, 
                                        "answer_id": 3, 
                                        "text": "10-25"
                                    }, 
                                    {
                                        "id": 157, 
                                        "answer_id": 4, 
                                        "text": "25-50"
                                    }, 
                                    {
                                        "id": 158, 
                                        "answer_id": 5, 
                                        "text": "50-100"
                                    }, 
                                    {
                                        "id": 159, 
                                        "answer_id": 6, 
                                        "text": "100+"
                                    }
                                ]
                            }, 
                            {
                                "id": 32, 
                                "question_id": 4, 
                                "type": "cl", 
                                "text": "Who was arrested?", 
                                "answers": [
                                    {
                                        "id": 160, 
                                        "answer_id": 1, 
                                        "text": "Protesters"
                                    }, 
                                    {
                                        "id": 161, 
                                        "answer_id": 2, 
                                        "text": "Counterprotesters"
                                    }, 
                                    {
                                        "id": 162, 
                                        "answer_id": 3, 
                                        "text": "Protesters from other cities"
                                    }, 
                                    {
                                        "id": 163, 
                                        "answer_id": 4, 
                                        "text": "Independent"
                                    }, 
                                    {
                                        "id": 164, 
                                        "answer_id": 5, 
                                        "text": "News reporters"
                                    }, 
                                    {
                                        "id": 165, 
                                        "answer_id": 6, 
                                        "text": "City official"
                                    }, 
                                    {
                                        "id": 166, 
                                        "answer_id": 7, 
                                        "text": "Other"
                                    }
                                ]
                            }, 
                            {
                                "id": 33, 
                                "question_id": 5, 
                                "type": "mc", 
                                "text": "Which of the following information does the text give about when the arrests occurred?", 
                                "answers": [
                                    {
                                        "id": 167, 
                                        "answer_id": 1, 
                                        "text": "The exact time"
                                    }, 
                                    {
                                        "id": 168, 
                                        "answer_id": 2, 
                                        "text": "An approximate time"
                                    }, 
                                    {
                                        "id": 169, 
                                        "answer_id": 3, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 34, 
                                "question_id": 6, 
                                "type": "tb", 
                                "text": "Exactly when did the arrests occur?", 
                                "answers": []
                            }, 
                            {
                                "id": 35, 
                                "question_id": 7, 
                                "type": "tb", 
                                "text": "If no specific time is given, please highlight any words giving clues about what time the arrests occurred (e.g. \"hours after police warned protesters to leave the area\")", 
                                "answers": []
                            }, 
                            {
                                "id": 36, 
                                "question_id": 8, 
                                "type": "mc", 
                                "text": "Which of the following information does the text give about the number of protesters injured during the event?", 
                                "answers": [
                                    {
                                        "id": 170, 
                                        "answer_id": 1, 
                                        "text": "The exact number"
                                    }, 
                                    {
                                        "id": 171, 
                                        "answer_id": 2, 
                                        "text": "An estimate or approximate number"
                                    }, 
                                    {
                                        "id": 172, 
                                        "answer_id": 3, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 37, 
                                "question_id": 9, 
                                "type": "tb", 
                                "text": "Exactly how many protesters were injured during the event? (If the text specifically states, \"no injuries occurred,\" then type in the number 0)", 
                                "answers": []
                            }, 
                            {
                                "id": 38, 
                                "question_id": 10, 
                                "type": "mc", 
                                "text": "Approximately how many protesters were injured during the event?", 
                                "answers": [
                                    {
                                        "id": 173, 
                                        "answer_id": 1, 
                                        "text": "1-5"
                                    }, 
                                    {
                                        "id": 174, 
                                        "answer_id": 2, 
                                        "text": "5-10"
                                    }, 
                                    {
                                        "id": 175, 
                                        "answer_id": 3, 
                                        "text": "10-25"
                                    }, 
                                    {
                                        "id": 176, 
                                        "answer_id": 4, 
                                        "text": "25-50"
                                    }, 
                                    {
                                        "id": 177, 
                                        "answer_id": 5, 
                                        "text": "50+"
                                    }
                                ]
                            }, 
                            {
                                "id": 39, 
                                "question_id": 11, 
                                "type": "mc", 
                                "text": "Which of the following information does the text give about when the protesters were injured?", 
                                "answers": [
                                    {
                                        "id": 178, 
                                        "answer_id": 1, 
                                        "text": "The exact time"
                                    }, 
                                    {
                                        "id": 179, 
                                        "answer_id": 2, 
                                        "text": "An approximate time"
                                    }, 
                                    {
                                        "id": 180, 
                                        "answer_id": 3, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 40, 
                                "question_id": 12, 
                                "type": "tb", 
                                "text": "Exactly when were the protesters injured?", 
                                "answers": []
                            }, 
                            {
                                "id": 41, 
                                "question_id": 13, 
                                "type": "tb", 
                                "text": "If no specific time is given, please highlight any words giving clues about what time the arrests occurred (e.g. \"hours after police warned protesters to leave the area\")", 
                                "answers": []
                            }, 
                            {
                                "id": 42, 
                                "question_id": 14, 
                                "type": "mc", 
                                "text": "Which of the following information does the text give about the number of police injured during the event?", 
                                "answers": [
                                    {
                                        "id": 181, 
                                        "answer_id": 1, 
                                        "text": "The exact number"
                                    }, 
                                    {
                                        "id": 182, 
                                        "answer_id": 2, 
                                        "text": "An estimate or approximate number"
                                    }, 
                                    {
                                        "id": 183, 
                                        "answer_id": 3, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 43, 
                                "question_id": 15, 
                                "type": "tb", 
                                "text": "Exactly how many police were injured during the event? (If the text specifically states, \"no injuries occurred,\" then type in the number 0)", 
                                "answers": []
                            }, 
                            {
                                "id": 44, 
                                "question_id": 16, 
                                "type": "mc", 
                                "text": "Approximately how many police were injured during the event?", 
                                "answers": [
                                    {
                                        "id": 184, 
                                        "answer_id": 1, 
                                        "text": "1-5"
                                    }, 
                                    {
                                        "id": 185, 
                                        "answer_id": 2, 
                                        "text": "5-10"
                                    }, 
                                    {
                                        "id": 186, 
                                        "answer_id": 3, 
                                        "text": "10-25"
                                    }, 
                                    {
                                        "id": 187, 
                                        "answer_id": 4, 
                                        "text": "25-50"
                                    }, 
                                    {
                                        "id": 188, 
                                        "answer_id": 5, 
                                        "text": "50+"
                                    }
                                ]
                            }, 
                            {
                                "id": 45, 
                                "question_id": 17, 
                                "type": "mc", 
                                "text": "Which of the following information does the text give about when the police were injured?", 
                                "answers": [
                                    {
                                        "id": 189, 
                                        "answer_id": 1, 
                                        "text": "The exact time"
                                    }, 
                                    {
                                        "id": 190, 
                                        "answer_id": 2, 
                                        "text": "An approximate time"
                                    }, 
                                    {
                                        "id": 191, 
                                        "answer_id": 3, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 46, 
                                "question_id": 18, 
                                "type": "tb", 
                                "text": "Exactly when were the police injured?", 
                                "answers": []
                            }, 
                            {
                                "id": 47, 
                                "question_id": 19, 
                                "type": "tb", 
                                "text": "If no specific time is given, please highlight any words giving clues about what time the injuries occurred (e.g. \"hours after police warned protesters to leave the area\")", 
                                "answers": []
                            }
                        ]
                    }, 
                    {
                        "id": 4, 
                        "topic_id": 4, 
                        "name": "Permit", 
                        "questions": [
                            {
                                "id": 48, 
                                "question_id": 1, 
                                "type": "mc", 
                                "text": "Was the event permitted?", 
                                "answers": [
                                    {
                                        "id": 192, 
                                        "answer_id": 1, 
                                        "text": "Yes"
                                    }, 
                                    {
                                        "id": 193, 
                                        "answer_id": 2, 
                                        "text": "No"
                                    }, 
                                    {
                                        "id": 194, 
                                        "answer_id": 3, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 49, 
                                "question_id": 2, 
                                "type": "tb", 
                                "text": "When does the event permit start?", 
                                "answers": []
                            }, 
                            {
                                "id": 50, 
                                "question_id": 3, 
                                "type": "tb", 
                                "text": "When does the event permit expire?", 
                                "answers": []
                            }, 
                            {
                                "id": 51, 
                                "question_id": 4, 
                                "type": "mc", 
                                "text": "Does the event permit come with conditions or requirements that the protesters must follow?", 
                                "answers": [
                                    {
                                        "id": 195, 
                                        "answer_id": 1, 
                                        "text": "Yes"
                                    }, 
                                    {
                                        "id": 196, 
                                        "answer_id": 2, 
                                        "text": "No"
                                    }, 
                                    {
                                        "id": 197, 
                                        "answer_id": 3, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 52, 
                                "question_id": 5, 
                                "type": "cl", 
                                "text": "Which are conditions or requirements of the event permit? Select all that apply:", 
                                "answers": [
                                    {
                                        "id": 198, 
                                        "answer_id": 1, 
                                        "text": "Tents and other semi-permanent structures cannot be present"
                                    }, 
                                    {
                                        "id": 199, 
                                        "answer_id": 2, 
                                        "text": "Must not close the street"
                                    }, 
                                    {
                                        "id": 200, 
                                        "answer_id": 3, 
                                        "text": "Must not block the sidewalk"
                                    }, 
                                    {
                                        "id": 201, 
                                        "answer_id": 4, 
                                        "text": "Must not block or restrict public property"
                                    }, 
                                    {
                                        "id": 202, 
                                        "answer_id": 5, 
                                        "text": "Must not sell merchandise, food, or beverage"
                                    }, 
                                    {
                                        "id": 203, 
                                        "answer_id": 6, 
                                        "text": "Must not place signage or banners"
                                    }, 
                                    {
                                        "id": 204, 
                                        "answer_id": 7, 
                                        "text": "The crowd must not exceed a certain number of people"
                                    }, 
                                    {
                                        "id": 205, 
                                        "answer_id": 8, 
                                        "text": "Other"
                                    }
                                ]
                            }, 
                            {
                                "id": 53, 
                                "question_id": 6, 
                                "type": "mc", 
                                "text": "Was a permit necessary in order to hold the event, even though protesters did not acquire a permit?", 
                                "answers": [
                                    {
                                        "id": 206, 
                                        "answer_id": 1, 
                                        "text": "Yes"
                                    }, 
                                    {
                                        "id": 207, 
                                        "answer_id": 2, 
                                        "text": "No"
                                    }, 
                                    {
                                        "id": 208, 
                                        "answer_id": 3, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 54, 
                                "question_id": 7, 
                                "type": "mc", 
                                "text": "Is the city government and/or police informally allowing the event, despite it not having a permit?", 
                                "answers": [
                                    {
                                        "id": 209, 
                                        "answer_id": 1, 
                                        "text": "Yes"
                                    }, 
                                    {
                                        "id": 210, 
                                        "answer_id": 2, 
                                        "text": "No"
                                    }, 
                                    {
                                        "id": 211, 
                                        "answer_id": 3, 
                                        "text": "Information not given"
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        "id": 5, 
                        "topic_id": 5, 
                        "name": "Community response", 
                        "questions": [
                            {
                                "id": 55, 
                                "question_id": 1, 
                                "type": "cl", 
                                "text": "Which of the following parties responded to the event?", 
                                "answers": [
                                    {
                                        "id": 212, 
                                        "answer_id": 1, 
                                        "text": "Individual affiliated with the event"
                                    }, 
                                    {
                                        "id": 213, 
                                        "answer_id": 2, 
                                        "text": "Passerby/onlooker, individual not affiliated with the event (ex. citizens, local business owners)"
                                    }, 
                                    {
                                        "id": 214, 
                                        "answer_id": 3, 
                                        "text": "Community group that is not Occupy (ex. church, interest group, local organization)"
                                    }, 
                                    {
                                        "id": 215, 
                                        "answer_id": 4, 
                                        "text": "City government official"
                                    }, 
                                    {
                                        "id": 216, 
                                        "answer_id": 5, 
                                        "text": "Celebrity or politician"
                                    }, 
                                    {
                                        "id": 217, 
                                        "answer_id": 6, 
                                        "text": "Other"
                                    }, 
                                    {
                                        "id": 218, 
                                        "answer_id": 7, 
                                        "text": "Information not given"
                                    }
                                ]
                            }, 
                            {
                                "id": 56, 
                                "question_id": 2, 
                                "type": "mc", 
                                "text": "What was the party's level of support?", 
                                "answers": [
                                    {
                                        "id": 219, 
                                        "answer_id": 1, 
                                        "text": "Strongly unsupportive, very negative, oppositional"
                                    }, 
                                    {
                                        "id": 220, 
                                        "answer_id": 2, 
                                        "text": "Somewhat unsupportive, slightly negative"
                                    }, 
                                    {
                                        "id": 221, 
                                        "answer_id": 3, 
                                        "text": "Neutral"
                                    }, 
                                    {
                                        "id": 222, 
                                        "answer_id": 4, 
                                        "text": "Somewhat supportive, slightly positive"
                                    }, 
                                    {
                                        "id": 223, 
                                        "answer_id": 5, 
                                        "text": "Strongly supportive, very positive, enthusiastic"
                                    }
                                ]
                            }
                        ]
                    }
                ], 
                "question_dependencies": [
                    [
                        "1.01.04", 
                        "1.02"
                    ], 
                    [
                        "1.01.07", 
                        "1.03"
                    ], 
                    [
                        "1.03.any", 
                        "1.04"
                    ], 
                    [
                        "1.01.10", 
                        "1.05"
                    ], 
                    [
                        "1.01.11", 
                        "1.06"
                    ], 
                    [
                        "2.01.01", 
                        "2.02"
                    ], 
                    [
                        "2.01.02", 
                        "2.06"
                    ], 
                    [
                        "2.06.any", 
                        "2.07"
                    ], 
                    [
                        "2.08.01", 
                        "2.09"
                    ], 
                    [
                        "2.08.02", 
                        "2.10"
                    ], 
                    [
                        "2.10.any", 
                        "2.11"
                    ], 
                    [
                        "2.17.01", 
                        "2.18"
                    ], 
                    [
                        "2.17.02", 
                        "2.19"
                    ], 
                    [
                        "2.17.03", 
                        "2.20"
                    ], 
                    [
                        "2.17.04", 
                        "2.21"
                    ], 
                    [
                        "2.17.05", 
                        "2.22"
                    ], 
                    [
                        "3.01.01", 
                        "3.02"
                    ], 
                    [
                        "3.01.02", 
                        "3.03"
                    ], 
                    [
                        "3.03.any", 
                        "3.04"
                    ], 
                    [
                        "3.05.01", 
                        "3.06"
                    ], 
                    [
                        "3.05.02", 
                        "3.07"
                    ], 
                    [
                        "3.08.01", 
                        "3.09"
                    ], 
                    [
                        "3.08.02", 
                        "3.10"
                    ], 
                    [
                        "3.11.01", 
                        "3.12"
                    ], 
                    [
                        "3.11.02", 
                        "3.13"
                    ], 
                    [
                        "3.14.01", 
                        "3.15"
                    ], 
                    [
                        "3.14.02", 
                        "3.16"
                    ], 
                    [
                        "3.17.01", 
                        "3.18"
                    ], 
                    [
                        "3.17.02", 
                        "3.19"
                    ], 
                    [
                        "4.01.01", 
                        "4.02"
                    ], 
                    [
                        "4.01.01", 
                        "4.03"
                    ], 
                    [
                        "4.01.01", 
                        "4.04"
                    ], 
                    [
                        "4.04.01", 
                        "4.05"
                    ], 
                    [
                        "4.06.01", 
                        "4.07"
                    ], 
                    [
                        "5.01.01", 
                        "5.02"
                    ], 
                    [
                        "5.01.02", 
                        "5.02"
                    ], 
                    [
                        "5.01.03", 
                        "5.02"
                    ], 
                    [
                        "5.01.04", 
                        "5.02"
                    ], 
                    [
                        "5.01.05", 
                        "5.02"
                    ], 
                    [
                        "5.01.06", 
                        "5.02"
                    ]
                ]
            }, 
            "article": {
                "article_id": 38, 
                "text": "32 of 36 DOCUMENTS\nThe Associated Press State & Local Wire\nOctober 27, 2011 Thursday 4:59 PM GMT\nOccupy Albany protesters move from park to Capitol\nBYLINE: By MICHAEL GORMLEY, Associated Press\nSECTION: STATE AND REGIONAL\nLENGTH: 237 words\nDATELINE: ALBANY N.Y.\n\n\nDozens of Occupy Albany protesters, young and old, entered New York's Capitol on Thursday demanding a millionaire's tax in the state.\nSecurity guards asked the group to stop chanting while they asked questions and then let them into the building's public space.\nThe demonstrators have been calling for higher taxes on the wealthy, something opposed by Gov. Andrew Cuomo and the Senate Republican majority. Thursday's rally is part of the nationwide movement blaming Wall Street and the government for economic woes and policies favoring the rich, or about 1 percent of Americans.\nSome Albany protesters have been camped in a nearby park since Friday, where the initial Occupy Albany demonstration was held.\nProtester Michael Fisk said more than 50 were headed to Cuomo's office in the Capitol. The Albany Law School student said the march is a symbolic effort.\nThe governor, who was in New York City, had no immediate comment.\n\"We're not trying to do anything illegal here,\" said Trudy Quaif, 58, a protester from suburban Albany. \"Gov. Cuomo is not paying attention.\"\nQuaif, who is retired, said the state needs to tax earners of more than $1 million a year at a higher rate to pay for infrastructure improvements and better schools in order to attract more jobs and business.\nSigns in the Capitol included \"Cuomo serves the one percent,\" and \"Tax the Rich.\"\nOnce gathered inside, protesters began chanting: \"We are the 99 percent.\"\n \nLOAD-DATE: October 28, 2011\nLANGUAGE: ENGLISH\nPUBLICATION-TYPE: Newswire\nCopyright 2011 Associated Press\nAll Rights Reserved", 
                "date_published": "2011-10-27", 
                "city_published": "Albany", 
                "state_published": "NY", 
                "periodical": "theassociatedpressstatelocalwire", 
                "periodical_code": 9, 
                "parse_version": "26", 
                "annotators": [
                    "SLG"
                ]
            }, 
            "offsets": [
                [
                    843, 
                    969
                ]
            ]
        }
    ]
}
  mockServerRouter.post('/highlight-groups', function(req, res) {
    res.send({});
  })
  mockServerRouter.get('/tuas', function(req, res) {
    var tuas = tuas; 
    res.send(tuas);
  })
mockServerRouter.get('/tuas/?page=2', function(req, res) {
    var tuas = tuas;
    res.send(tuas);
  })
  app.use('/api/', mockServerRouter);
};