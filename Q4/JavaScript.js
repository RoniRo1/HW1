class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;

    }
    Show() {

         document.getElementById("pShow").innerHTML+=`X: ${this.x}, Y: ${this.y} <br>`
    }
    Equals(p) {
       
        if (p.x == this.x && p.y == this.y) {
            return true;
        }
        else return false;
    }
}
alert(q2([new Point(2, 3), new Point(1, -2), new Point(8, 4)],1,-2));
alert(q2([new Point(2, 3), new Point(1, -2), new Point(8, 4)],1,2));
function q2(arr,x,y) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].x==x&& arr[i].y==y) {
          
            return true;
        }
    }
    return false
}
alert(q3([new Point(2, 3), new Point(1, -2), new Point(8, 4)], new Point(1, -2)));
alert(q3([new Point(2, 3), new Point(1, -2), new Point(8, 4)], new Point(1, 2)));
function q3(arr ,point) {
    for (var i = 0; i < arr.length; i++) {
        if (point.Equals(arr[i])) {

            return true;
        }
    }
    return false
}

q4([new Point(2, 3), new Point(1, 2), new Point(8, 4), new Point(10, 10)])
function q4(arr) {

    sum=0;
    for (var i = 0; i < arr.length-1; i++) {
        sum += Math.sqrt((Math.pow((arr[i].x - arr[i + 1].x),2) + Math.pow((arr[i].y - arr[i + 1].y),2)),2);
    }
   
    for (var i = 0; i < arr.length; i++) {
        arr[i].Show();
    }
    sum = Math.round(sum);
    document.getElementById("pShow").innerHTML += `Sum: ${sum}`;
    
}

