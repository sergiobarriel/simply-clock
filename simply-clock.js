
function SimplyClock (DOMid, separator, format){

    /// Properties
    this.isStarted = false;
    this.hours = null;
    this.minutes = null;
    this.seconds = null;
    this.clockId = null;

    /// Parameters
    this.separator = separator ? separator : ':';
    this.DOMId = DOMid;
    this.format = format;

    /// Start clock interval
    this.start = function() {

        var that = this;

        if(this.isStarted == false) {

            this.isStarted = true;
            this.clockId = this.guid();

            this.drawClock();

            // Every second
            window.setInterval(function(){
                that.setTime();
                that.drawTime();
            }, 1000);

        }
    };

    /// Update time
    this.setTime = function(){

        var now = new Date();

        this.hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
        this.minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
        this.seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
    };

    /// Draw the clock once
    this.drawClock = function() {

        var formatArray = this.format.split('');

        var clockString = '';

        clockString += '<div class="simple-clock" id="' + this.clockId +'">'

        for(var i = 0; i <= formatArray.length; i++) {

            switch (formatArray[i]) {
                case 'h':
                    clockString += '<span class="hours"></span>';
                    break;
                case 'm':
                    clockString += '<span class="minutes"></span>';
                    break;
                case 's':
                    clockString += '<span class="seconds"></span>';
                    break;
            }

            if(formatArray[i + 1] != undefined) {
                clockString += '<span class="separator">' + this.separator + '</span>';
            }
        };

        clockString += '</div>';

        if(this.DOMId){
            document.getElementById(this.DOMId).innerHTML = clockString;
        }
    };

    /// Draw the time every second
    this.drawTime = function() {

        if(this.clockId){
            var clock = document.getElementById(this.clockId);

            clock.getElementsByClassName('hours')[0].innerHTML = this.hours;
            clock.getElementsByClassName('minutes')[0].innerHTML = this.minutes;
            clock.getElementsByClassName('seconds')[0].innerHTML = this.seconds;
        }

    };

    /// Generate guid for identify the clock
    this.guid = function(){
        return this.guid4() + '-' + this.guid4() + '-' + this.guid4() + '-' + this.guid4() + '-' + this.guid4();
    };

    /// Generate guid for identify the clock
    this.guid4 = function(){
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
};
