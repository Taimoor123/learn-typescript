function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Khan"; }
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); //works correctly because last parameter is optional
//var result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName("Bob", "Adams"); //correct
//anonymous function type with defult parameters (Note that the parameter type will be optional even with defult value)
var buildName1 = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Khan"; }
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
//# sourceMappingURL=app.js.map