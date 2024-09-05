export default[
    {
        name:'Activity Designer',
        description:'Generates creative activities aligned with learning goals',
        category:'Lesson Planning and Curriculum Development',
        icon:'https://cdn-icons-png.flaticon.com/128/9316/9316703.png',
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
    }
]




