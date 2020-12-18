var Jumps = 0;

function Click(number) {
	Jumps = Jumps + number;
	document.getElementById("Jumps").innerHTML = Jumps;
}

var JumpPad = 0;

function BuyJP() {
	var JPCost = Math.floor(10 * Math.pow(1.15,JumpPad));
	if(Jumps >= JPCost){
		JumpPad = JumpPad + 1;
		Jumps = Jumps - JPCost;
		document.getElementById("JumpPad").innerHTML = JumpPad;
		document.getElementById("Jumps").innerHTML = Jumps;
	};
	var nextJPCost = Math.floor(10 * Math.pow(1.15,JumpPad));
	document.getElementById("JPCost").innerHTML = nextJPCost;
};


var DualPortal = 0;

function BuyDP() {
	var DPCost = Math.floor(125 * Math.pow(1.75,DualPortal));
	if(Jumps >= DPCost){
		DualPortal = DualPortal + 1;
		Jumps = Jumps - DPCost;
		document.getElementById("DualPortal").innerHTML = DualPortal;
		document.getElementById("Jumps").innerHTML = Jumps;
	};
	var nextDPCost = Math.floor(125 * Math.pow(1.75,DualPortal));
	document.getElementById("DPCost").innerHTML = nextDPCost;
};

function Save() {
	var save = {
		Jumps: Jumps,
		JumpPad: JumpPad,
		DualPortal: DualPortal
	}
  	localStorage.setItem("save",JSON.stringify(save));
} 

function Load() {
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.Jumps !== "undefined") Jumps = savegame.Jumps;
	if (typeof savegame.JumpPad !== "undefined") JumpPad = savegame.JumpPad;
	if (typeof savegame.DualPortal !== "undefined") DualPortal = savegame.DualPortal;
	document.getElementById("Jumps").innerHTML = Jumps;
	document.getElementById("JumpPad").innerHTML = JumpPad;
	document.getElementById("DualPortal").innerHTML = DualPortal;
}

function Delete() {
	localStorage.removeItem("save")
}

window.setInterval(function(){
	Click(JumpPad);
}, 1000);