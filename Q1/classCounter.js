

class Counter {
 

    set Count(x) {
        if (x.includes(".")) {
            alert("אנא הכנס מספר שלם")
            this.count=undefined
        }
        else
            this.count = x;
        
    }
    get Count() {
        return this.count;
    }
    Initialize(x) {
        
        this.Count=x;

    }
    Increment() { this.count++ };
    Go() {
       
        for (var i = 0; i <= this.count; i++) { 
            document.getElementById("here").innerHTML += i + ", "
        }
       
    }

}
function Start() {
    c1 = new Counter();
    x = document.getElementById("ent").value;
    c1.Initialize(x);
        Show();
   
}

Show = () => {
    if (c1.Count == undefined)
        document.getElementById("ent").value = "";
    else
        document.getElementById("ent").value = c1.Count;
}
function Plus() {
    c1.Increment();
    Show();

}
function Go1() {

    str = c1.Go();
   
}