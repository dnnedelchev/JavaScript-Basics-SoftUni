function soothsayer(value) {
    var numbers = value[0],
        languages = value[1],
        cities = value[2],
        cars = value[3];
    var result = [numbers[Math.floor(Math.random() * 4)],
                  languages[Math.floor(Math.random() * 4)],
                  cities[Math.floor(Math.random() * 4)],
                  cars[Math.floor(Math.random() * 4)],];
    return result;
}

function print(result) {
    console.log('You will work ' + result[0] + ' years on ' + result[1] + '. You will live in ' + result[2] + ' and drive ' + result[3] + '.');
}

print(soothsayer([[3, 5, 2, 7, 9], ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'], ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'], ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']]) );