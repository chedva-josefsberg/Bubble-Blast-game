// Player
function Player(PName, PPoints, Plevel) {
    this.PlayerName = PName;
    this.PlayerPoints = PPoints;
    this.PlayerLevel = Plevel;
}

// Game
function Game(PlayerName, numElement, level, numPic) {
    this.gamePlayerName = PlayerName;
    this.gameNumElement = numElement;
    this.gameLevel = level;
    this.gameNumPIc = numPic;
}

//Aluf
function Aluf(AName, APoints) {
    this.alufName = AName;
    this.alufPoints = APoints;
}



function addnewaluf(aluff) {
    var Aname = aluff.PlayerName;
    var Apoints = aluff.PlayerPoints;
    var Alevel = aluff.PlayerLevel;
    var key = "Level" + Alevel;
    var newAluf = new Aluf(Aname, Apoints);
    if (JSON.parse(localStorage.getItem(key)) == null) {
        Alufim = [];
        Alufim[0] = newAluf;
        localStorage.setItem(key, JSON.stringify(Alufim));
    }
    else {
        var flag = false;
        var Alufim = JSON.parse(localStorage.getItem(key));
        var n = Alufim.length;
        for (var i = 0; i < n; i++) {
            if (newAluf.alufPoints >= Alufim[i].alufPoints) {
                for (var j = n - 1; j >= i; j--) {
                    Alufim[j + 1] = Alufim[j];
                }
                Alufim[i] = newAluf;
                flag = true;
                break;
            }
        }
        if (flag == false) {
            Alufim[n] = newAluf;
        }
        if (Alufim.length > 10) {
            Alufim.pop();
        }
        localStorage.setItem(key, JSON.stringify(Alufim));
    }
}


function showAlufim() {

    var objPlayer = JSON.parse(sessionStorage.Player);
    addnewaluf(objPlayer);
    showTable();
}


function showTable() {
    var thediv = document.querySelector("#divtable");
    thediv.innerHTML = "";
    for (var l = 1; l <= 3; l++) {
        var thetable = document.createElement("table");
        thediv.appendChild(thetable);
        var thetr = document.createElement("tr")
        var theth = document.createElement("th");
        theth.innerHTML = l + "רמה";
        theth.colSpan = "2";
        thetr.appendChild(theth);
        thetable.appendChild(thetr);
        var key = "Level" + l;
        var Alufim = JSON.parse(localStorage.getItem(key));
        if (Alufim != null) {
            for (i = 0; i < Alufim.length; i++) {
                var thetr = document.createElement("tr");
                for (var j = 0; j< 1; j++) {
                    var thetd = document.createElement("td");
                    thetd.innerHTML = Alufim[i].alufName;
                    thetr.appendChild(thetd);

                    var thetd = document.createElement("td");
                    thetd.innerHTML = Alufim[i].alufPoints;
                    thetr.appendChild(thetd);
                }
                thetable.appendChild(thetr)
            }
        }
    }

}


function dalateAlufim() {
    localStorage.Level1 = null;
    localStorage.Level2 = null;
    localStorage.Level3 = null;
    showTable();
}
