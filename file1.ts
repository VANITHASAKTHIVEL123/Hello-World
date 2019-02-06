class calc {
    a: number;
    b: number;
    c1: number = 0;
    c2: number = 0;
    d: string;
    count: number = 0;


    public input1(id) {
        if ((this.d == "+") || (this.d == "-") || (this.d == "/") || (this.d == "*") || (this.d == "%")) {
            this.b = (this.c2 * 10) + parseInt((<HTMLInputElement>document.getElementById(id)).value);
            console.log(this.b);
            this.c2 = this.b;
            (<HTMLInputElement>document.getElementById("text")).value = "" + this.b;
            if (this.count > 0) { a.process(); }
        }
        else {
            this.a = (this.c1 * 10) + parseInt((<HTMLInputElement>document.getElementById(id)).value);
            console.log(this.a);
            this.c1 = this.a;
            (<HTMLInputElement>document.getElementById("text")).value = "" + this.a;
        }
    }
    public input2(id) {
        this.d = (<HTMLInputElement>document.getElementById(id)).value;
        console.log(this.d);
        (<HTMLInputElement>document.getElementById("text")).value = this.d;
        this.c2 = 0;
        this.c1 = 0;

    }
    public process() {
        switch (this.d) {
            case "+": this.a = this.a + this.b; break;
            case "-": this.a = this.a - this.b; break;
            case "*": this.a = this.a * this.b; break;
            case "/": this.a = this.a / this.b; break;
            case "%": this.a = this.a % this.b; break;
        }
        this.count++;
        (<HTMLInputElement>document.getElementById("text")).value = "" + this.a;
    }
    public display() {
        if (this.count < parseInt( '1')) {
            a.process();
        }
        else {
            (<HTMLInputElement>document.getElementById("text")).value = "" + this.a;
        }
    }

    public clear() {
        this.a = 0; this.b = 0; this.d = '0'; this.c1 = 0; this.c2 = 0;
        (<HTMLInputElement>document.getElementById("text")).value = "";
    }
}

var a = new calc
var id;
a.input1(id); a.input2(id); a.display(); a.clear();