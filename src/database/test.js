const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //Inserir dados
    proffyValue = {
        name: 'Patrick Mota',
        avatar: 'https://avatars0.githubusercontent.com/u/58093259?s=460&v=4',
        whatsapp: '77999846129',
        bio: 'Sou foda!',
    }

    classValue = {
        subject: 1,
        cost: "1.000.000",
        //o proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados após cadastrar a aula
        {
            weekday: 0,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 1,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar os dados inseridos

    //todos os proffys
    const selectedProffys =  await db.all("SELECT * FROM proffys")

    //consultar as classes de um determinado professor e trazer os dados dele junto
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "1"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

})