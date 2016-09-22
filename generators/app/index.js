var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    method1: function(){
        console.log("Testing");
    },
    writing: function() {
        this.fs.copy(
            this.templatePath('api'),
            this.destinationPath('api')
        );
        this.fs.copy(
            this.templatePath('bin'),
            this.destinationPath('bin')
        );
        this.fs.copy(
            this.templatePath('public'),
            this.destinationPath('public')
        );
        this.fs.copy(
            this.templatePath('routes'),
            this.destinationPath('routes')
        );
        this.fs.copy(
            this.templatePath('views'),
            this.destinationPath('views')
        );
        this.fs.copy(
            this.templatePath('app.js'),
            this.destinationPath('app.js')
        );
        this.fs.copy(
            this.templatePath('package.json'),
            this.destinationPath('package.json')
        );
    },
    install: function() {
        this.installDependencies();
    }
});