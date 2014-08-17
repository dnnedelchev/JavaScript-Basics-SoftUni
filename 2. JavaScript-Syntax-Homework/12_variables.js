function variablesTypes(value) {
    var name = value[0];
    var age = value[1];
    var isMale = value[2];
    var favoriteFoods = value[3];
    var result = '"My name: ' + name + ' //type is ' + typeof name + '\n' +
                 'My age: ' + age + ' //type is ' + typeof age + '\n' +
                 'I am male: ' + isMale + ' //type is ' + typeof isMale + '\n' +
                 'My favorite foods are: ' + favoriteFoods + ' //type is ' + typeof favoriteFoods +  '"';
    return result;
}


console.log(variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]));
