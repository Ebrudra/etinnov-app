export default[
    {
        name:'Lesson Plan Generator',
        description:'Creates detailed lesson plans based on specific topics and learning objectives',
        category:'Lesson Planning and Curriculum Development',
        icon:'https://cdn-icons-png.flaticon.com/128/9316/9316703.png',
        aiPrompt:'Generate detailed lesson plans in the selected output language, based on subject, grade, topic and learning objectives',
        slug:'lesson-plan-generator',
        form:[
            {
                label:'Select the output language',
                field:'language',
                name:'language',
                required:true
            },
            {
                label:'Enter the subject',
                field:'input',
                name:'subject',
                required:true
            },
            {
                label:'Select the grade level',
                field:'grade',
                name:'grade',
                required:true
            },
            {
                label:'Enter the topic',
                field:'textarea',
                name:'topic',
                required:true
            },
            {
                label:'Enter the learning objectives (optional)',
                field:'textarea',
                name:'objectives',
                required:false
            }
        ]
    },
    {
        name:'Unit Outline Creator',
        description:'Develops a comprehensive outline for a teaching unit',
        category:'Lesson Planning and Curriculum Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/2620/2620445.png',
        aiPrompt:'Generate a comprehensive outline for a teaching unit in the selected output language, based on subject, grade, unit topic, Number of Sessions and duration per session (in minutes)',
        slug:'unit-outline-creator',
        form:[
            {
                label:'Select the output language',
                field:'language',
                name:'language',
                required:true
            },
            {
                label:'Enter the subject',
                field:'input',
                name:'subject',
                required:true
            },
            {
                label:'Select the grade level',
                field:'grade',
                name:'grade',
                required:true
            },
            {
                label:'Enter the unit topic',
                field:'input',
                name:'unittopic',
                required:true
            },
            {
                label:'Number of Sessions',
                field:'number',
                name:'sessions',
                required:true
            },
            {
                label:'Duration (minutes)',
                field:'number',
                name:'duration',
                required:true
            }
        ]
    },
    {
        name:'Activity Designer',
        description:'Generates creative activities aligned with learning goals',
        category:'Lesson Planning and Curriculum Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/3652/3652191.png',
        aiPrompt:'Generate a creative activity aligned with learning goals in the selected output language, based on subject, learning objective, and time available(in minutes)',
        slug:'activity-designer',
        form:[
            {
                label:'Select the output language',
                field:'language',
                name:'language',
                required:true
            },
            {
                label:'Enter the subject',
                field:'input',
                name:'subject',
                required:true
            },
            {
                label:'Select the grade level',
                field:'grade',
                name:'grade',
                required:true
            },
            {
                label:'time available (minutes)',
                field:'number',
                name:'time',
                required:true
            },
            {
                label:'Enter the learning objectives',
                field:'textarea',
                name:'objectives',
                required:true
            }
        ]
    },
    {
        name: 'Behavior Management Strategist',
        description: 'Suggests strategies for managing classroom behavior',
        category: 'Classroom Instruction and Management',
        icon: 'https://cdn-icons-png.flaticon.com/128/4207/4207247.png',
        aiPrompt: 'Generate effective strategies for managing classroom behavior based on the specific behavior issue and grade level provided',
        slug: 'behavior-management-strategist',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Describe the specific behavior issue',
                field: 'textarea',
                name: 'behaviorIssue',
                required: true
            },
            {
                label: 'Select the grade level',
                field: 'grade',
                name: 'grade',
                required: true
            }
        ]
    },
    {
        name: 'Differentiation Assistant',
        description: 'Provides ideas for differentiating instruction',
        category: 'Classroom Instruction and Management',
        icon: 'https://cdn-icons-png.flaticon.com/128/2436/2436874.png',
        aiPrompt: 'Generate ideas for differentiating instruction based on the lesson topic and student ability levels provided',
        slug: 'differentiation-assistant',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the lesson topic',
                field: 'input',
                name: 'lessonTopic',
                required: true
            },
            {
                label: 'Describe the student ability levels',
                field: 'textarea',
                name: 'abilityLevels',
                required: true
            }
        ]
    },
    {
        name: 'Transition Planner',
        description: 'Creates smooth transitions between activities',
        category: 'Classroom Instruction and Management',
        icon: 'https://cdn-icons-png.flaticon.com/128/5199/5199939.png',
        aiPrompt: 'Generate a plan for smooth transitions between activities based on the current activity, next activity, and time available',
        slug: 'transition-planner',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Describe the current activity',
                field: 'textarea',
                name: 'currentActivity',
                required: true
            },
            {
                label: 'Describe the next activity',
                field: 'textarea',
                name: 'nextActivity',
                required: true
            },
            {
                label: 'Time available for transition (in minutes)',
                field: 'number',
                name: 'transitionTime',
                required: true
            }
        ]
    },
    {
        name: 'Quiz Generator',
        description: 'Creates quizzes based on specific content',
        category: 'Assessment and Evaluation',
        icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968528.png',
        aiPrompt: 'Generate a quiz based on the subject, topic, and difficulty level provided',
        slug: 'quiz-generator',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the subject',
                field: 'input',
                name: 'subject',
                required: true
            },
            {
                label: 'Enter the topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Select the difficulty level',
                field: 'select',
                name: 'difficultyLevel',
                required: true,
                options: [
                    { value: 'easy', label: 'Easy' },
                    { value: 'medium', label: 'Medium' },
                    { value: 'hard', label: 'Hard' }
                ]
            }
        ]
    },
    {
        name: 'Rubric Creator',
        description: 'Develops assessment rubrics for various assignments',
        category: 'Assessment and Evaluation',
        icon: 'https://cdn-icons-png.flaticon.com/128/1205/1205526.png',
        aiPrompt: 'Generate an assessment rubric based on the assignment type, grade level, and key criteria provided',
        slug: 'rubric-creator',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the assignment type',
                field: 'input',
                name: 'assignmentType',
                required: true
            },
            {
                label: 'Select the grade level',
                field: 'grade',
                name: 'grade',
                required: true
            },
            {
                label: 'Enter the key criteria (comma-separated)',
                field: 'textarea',
                name: 'keyCriteria',
                required: true
            }
        ]
    },
    {
        name: 'Performance Analyzer',
        description: 'Analyzes class performance data and suggests improvements',
        category: 'Assessment and Evaluation',
        icon: 'https://cdn-icons-png.flaticon.com/128/3048/3048355.png',
        aiPrompt: 'Analyze the provided class test scores and assignment results, then suggest improvements',
        slug: 'performance-analyzer',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter class test scores (comma-separated)',
                field: 'textarea',
                name: 'testScores',
                required: true
            },
            {
                label: 'Enter assignment results (comma-separated)',
                field: 'textarea',
                name: 'assignmentResults',
                required: true
            },
            {
                label: 'Additional context (optional)',
                field: 'textarea',
                name: 'context',
                required: false
            }
        ]
    },
    {
        name: 'Interactive Activity Designer',
        description: 'Generates ideas for engaging, hands-on activities',
        category: 'Student Engagement and Personalized Learning',
        icon: 'https://cdn-icons-png.flaticon.com/128/2436/2436857.png',
        aiPrompt: 'Generate ideas for engaging, hands-on activities based on the subject, topic, and grade level provided',
        slug: 'interactive-activity-designer',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the subject',
                field: 'input',
                name: 'subject',
                required: true
            },
            {
                label: 'Enter the topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Select the grade level',
                field: 'grade',
                name: 'grade',
                required: true
            }
        ]
    },
    {
        name: 'Learning Style Adapter',
        description: 'Suggests ways to adapt lessons for different learning styles',
        category: 'Student Engagement and Personalized Learning',
        icon: 'https://cdn-icons-png.flaticon.com/128/2436/2436873.png',
        aiPrompt: 'Suggest ways to adapt the given lesson topic for the specified target learning style',
        slug: 'learning-style-adapter',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the lesson topic',
                field: 'input',
                name: 'lessonTopic',
                required: true
            },
            {
                label: 'Select the target learning style',
                field: 'select',
                name: 'learningStyle',
                required: true,
                options: [
                    { value: 'visual', label: 'Visual' },
                    { value: 'auditory', label: 'Auditory' },
                    { value: 'kinesthetic', label: 'Kinesthetic' },
                    { value: 'reading-writing', label: 'Reading/Writing' }
                ]
            }
        ]
    },
    {
        name: 'Individualized Learning Plan Creator',
        description: 'Develops personalized learning plans',
        category: 'Student Engagement and Personalized Learning',
        icon: 'https://cdn-icons-png.flaticon.com/128/2436/2436876.png',
        aiPrompt: 'Create a personalized learning plan based on the student\'s strengths, weaknesses, and goals',
        slug: 'individualized-learning-plan-creator',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter student strengths',
                field: 'textarea',
                name: 'strengths',
                required: true
            },
            {
                label: 'Enter student weaknesses',
                field: 'textarea',
                name: 'weaknesses',
                required: true
            },
            {
                label: 'Enter student goals',
                field: 'textarea',
                name: 'goals',
                required: true
            },
            {
                label: 'Select the grade level',
                field: 'grade',
                name: 'grade',
                required: true
            }
        ]
    },
    {
        name: 'Parent Communication Template',
        description: 'Creates templates for various types of parent communications',
        category: 'Communication and Collaboration',
        icon: 'https://cdn-icons-png.flaticon.com/128/2343/2343741.png',
        aiPrompt: 'Generate a parent communication template based on the communication purpose and student information provided',
        slug: 'parent-communication-template',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Select the communication purpose',
                field: 'select',
                name: 'communicationPurpose',
                required: true,
                options: [
                    { value: 'progress-report', label: 'Progress Report' },
                    { value: 'behavior-update', label: 'Behavior Update' },
                    { value: 'event-invitation', label: 'Event Invitation' },
                    { value: 'general-announcement', label: 'General Announcement' }
                ]
            },
            {
                label: 'Enter student information',
                field: 'textarea',
                name: 'studentInfo',
                required: true
            }
        ]
    },
    {
        name: 'Collaborative Project Planner',
        description: 'Designs group projects that encourage teamwork',
        category: 'Communication and Collaboration',
        icon: 'https://cdn-icons-png.flaticon.com/128/1180/1180993.png',
        aiPrompt: 'Design a collaborative group project based on the subject, group size, and project duration provided',
        slug: 'collaborative-project-planner',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the subject',
                field: 'input',
                name: 'subject',
                required: true
            },
            {
                label: 'Enter the group size',
                field: 'number',
                name: 'groupSize',
                required: true
            },
            {
                label: 'Enter the project duration (in days)',
                field: 'number',
                name: 'projectDuration',
                required: true
            },
            {
                label: 'Select the grade level',
                field: 'grade',
                name: 'grade',
                required: true
            }
        ]
    },
    {
        name: 'Student Feedback Composer',
        description: 'Generates constructive and encouraging feedback',
        category: 'Communication and Collaboration',
        icon: 'https://cdn-icons-png.flaticon.com/128/1886/1886910.png',
        aiPrompt: 'Generate constructive and encouraging feedback based on the student\'s work and areas for improvement',
        slug: 'student-feedback-composer',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Describe the student\'s work',
                field: 'textarea',
                name: 'studentWork',
                required: true
            },
            {
                label: 'List areas for improvement',
                field: 'textarea',
                name: 'areasForImprovement',
                required: true
            },
            {
                label: 'Select the grade level',
                field: 'grade',
                name: 'grade',
                required: true
            }
        ]
    },
    {
        name: 'Meeting Agenda Creator',
        description: 'Develops agendas for staff meetings',
        category: 'Administrative Tasks and Professional Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/2910/2910791.png',
        aiPrompt: 'Create a meeting agenda based on the meeting purpose, attendees, and duration provided',
        slug: 'meeting-agenda-creator',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the meeting purpose',
                field: 'textarea',
                name: 'meetingPurpose',
                required: true
            },
            {
                label: 'Enter the attendees (comma-separated)',
                field: 'input',
                name: 'attendees',
                required: true
            },
            {
                label: 'Enter the meeting duration (in minutes)',
                field: 'number',
                name: 'duration',
                required: true
            }
        ]
    },
    {
        name: 'Professional Development Plan',
        description: 'Creates personalized teacher growth plans',
        category: 'Administrative Tasks and Professional Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/1067/1067357.png',
        aiPrompt: 'Generate a personalized professional development plan based on the teacher\'s goals and areas for improvement',
        slug: 'professional-development-plan',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter teacher\'s goals',
                field: 'textarea',
                name: 'teacherGoals',
                required: true
            },
            {
                label: 'Enter areas for improvement',
                field: 'textarea',
                name: 'areasForImprovement',
                required: true
            },
            {
                label: 'Enter current teaching level',
                field: 'select',
                name: 'teachingLevel',
                required: true,
                options: [
                    { value: 'elementary', label: 'Elementary' },
                    { value: 'middle', label: 'Middle School' },
                    { value: 'high', label: 'High School' },
                    { value: 'higher', label: 'Higher Education' }
                ]
            }
        ]
    },
    {
        name: 'Classroom Inventory Manager',
        description: 'Helps track and organize classroom resources',
        category: 'Administrative Tasks and Professional Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/3500/3500833.png',
        aiPrompt: 'Generate an organized inventory list and suggestions for needed items based on the current inventory and items needed',
        slug: 'classroom-inventory-manager',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter current inventory (comma-separated)',
                field: 'textarea',
                name: 'currentInventory',
                required: true
            },
            {
                label: 'Enter needed items (comma-separated)',
                field: 'textarea',
                name: 'neededItems',
                required: true
            },
            {
                label: 'Select the grade level',
                field: 'grade',
                name: 'grade',
                required: true
            }
        ]
    },
    {
        name: 'Math Problem Generator',
        description: 'Creates custom math problems for various topics',
        category: 'Subject-Specific Support',
        icon: 'https://cdn-icons-png.flaticon.com/128/897/897368.png',
        aiPrompt: 'Generate custom math problems based on the math topic and difficulty level provided',
        slug: 'math-problem-generator',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the math topic',
                field: 'input',
                name: 'mathTopic',
                required: true
            },
            {
                label: 'Select the difficulty level',
                field: 'select',
                name: 'difficultyLevel',
                required: true,
                options: [
                    { value: 'easy', label: 'Easy' },
                    { value: 'medium', label: 'Medium' },
                    { value: 'hard', label: 'Hard' }
                ]
            },
            {
                label: 'Select the grade level',
                field: 'grade',
                name: 'grade',
                required: true
            }
        ]
    },
    {
        name: 'Science Experiment Designer',
        description: 'Develops age-appropriate science experiments',
        category: 'Subject-Specific Support',
        icon: 'https://cdn-icons-png.flaticon.com/128/2941/2941552.png',
        aiPrompt: 'Design an age-appropriate science experiment based on the science concept, grade level, and available materials provided',
        slug: 'science-experiment-designer',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the science concept',
                field: 'input',
                name: 'scienceConcept',
                required: true
            },
            {
                label: 'Select the grade level',
                field: 'grade',
                name: 'grade',
                required: true
            },
            {
                label: 'List available materials (comma-separated)',
                field: 'textarea',
                name: 'availableMaterials',
                required: true
            }
        ]
    },
    {
        name: 'Language Arts Prompt Generator',
        description: 'Creates writing prompts for various genres',
        category: 'Subject-Specific Support',
        icon: 'https://cdn-icons-png.flaticon.com/128/3655/3655544.png',
        aiPrompt: 'Generate a writing prompt based on the writing genre and grade level provided',
        slug: 'language-arts-prompt-generator',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Select the writing genre',
                field: 'select',
                name: 'writingGenre',
                required: true,
                options: [
                    { value: 'narrative', label: 'Narrative' },
                    { value: 'expository', label: 'Expository' },
                    { value: 'persuasive', label: 'Persuasive' },
                    { value: 'descriptive', label: 'Descriptive' },
                    { value: 'poetry', label: 'Poetry' }
                ]
            },
            {
                label: 'Select the grade level',
                field: 'grade',
                name: 'grade',
                required: true
            },
            {
                label: 'Additional context (optional)',
                field: 'textarea',
                name: 'additionalContext',
                required: false
            }
        ]
    },
    // 8. Research and Information Gathering
    {
        name: 'Research Question Formulator',
        description: 'Helps craft effective research questions',
        category: 'Research and Information Gathering',
        icon: 'https://cdn-icons-png.flaticon.com/128/3406/3406886.png',
        aiPrompt: 'Generate effective research questions based on the general topic area and grade level provided',
        slug: 'research-question-formulator',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the general topic area',
                field: 'input',
                name: 'topicArea',
                required: true
            },
            {
                label: 'Select the grade level',
                field: 'grade',
                name: 'grade',
                required: true
            }
        ]
    },
    {
        name: 'Resource Curator',
        description: 'Finds and organizes relevant educational resources',
        category: 'Research and Information Gathering',
        icon: 'https://cdn-icons-png.flaticon.com/128/2769/2769104.png',
        aiPrompt: 'Curate and organize relevant educational resources based on the subject, topic, and resource type provided',
        slug: 'resource-curator',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the subject',
                field: 'input',
                name: 'subject',
                required: true
            },
            {
                label: 'Enter the topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Select the resource type',
                field: 'select',
                name: 'resourceType',
                required: true,
                options: [
                    { value: 'articles', label: 'Articles' },
                    { value: 'videos', label: 'Videos' },
                    { value: 'interactive', label: 'Interactive Resources' },
                    { value: 'books', label: 'Books' },
                    { value: 'websites', label: 'Websites' }
                ]
            }
        ]
    },
    {
        name: 'Fact Checker',
        description: 'Verifies information for accuracy',
        category: 'Research and Information Gathering',
        icon: 'https://cdn-icons-png.flaticon.com/128/4266/4266338.png',
        aiPrompt: 'Verify the accuracy of the provided statement or fact and provide reliable sources for confirmation',
        slug: 'fact-checker',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the statement or fact to be checked',
                field: 'textarea',
                name: 'statementToCheck',
                required: true
            },
            {
                label: 'Provide any context (optional)',
                field: 'textarea',
                name: 'context',
                required: false
            }
        ]
    },

    // 9. Creative and Fun Educational Activities
    {
        name: 'Educational Game Designer',
        description: 'Creates educational games based on learning objectives',
        category: 'Creative and Fun Educational Activities',
        icon: 'https://cdn-icons-png.flaticon.com/128/2420/2420457.png',
        aiPrompt: 'Design an educational game based on the subject, learning objective, and game type provided',
        slug: 'educational-game-designer',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the subject',
                field: 'input',
                name: 'subject',
                required: true
            },
            {
                label: 'Enter the learning objective',
                field: 'textarea',
                name: 'learningObjective',
                required: true
            },
            {
                label: 'Select the game type',
                field: 'select',
                name: 'gameType',
                required: true,
                options: [
                    { value: 'board', label: 'Board Game' },
                    { value: 'card', label: 'Card Game' },
                    { value: 'quiz', label: 'Quiz Game' },
                    { value: 'roleplay', label: 'Role-playing Game' },
                    { value: 'physical', label: 'Physical Activity Game' }
                ]
            },
            {
                label: 'Select the grade level',
                field: 'grade',
                name: 'grade',
                required: true
            }
        ]
    },
    {
        name: 'Virtual Field Trip Planner',
        description: 'Plans engaging virtual field trips',
        category: 'Creative and Fun Educational Activities',
        icon: 'https://cdn-icons-png.flaticon.com/128/1141/1141073.png',
        aiPrompt: 'Plan an engaging virtual field trip based on the subject, destination, and grade level provided',
        slug: 'virtual-field-trip-planner',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the subject',
                field: 'input',
                name: 'subject',
                required: true
            },
            {
                label: 'Enter the virtual destination',
                field: 'input',
                name: 'destination',
                required: true
            },
            {
                label: 'Select the grade level',
                field: 'grade',
                name: 'grade',
                required: true
            },
            {
                label: 'Enter any specific learning goals (optional)',
                field: 'textarea',
                name: 'learningGoals',
                required: false
            }
        ]
    },
    {
        name: 'Brain Break Generator',
        description: 'Suggests quick, fun activities to re-energize students',
        category: 'Creative and Fun Educational Activities',
        icon: 'https://cdn-icons-png.flaticon.com/128/2620/2620363.png',
        aiPrompt: 'Generate a quick, fun brain break activity based on the time available and physical space provided',
        slug: 'brain-break-generator',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter time available (in minutes)',
                field: 'number',
                name: 'timeAvailable',
                required: true
            },
            {
                label: 'Describe the physical space',
                field: 'textarea',
                name: 'physicalSpace',
                required: true
            },
            {
                label: 'Select the grade level',
                field: 'grade',
                name: 'grade',
                required: true
            }
        ]
    },
    // 10. Writing and Language Support
    {
        name: 'Grammar Exercise Creator',
        description: 'Generates grammar exercises tailored to specific needs',
        category: 'Writing and Language Support',
        icon: 'https://cdn-icons-png.flaticon.com/128/3094/3094927.png',
        aiPrompt: 'Create grammar exercises based on the specific grammar concept and difficulty level provided',
        slug: 'grammar-exercise-creator',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the grammar concept',
                field: 'input',
                name: 'grammarConcept',
                required: true
            },
            {
                label: 'Select the difficulty level',
                field: 'select',
                name: 'difficultyLevel',
                required: true,
                options: [
                    { value: 'beginner', label: 'Beginner' },
                    { value: 'intermediate', label: 'Intermediate' },
                    { value: 'advanced', label: 'Advanced' }
                ]
            },
            {
                label: 'Select the grade level',
                field: 'grade',
                name: 'grade',
                required: true
            }
        ]
    },
    {
        name: 'Creative Writing Prompt Generator',
        description: 'Creates engaging prompts for creative writing',
        category: 'Writing and Language Support',
        icon: 'https://cdn-icons-png.flaticon.com/128/3075/3075546.png',
        aiPrompt: 'Generate an engaging creative writing prompt based on the genre, grade level, and theme provided',
        slug: 'creative-writing-prompt-generator',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Select the genre',
                field: 'select',
                name: 'genre',
                required: true,
                options: [
                    { value: 'fiction', label: 'Fiction' },
                    { value: 'non-fiction', label: 'Non-Fiction' },
                    { value: 'poetry', label: 'Poetry' },
                    { value: 'script', label: 'Script' }
                ]
            },
            {
                label: 'Select the grade level',
                field: 'grade',
                name: 'grade',
                required: true
            },
            {
                label: 'Enter a theme (optional)',
                field: 'input',
                name: 'theme',
                required: false
            }
        ]
    },
    {
        name: 'Language Learning Activity Designer',
        description: 'Develops activities for language acquisition',
        category: 'Writing and Language Support',
        icon: 'https://cdn-icons-png.flaticon.com/128/3898/3898085.png',
        aiPrompt: 'Design a language learning activity based on the target language, proficiency level, and skill area provided',
        slug: 'language-learning-activity-designer',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the target language',
                field: 'input',
                name: 'targetLanguage',
                required: true
            },
            {
                label: 'Select the proficiency level',
                field: 'select',
                name: 'proficiencyLevel',
                required: true,
                options: [
                    { value: 'beginner', label: 'Beginner' },
                    { value: 'intermediate', label: 'Intermediate' },
                    { value: 'advanced', label: 'Advanced' }
                ]
            },
            {
                label: 'Select the skill area',
                field: 'select',
                name: 'skillArea',
                required: true,
                options: [
                    { value: 'speaking', label: 'Speaking' },
                    { value: 'listening', label: 'Listening' },
                    { value: 'reading', label: 'Reading' },
                    { value: 'writing', label: 'Writing' }
                ]
            }
        ]
    },

    // 11. Technology Integration in Education
    {
        name: 'Ed Tech Tool Recommender',
        description: 'Suggests appropriate educational technology tools',
        category: 'Technology Integration in Education',
        icon: 'https://cdn-icons-png.flaticon.com/128/3437/3437364.png',
        aiPrompt: 'Recommend appropriate educational technology tools based on the subject, purpose, and student age provided',
        slug: 'ed-tech-tool-recommender',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the subject',
                field: 'input',
                name: 'subject',
                required: true
            },
            {
                label: 'Describe the purpose',
                field: 'textarea',
                name: 'purpose',
                required: true
            },
            {
                label: 'Enter the student age range',
                field: 'input',
                name: 'studentAge',
                required: true
            }
        ]
    },
    {
        name: 'Digital Lesson Converter',
        description: 'Helps adapt traditional lessons for online learning',
        category: 'Technology Integration in Education',
        icon: 'https://cdn-icons-png.flaticon.com/128/2436/2436882.png',
        aiPrompt: 'Adapt the provided traditional lesson plan for online learning, considering the target platform',
        slug: 'digital-lesson-converter',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Enter the original lesson plan',
                field: 'textarea',
                name: 'originalLessonPlan',
                required: true
            },
            {
                label: 'Select the target platform',
                field: 'select',
                name: 'targetPlatform',
                required: true,
                options: [
                    { value: 'zoom', label: 'Zoom' },
                    { value: 'msteams', label: 'Microsoft Teams' },
                    { value: 'googleclassroom', label: 'Google Classroom' },
                    { value: 'moodle', label: 'Moodle' },
                    { value: 'canvas', label: 'Canvas' }
                ]
            },
            {
                label: 'Select the grade level',
                field: 'grade',
                name: 'grade',
                required: true
            }
        ]
    },
    {
        name: 'Coding Project Ideas Generator',
        description: 'Creates coding project ideas for various skill levels',
        category: 'Technology Integration in Education',
        icon: 'https://cdn-icons-png.flaticon.com/128/1005/1005141.png',
        aiPrompt: 'Generate coding project ideas based on the programming language and student skill level provided',
        slug: 'coding-project-ideas-generator',
        form: [
            {
                label: 'Select the output language',
                field: 'language',
                name: 'language',
                required: true
            },
            {
                label: 'Select the programming language',
                field: 'select',
                name: 'programmingLanguage',
                required: true,
                options: [
                    { value: 'scratch', label: 'Scratch' },
                    { value: 'python', label: 'Python' },
                    { value: 'javascript', label: 'JavaScript' },
                    { value: 'java', label: 'Java' },
                    { value: 'csharp', label: 'C#' }
                ]
            },
            {
                label: 'Select the student skill level',
                field: 'select',
                name: 'skillLevel',
                required: true,
                options: [
                    { value: 'beginner', label: 'Beginner' },
                    { value: 'intermediate', label: 'Intermediate' },
                    { value: 'advanced', label: 'Advanced' }
                ]
            },
            {
                label: 'Enter any specific themes or topics (optional)',
                field: 'input',
                name: 'themes',
                required: false
            }
        ]
    }
]