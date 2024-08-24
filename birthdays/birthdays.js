function createBirthday(name, month, day) {
    var birthday = {
        name: name,
        month: month,
        day: day
    }
    return birthday
}

function celebrateBirthday(birthday){
    return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`
   
}

function countBirthdays(birthdays, month){
    var count = 0

    for (let i = 0; i < birthdays.length; i++) {
        if(birthdays[i].month === month){
            count ++
        }
    }
    return count
}

module.exports = {  
    createBirthday,
    celebrateBirthday,
    countBirthdays
};

/*
function createBirthday(name, month, day) {
    return {
        name: name,
        month: month,
        day: day
    };
}

function celebrateBirthday(personObject){
    return `Today is ${personObject.month}/${personObject.day}! Happy birthday, ${personObject.name}!`
}
function countBirthdays(birthdayArray, month){
    var monthCount = 0
    for (var i = 0; i < birthdayArray.length; i++){
        if (month === birthdayArray[i].month)
        monthCount ++
    }
    return monthCount
}
*/