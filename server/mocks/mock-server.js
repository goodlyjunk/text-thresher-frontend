module.exports = function(app) {
  var express = require('express');
  var mockServerRouter = express.Router();
  mockServerRouter.get('/tuas', function(req, res) {
    var tuas = {
    "count": 15, 
    "next": "http://127.0.0.1:5000/api/tuas/?page=2", 
    "previous": null, 
    "results": [
        {
            "id": 9, 
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
                        "id": "1", 
                        "questions": [
                            {
                                "text": "What type of event is described in the highlighted text?", 
                                "type": "mc", 
                                "id": "01", 
                                "answers": [
                                    {
                                        "text": "March/Parade", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Rally/Demonstration", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Strike", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "Blocking Action", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "Establishing a Camp", 
                                        "id": "05"
                                    }, 
                                    {
                                        "text": "Moving a camp to a new location", 
                                        "id": "06"
                                    }, 
                                    {
                                        "text": "Disrupting an on-going event of the perceived 1%", 
                                        "id": "07"
                                    }, 
                                    {
                                        "text": "Divestment Action", 
                                        "id": "08"
                                    }, 
                                    {
                                        "text": "Voluntary Dissolution of a camp", 
                                        "id": "09"
                                    }, 
                                    {
                                        "text": "Strategic Violence", 
                                        "id": "10"
                                    }, 
                                    {
                                        "text": "Strategic Sabotage", 
                                        "id": "11"
                                    }
                                ]
                            }, 
                            {
                                "text": "What did the crowd block?", 
                                "type": "mc", 
                                "id": "02", 
                                "answers": [
                                    {
                                        "text": "Sidewalk", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Street", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Public transportation", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "Airport", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "Shipping port", 
                                        "id": "05"
                                    }
                                ]
                            }, 
                            {
                                "text": "What type of event did the protesters disrupt?", 
                                "type": "mc", 
                                "id": "03", 
                                "answers": [
                                    {
                                        "text": "Political campaign", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Politician's speech", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "City council meeting", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "Auction", 
                                        "id": "04"
                                    }
                                ]
                            }, 
                            {
                                "text": "What is the position or title of the 1% who is being protested against?", 
                                "type": "mc", 
                                "id": "04", 
                                "answers": [
                                    {
                                        "text": "CEO of some company", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "City mayor", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "City council member", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "State legislature", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "U.S. president", 
                                        "id": "05"
                                    }
                                ]
                            }, 
                            {
                                "text": "What type of strategic violence occurred?", 
                                "type": "mc", 
                                "id": "05", 
                                "answers": [
                                    {
                                        "text": "Kidnapping", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Assassination", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Bombing", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "Assault", 
                                        "id": "04"
                                    }
                                ]
                            }, 
                            {
                                "text": "What type of strategic sabotage occurred?", 
                                "type": "mc", 
                                "id": "06", 
                                "answers": [
                                    {
                                        "text": "Pre-planned vandalism", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Pre-planned arson", 
                                        "id": "02"
                                    }
                                ]
                            }
                        ], 
                        "name": "Event type"
                    }, 
                    {
                        "id": "2", 
                        "questions": [
                            {
                                "text": "Which of the following information does the text give about the event's location?", 
                                "type": "mc", 
                                "id": "01", 
                                "answers": [
                                    {
                                        "text": "The exact location or address", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "An approximate location, or clues about where the event took place (e.g. \"the small group of protesters marched down Market Street)", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "03"
                                    }
                                ]
                            }, 
                            {
                                "text": "Exactly where did the event take place?", 
                                "type": "tb", 
                                "id": "02", 
                                "answers": []
                            }, 
                            {
                                "text": "Please highlight the text that gives clues about the approximate location of this event.", 
                                "type": "tb", 
                                "id": "03", 
                                "answers": []
                            }, 
                            {
                                "text": "Which of the following information does the text give about the number of protesters at the event?", 
                                "type": "mc", 
                                "id": "04", 
                                "answers": [
                                    {
                                        "text": "The exact number", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "An estimate or approximate number", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "03"
                                    }
                                ]
                            }, 
                            {
                                "text": "Exactly how many protesters were in attendance?", 
                                "type": "tb", 
                                "id": "05", 
                                "answers": []
                            }, 
                            {
                                "text": "Approximately how many protesters were in attendance?", 
                                "type": "mc", 
                                "id": "06", 
                                "answers": [
                                    {
                                        "text": "A \"few,\" \"handful,\" \"small group,\" 2-5", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "\"Several,\" a \"group\", 6-11", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "\"A dozen (or so)\" 12-19", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "\"A small crowd \" A couple dozen\" 20-34", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "\"A crowd\" 35-75", 
                                        "id": "05"
                                    }, 
                                    {
                                        "text": "A \"large crowd\" \" a hundred or so\" 76-150", 
                                        "id": "06"
                                    }, 
                                    {
                                        "text": "A \"mass,\" \"hundreds\" 150-500", 
                                        "id": "07"
                                    }, 
                                    {
                                        "text": "\"Several hundred\" 501-850", 
                                        "id": "08"
                                    }, 
                                    {
                                        "text": "\"About a thousand\" 851-1300", 
                                        "id": "09"
                                    }, 
                                    {
                                        "text": "\"Thousands,\" A few thousand\" 1300-4500", 
                                        "id": "10"
                                    }, 
                                    {
                                        "text": "\"Several thousand\" 4501-8500", 
                                        "id": "11"
                                    }, 
                                    {
                                        "text": "\"Around ten thousand\" 8501-12000", 
                                        "id": "12"
                                    }, 
                                    {
                                        "text": "\"Well over ten thousand\" 1201-17000", 
                                        "id": "13"
                                    }, 
                                    {
                                        "text": "Tens of thousands 17001-30,000", 
                                        "id": "14"
                                    }, 
                                    {
                                        "text": "More than 30,000", 
                                        "id": "15"
                                    }
                                ]
                            }, 
                            {
                                "text": "Who estimated the number of protesters in attendance?", 
                                "type": "cl", 
                                "id": "07", 
                                "answers": [
                                    {
                                        "text": "Media", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Police", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "City official", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "Protester", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "Citizen or other person not affiliated with the camp, media, police, or city", 
                                        "id": "05"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "06"
                                    }, 
                                    {
                                        "text": "Other", 
                                        "id": "07"
                                    }
                                ]
                            }, 
                            {
                                "text": "Which of the following information does the text give about the number of police at the event?", 
                                "type": "mc", 
                                "id": "08", 
                                "answers": [
                                    {
                                        "text": "The exact number", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "An estimate or approximate number", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "03"
                                    }
                                ]
                            }, 
                            {
                                "text": "Exactly how many police were in attendance?", 
                                "type": "tb", 
                                "id": "09", 
                                "answers": []
                            }, 
                            {
                                "text": "Approximately how many police were in attendance?", 
                                "type": "mc", 
                                "id": "10", 
                                "answers": [
                                    {
                                        "text": "A \"few,\" \"handful,\" \"small group,\" 2-5", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "\"Several,\" a \"group\", 6-11", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "\"A dozen (or so)\" 12-19", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "\"A small crowd\" A couple dozen\" 20-34", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "\"A crowd\" 35-75", 
                                        "id": "05"
                                    }, 
                                    {
                                        "text": "A \"large crowd\" \"a hundred or so\" 76-150", 
                                        "id": "06"
                                    }, 
                                    {
                                        "text": "A \"mass,\" \"hundreds\" 150-500", 
                                        "id": "07"
                                    }, 
                                    {
                                        "text": "\"Several hundred\" 501-850", 
                                        "id": "08"
                                    }, 
                                    {
                                        "text": "\"About a thousand\" 851-1300", 
                                        "id": "09"
                                    }, 
                                    {
                                        "text": "\"Thousands,\" A few thousand\" 1300-4500", 
                                        "id": "10"
                                    }, 
                                    {
                                        "text": "\"Several thousand\" 4501-8500", 
                                        "id": "11"
                                    }, 
                                    {
                                        "text": "\"Around ten thousand\" 8501-12000", 
                                        "id": "12"
                                    }, 
                                    {
                                        "text": "\"Well over ten thousand\" 1201-17000", 
                                        "id": "13"
                                    }, 
                                    {
                                        "text": "Tens of thousands 17001-30,000", 
                                        "id": "14"
                                    }, 
                                    {
                                        "text": "More than 30,000", 
                                        "id": "15"
                                    }
                                ]
                            }, 
                            {
                                "text": "Who estimated the number of police in attendance?", 
                                "type": "mc", 
                                "id": "11", 
                                "answers": [
                                    {
                                        "text": "Media", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Police", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "City official", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "Protester", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "Citizen or other person not affiliated with the camp, media, police, or city", 
                                        "id": "05"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "06"
                                    }, 
                                    {
                                        "text": "Other", 
                                        "id": "07"
                                    }
                                ]
                            }, 
                            {
                                "text": "Which of the following groups and identities were present at the event?", 
                                "type": "cl", 
                                "id": "12", 
                                "answers": [
                                    {
                                        "text": "Anarchists", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Homeless people", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Union members", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "Reinforcement campers from other cities", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "Religious leaders or communities", 
                                        "id": "05"
                                    }, 
                                    {
                                        "text": "Occupy the Hood protesters", 
                                        "id": "06"
                                    }, 
                                    {
                                        "text": "Other groups allied with Occupy", 
                                        "id": "07"
                                    }, 
                                    {
                                        "text": "African-American people", 
                                        "id": "08"
                                    }, 
                                    {
                                        "text": "Hispanic/Latino/Chicano people", 
                                        "id": "09"
                                    }, 
                                    {
                                        "text": "Asian-American/Pacific Islander people", 
                                        "id": "10"
                                    }, 
                                    {
                                        "text": "Native American people", 
                                        "id": "11"
                                    }, 
                                    {
                                        "text": "People under the age of 30", 
                                        "id": "12"
                                    }, 
                                    {
                                        "text": "Children", 
                                        "id": "13"
                                    }, 
                                    {
                                        "text": "Women", 
                                        "id": "14"
                                    }, 
                                    {
                                        "text": "Celebrities", 
                                        "id": "15"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "16"
                                    }
                                ]
                            }, 
                            {
                                "text": "Which of the following economic class groups were present at the event?", 
                                "type": "cl", 
                                "id": "13", 
                                "answers": [
                                    {
                                        "text": "A wide variety of classes", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Working/Lower (less than $25,000)", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Lower-Middle ($25,000-$49,999)", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "Middle ($50,000-$74,999)", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "Upper-Middle ($75,000-$100,000)", 
                                        "id": "05"
                                    }, 
                                    {
                                        "text": "Upper ($100,000+)", 
                                        "id": "06"
                                    }, 
                                    {
                                        "text": "The 1% ($250,000+)", 
                                        "id": "07"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "08"
                                    }
                                ]
                            }, 
                            {
                                "text": "Which of the following age groups were present at the event?", 
                                "type": "cl", 
                                "id": "14", 
                                "answers": [
                                    {
                                        "text": "A wide variety of ages", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Under 18", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "18-25", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "26-34", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "35-44", 
                                        "id": "05"
                                    }, 
                                    {
                                        "text": "45-64", 
                                        "id": "06"
                                    }, 
                                    {
                                        "text": "65+", 
                                        "id": "07"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "08"
                                    }
                                ]
                            }, 
                            {
                                "text": "Which of the following educational attainment groups were present at the event?", 
                                "type": "cl", 
                                "id": "15", 
                                "answers": [
                                    {
                                        "text": "People with a wide variety of educational attainment levels", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Less than high school diploma", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "High school diploma/GED", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "Some college (2 years or fewer)", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "College degree (B.A., B.S., trade school, technical school)", 
                                        "id": "05"
                                    }, 
                                    {
                                        "text": "Master's degree", 
                                        "id": "06"
                                    }, 
                                    {
                                        "text": "PhD", 
                                        "id": "07"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "08"
                                    }
                                ]
                            }, 
                            {
                                "text": "Which of the following job titles/occupations are held by people who attended the event?", 
                                "type": "cl", 
                                "id": "16", 
                                "answers": [
                                    {
                                        "text": "People with a wide variety of job titles/occupations", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Unemployed", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Teacher, professor", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "Business worker", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "Factory worker", 
                                        "id": "05"
                                    }, 
                                    {
                                        "text": "Caretaker", 
                                        "id": "06"
                                    }, 
                                    {
                                        "text": "Farmer", 
                                        "id": "07"
                                    }
                                ]
                            }, 
                            {
                                "text": "Which of the following information does the text give about when the event occurred?", 
                                "type": "mc", 
                                "id": "17", 
                                "answers": [
                                    {
                                        "text": "The exact start time", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "An approximate start time", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "The exact end time", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "An approximate end time", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "The duration (the length of time the event lasted after it began)", 
                                        "id": "05"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "06"
                                    }
                                ]
                            }, 
                            {
                                "text": "When exactly did the event begin?", 
                                "type": "tb", 
                                "id": "18", 
                                "answers": []
                            }, 
                            {
                                "text": "Approximately when did the event begin?", 
                                "type": "mc", 
                                "id": "19", 
                                "answers": [
                                    {
                                        "text": "Early morning (4am-9am)", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Late morning (9am-12pm)", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Afternoon (12pm-5pm)", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "Evening (5pm-8pm)", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "Night (8pm-11pm)", 
                                        "id": "05"
                                    }, 
                                    {
                                        "text": "Late night (11pm-4am)", 
                                        "id": "06"
                                    }
                                ]
                            }, 
                            {
                                "text": "When exactly did the event end?", 
                                "type": "tb", 
                                "id": "20", 
                                "answers": []
                            }, 
                            {
                                "text": "Approximately when did the event end?", 
                                "type": "mc", 
                                "id": "21", 
                                "answers": [
                                    {
                                        "text": "Early morning (4am-9am)", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Late morning (9am-12pm)", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Afternoon (12pm-5pm)", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "Evening (5pm-8pm)", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "Night (8pm-11pm)", 
                                        "id": "05"
                                    }, 
                                    {
                                        "text": "Late night (11pm-4am)", 
                                        "id": "06"
                                    }
                                ]
                            }, 
                            {
                                "text": "Approximately how long did the event last?", 
                                "type": "mc", 
                                "id": "22", 
                                "answers": [
                                    {
                                        "text": "***will add attributes***", 
                                        "id": "01"
                                    }
                                ]
                            }
                        ], 
                        "name": "Event setting and composition (location, attendance, time/duration)"
                    }, 
                    {
                        "id": "3", 
                        "questions": [
                            {
                                "text": "Which of the following information does the text give about arrests that occurred during the event?", 
                                "type": "mc", 
                                "id": "01", 
                                "answers": [
                                    {
                                        "text": "The exact number", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "An estimate or approximate number", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "03"
                                    }
                                ]
                            }, 
                            {
                                "text": "Exactly how many arrests occurred during the event? (If the text specifically states, \"no arrests were made,\" then type in the number 0)", 
                                "type": "tb", 
                                "id": "02", 
                                "answers": []
                            }, 
                            {
                                "text": "Approximately how many arrests occurred?", 
                                "type": "mc", 
                                "id": "03", 
                                "answers": [
                                    {
                                        "text": "1-5", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "5-10", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "10-25", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "25-50", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "50-100", 
                                        "id": "05"
                                    }, 
                                    {
                                        "text": "100+", 
                                        "id": "06"
                                    }
                                ]
                            }, 
                            {
                                "text": "Who was arrested?", 
                                "type": "cl", 
                                "id": "04", 
                                "answers": [
                                    {
                                        "text": "Protesters", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Counterprotesters", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Protesters from other cities", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "Independent", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "News reporters", 
                                        "id": "05"
                                    }, 
                                    {
                                        "text": "City official", 
                                        "id": "06"
                                    }, 
                                    {
                                        "text": "Other", 
                                        "id": "07"
                                    }
                                ]
                            }, 
                            {
                                "text": "Which of the following information does the text give about when the arrests occurred?", 
                                "type": "mc", 
                                "id": "05", 
                                "answers": [
                                    {
                                        "text": "The exact time", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "An approximate time", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "03"
                                    }
                                ]
                            }, 
                            {
                                "text": "Exactly when did the arrests occur?", 
                                "type": "tb", 
                                "id": "06", 
                                "answers": []
                            }, 
                            {
                                "text": "If no specific time is given, please highlight any words giving clues about what time the arrests occurred (e.g. \"hours after police warned protesters to leave the area\")", 
                                "type": "tb", 
                                "id": "07", 
                                "answers": []
                            }, 
                            {
                                "text": "Which of the following information does the text give about the number of protesters injured during the event?", 
                                "type": "mc", 
                                "id": "08", 
                                "answers": [
                                    {
                                        "text": "The exact number", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "An estimate or approximate number", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "03"
                                    }
                                ]
                            }, 
                            {
                                "text": "Exactly how many protesters were injured during the event? (If the text specifically states, \"no injuries occurred,\" then type in the number 0)", 
                                "type": "tb", 
                                "id": "09", 
                                "answers": []
                            }, 
                            {
                                "text": "Approximately how many protesters were injured during the event?", 
                                "type": "mc", 
                                "id": "10", 
                                "answers": [
                                    {
                                        "text": "1-5", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "5-10", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "10-25", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "25-50", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "50+", 
                                        "id": "05"
                                    }
                                ]
                            }, 
                            {
                                "text": "Which of the following information does the text give about when the protesters were injured?", 
                                "type": "mc", 
                                "id": "11", 
                                "answers": [
                                    {
                                        "text": "The exact time", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "An approximate time", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "03"
                                    }
                                ]
                            }, 
                            {
                                "text": "Exactly when were the protesters injured?", 
                                "type": "tb", 
                                "id": "12", 
                                "answers": []
                            }, 
                            {
                                "text": "If no specific time is given, please highlight any words giving clues about what time the arrests occurred (e.g. \"hours after police warned protesters to leave the area\")", 
                                "type": "tb", 
                                "id": "13", 
                                "answers": []
                            }, 
                            {
                                "text": "Which of the following information does the text give about the number of police injured during the event?", 
                                "type": "mc", 
                                "id": "14", 
                                "answers": [
                                    {
                                        "text": "The exact number", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "An estimate or approximate number", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "03"
                                    }
                                ]
                            }, 
                            {
                                "text": "Exactly how many police were injured during the event? (If the text specifically states, \"no injuries occurred,\" then type in the number 0)", 
                                "type": "tb", 
                                "id": "15", 
                                "answers": []
                            }, 
                            {
                                "text": "Approximately how many police were injured during the event?", 
                                "type": "mc", 
                                "id": "16", 
                                "answers": [
                                    {
                                        "text": "1-5", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "5-10", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "10-25", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "25-50", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "50+", 
                                        "id": "05"
                                    }
                                ]
                            }, 
                            {
                                "text": "Which of the following information does the text give about when the police were injured?", 
                                "type": "mc", 
                                "id": "17", 
                                "answers": [
                                    {
                                        "text": "The exact time", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "An approximate time", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "03"
                                    }
                                ]
                            }, 
                            {
                                "text": "Exactly when were the police injured?", 
                                "type": "tb", 
                                "id": "18", 
                                "answers": []
                            }, 
                            {
                                "text": "If no specific time is given, please highlight any words giving clues about what time the injuries occurred (e.g. \"hours after police warned protesters to leave the area\")", 
                                "type": "tb", 
                                "id": "19", 
                                "answers": []
                            }
                        ], 
                        "name": "Arrests/injuries"
                    }, 
                    {
                        "id": "4", 
                        "questions": [
                            {
                                "text": "Was the event permitted?", 
                                "type": "mc", 
                                "id": "01", 
                                "answers": [
                                    {
                                        "text": "Yes", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "No", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "03"
                                    }
                                ]
                            }, 
                            {
                                "text": "When does the event permit start?", 
                                "type": "tb", 
                                "id": "02", 
                                "answers": []
                            }, 
                            {
                                "text": "When does the event permit expire?", 
                                "type": "tb", 
                                "id": "03", 
                                "answers": []
                            }, 
                            {
                                "text": "Does the event permit come with conditions or requirements that the protesters must follow?", 
                                "type": "mc", 
                                "id": "04", 
                                "answers": [
                                    {
                                        "text": "Yes", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "No", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "03"
                                    }
                                ]
                            }, 
                            {
                                "text": "Which are conditions or requirements of the event permit? Select all that apply:", 
                                "type": "cl", 
                                "id": "05", 
                                "answers": [
                                    {
                                        "text": "Tents and other semi-permanent structures cannot be present", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Must not close the street", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Must not block the sidewalk", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "Must not block or restrict public property", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "Must not sell merchandise, food, or beverage", 
                                        "id": "05"
                                    }, 
                                    {
                                        "text": "Must not place signage or banners", 
                                        "id": "06"
                                    }, 
                                    {
                                        "text": "The crowd must not exceed a certain number of people", 
                                        "id": "07"
                                    }, 
                                    {
                                        "text": "Other", 
                                        "id": "08"
                                    }
                                ]
                            }, 
                            {
                                "text": "Was a permit necessary in order to hold the event, even though protesters did not acquire a permit?", 
                                "type": "mc", 
                                "id": "06", 
                                "answers": [
                                    {
                                        "text": "Yes", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "No", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "03"
                                    }
                                ]
                            }, 
                            {
                                "text": "Is the city government and/or police informally allowing the event, despite it not having a permit?", 
                                "type": "mc", 
                                "id": "07", 
                                "answers": [
                                    {
                                        "text": "Yes", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "No", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "03"
                                    }
                                ]
                            }
                        ], 
                        "name": "Permit"
                    }, 
                    {
                        "id": "5", 
                        "questions": [
                            {
                                "text": "Which of the following parties responded to the event?", 
                                "type": "cl", 
                                "id": "01", 
                                "answers": [
                                    {
                                        "text": "Individual affiliated with the event", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Passerby/onlooker, individual not affiliated with the event (ex. citizens, local business owners)", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Community group that is not Occupy (ex. church, interest group, local organization)", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "City government official", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "Celebrity or politician", 
                                        "id": "05"
                                    }, 
                                    {
                                        "text": "Other", 
                                        "id": "06"
                                    }, 
                                    {
                                        "text": "Information not given", 
                                        "id": "07"
                                    }
                                ]
                            }, 
                            {
                                "text": "What was the party's level of support?", 
                                "type": "mc", 
                                "id": "02", 
                                "answers": [
                                    {
                                        "text": "Strongly unsupportive, very negative, oppositional", 
                                        "id": "01"
                                    }, 
                                    {
                                        "text": "Somewhat unsupportive, slightly negative", 
                                        "id": "02"
                                    }, 
                                    {
                                        "text": "Neutral", 
                                        "id": "03"
                                    }, 
                                    {
                                        "text": "Somewhat supportive, slightly positive", 
                                        "id": "04"
                                    }, 
                                    {
                                        "text": "Strongly supportive, very positive, enthusiastic", 
                                        "id": "05"
                                    }
                                ]
                            }
                        ], 
                        "name": "Community response"
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
            "text": "Occupy Boston takes a page from the radical underground\nThe Anarchist's Playbook\nBy LIZ PELLY  |  October 12, 2011\n\n\nOccupy Boston takes a page from the radical underground\nThe Anarchist's Playbook\nJust hours after his men finished wiping the Greenway's manicured gardens with the bellies, knees, and faces of Occupy Boston last Tuesday, the BPD top cop attempted to create dissent by blaming a familiar bogeyman: the \"anarchists.\"\nBPD Commissioner Ed Davis told the BostonHerald on Tuesday that he had no problem with the real protesters. \"The (Occupation) group that was here for the first 10 days was working very closely with us,\" he said, \"but they warned us yesterday morning that a new group, the anarchists, wanted to take control.\"\nOccupy Boston scoffed at that statement \u2014 suggesting that the BPD was using a loaded term to turn public opinion against a nonviolent movement. \"Any 'anarchists' who tried to disrupt the peaceful protests were BPD plants,\" the group tweeted from its official @occupy_boston account. \"Our anarchists linked arms and sang songs. Peacefully.\"\nIn fact, the Occupy movement is deeply rooted in anarchist traditions and values. Many of the national Occupy movement's organizational tools \u2014 the lengthy general assemblies, the finger-waggling exercises in consensus-building, the free food and clothing available throughout camp \u2014 come from anarchist models of direct action, horizontal organizing, and gift economies.\nIn Boston specifically, Occupy draws on the experiences of the local direct-action activist community: the anarchists and DIY enthusiasts who have long organized non-hierarchically in collective houses and radical book shops. The current occupation in Dewey Square is ultimately providing a national stage for a fringe population that has espoused these anti-corporate ideals for years. But suddenly \u2014 as the protesters chanted to the BPD on Sunday night \u2014 \"the whole world is watching.\"\nZaina (the activists interviewed asked that we not use their last names) is a 20-year-old BU student who volunteers in Occupy Boston's food tent. She's also a veteran of Food Not Bombs, an international grassroots network of independent groups that serve free vegetarian meals to all comers. Using mostly salvaged food, Food Not Bombs, like Occupy, is distinctly anti-capitalist. Before the Occupation, FNB's focus was on providing two meals a week \u2014 one in Central Square, one in Boston Common \u2014 mostly to homeless people and traveling kids. Now, Zaina and other FNB regulars work alongside other Occupy volunteers, serving food around the clock to the camp's residents and visitors; they've already fed hundreds.\nIn the next tent over from food, the \"Really Really Free Market\" offers a space where anyone can drop off unwanted items (mostly clothing) and/or pick up something they need \u2014 for free. It's based on the radical anarchist concept of a \"gift economy.\" In stark contrast to market economies, there's no expectation of direct compensation for giving. Local collective houses organized RRFMs in Allston's Ringer Park throughout this past summer.\nBut the influence of anarchist culture on the Occupation goes beyond the notion of a free exchange of goods and services. For good or ill, the interminable, self-involved \"general assemblies\" \u2014 something often picked out as a weakness of the Occupy movement \u2014 also have their roots in the anarchist underground. It's called \"horizontal organizing,\" decision-making without a command hierarchy or a leader.\n\"I don't think consensus organizing and horizontal organizing is exclusively anarchist,\" says Jacob, who lives in a cooperative house in lower Allston. \"But it is an idea that we use and love. And I think that it is really addictive. When you participate in a collaborative process, long and slow as it is, at the end . . . every time we pass a decision, the crowd at the GA just roars. Just because we made it, we got through, we heard everybody's voice. And it feels good. . . . It's crazy. And so beautiful.\"\nAs the Occupy movement spreads to dozens of cities, it is bringing with it a new organizational structure that is fundamentally different from the marches and the protests of the Civil Rights era and, later, progressive protests against the Vietnam war.\nFor anarchists, the Occupy movement is transforming their intrinsic daily practices into tactics utilized by the masses.\n\"When I go to meetings, we do the twinkles all the time,\" says Zaina, referring to the now-ubiquitous hand gesture that indicates an occupier's support for a given idea. \"And to see hundreds of people doing that now is so great. . . . This has been spread across so many people, you just look around, and you see 200 people doing the twinkles, and it's just so great.\"\nOccupy  Boston protesters march alongside Veterans for Peace, as well as other activist groups such as Jobs with Justice and the AFL-CIO, at Downtown Crossing on October 13, 2011.\nOn November 17, 2011, hundreds of Occupy Boston and MassUniting marchers (labor unions, community organizers; SEUI, Local Ironworkers, Jobs for Justice, and more) took to the city streets again in solidarity with another global day of action.", 
            "offsets": [
                [
                    4960, 
                    5202
                ]
            ]
        }
    ]
}
    res.send(tuas);
  })
  app.use('/api/', mockServerRouter);
};