class Duck {
    constructor (name,color,age,weight,picture){
       this.name= name;
       this.color= color;
       this.age=age;
       this.weight=weight;
       this.picture=picture;

    }

    Show() {
        document.getElementById("show").innerHTML = `name: ${this.name}, age: ${this.age},
        color: ${this.color}, age:${this.age}, weight: ${this.weight}
        <br>
            <img src="${this.picture}" alt="Alternate Text" />
        `

    }
    Quack() {
        let str = ` <audio  id="myaudio" autoplay  controls loop>
            <source src="duck-quack-112941.mp3" type="audio/mpeg" />
        </audio> <br> `;
        let rst = (this.weight * this.age) / 2;
        for (var i = 0; i < rst; i++) {
            str += "QUACK ";
        }
        document.getElementById("show").innerHTML = str;
        let loopCount = 0;
        document.getElementById('myaudio').addEventListener('timeupdate', function () {
            if (this.currentTime == 0)
                ++loopCount;
            if (loopCount == 3)
                this.pause();
        });
    }
}
function Submit() {
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;
    let picture = document.getElementById("picture").value;

    duck1 = new Duck(name, color, age, weight, picture);
    document.getElementById("submitbtn").disabled = true; 
    document.getElementById("sub").innerHTML = ` <button type="button" onclick="Quacks()">Quack</button>  
                                                <button type="button" onclick= "Shows()">Show</button > `;  
}
function Shows() {
    duck1.Show();
}
function Quacks() {
    duck1.Quack();
}