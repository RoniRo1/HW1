class Clock {

    constructor(countryName, hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes,
            this.seconds = seconds;
        this.countryName = countryName;
    }
    ConverToSeconds() {
        let sec = this.hours * 3600 + this.minutes * 60 + this.seconds;
        return sec;
    }

    Show() {
        let str = "";
        let time = [this.hours, this.minutes, this.seconds]
        for (var i = 0; i < time.length; i++) {
            if (time[i] < 10)
                str += `0${time[i]}`

            else str += `${time[i]}`
            if (i != 2)
                str += ":"

        }
        return str;
    }

}
world = [];

function Submit() {

    let name = document.getElementById("name").value;
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let seconds = document.getElementById("seconds").value;
    world.push(new Clock(name, hours, minutes, seconds));

    document.getElementById("myForm").reset();
    if (world.length == 5) {
        let str = "";
        for (var i = 0; i < world.length; i++) {
            str += `${world[i].countryName}: ` + world[i].Show() + "  seconds: " + world[i].ConverToSeconds() + `<br>`

        }
        document.getElementById("showP").innerHTML = str;

    }

}