module.exports = function Greetr() {
    this.greeting = "Hello from de funcion constructor greet4";
    this.greet = function() {
        console.log(this.greeting);

    }
}