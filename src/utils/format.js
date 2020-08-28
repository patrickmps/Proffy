const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-Feira",
    "Sábado",
]

//Funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1;
    return subjects[position];
}

function convertHoursToMinutes(time) {
    const [ hour, minutes ] = time.split(":")
    return Number.parseInt((hour * 60) + minutes)
}

function redirectSucessFilters(req, res) {
    let queryString = "?subject=" + req.body.subject
    queryString += "&weekday=" + req.body.weekday[0]
    queryString += "&time=" + req.body.time_from[0]
    
    return res.redirect('/study'+queryString)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes,
    redirectSucessFilters
}