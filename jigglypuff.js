// EPANETClasses2.py
//9/1/15
//sets up junction, tank, pipe, and coordinates classes

/* var AddWhiteSpaceColon = function (parsedRow, colonYN) {

    //this adds back in enough white space to satisfy EPANET
    // handles any mix of ints or strs in the row
    "use strict";
    try {
        spacedRow=parsedRow[0];
    }
    except{                     //empty row, a new line will be added at the end
        spacedRow=parsedRow;
    }
        
    spacedRow=String(spacedRow);    //incase first addition is a number
    var i=1;
    while (i< parsedRow.length()){

        white="        \t"
        try:
            spacedRow+=white+parsedRow[i]; // I tested the readability of this file without the spaces and it worked
        except:
            spacedRow+=white+str(parsedRow[i]);

        i+=1
    }
    if (colonYN){
        spacedRow+=white+";\n";
    }
    else:
        spacedRow+="\n";
        
    return spacedRow;
}; */

function AddWhiteSpaceColon(parsedRow, colonYN) {
    // this adds back in enough white space to satisfy EPANET
    // handles an mix of ints or strs in the row
    "use strict";
    this.parsedRow = parsedRow;
    this.colonYN = colonYN;
    this.spacedRow = "start";
    
    this.setSpace = function () {
        var spacedRow, i, white;
    
        spacedRow = "";
        
        if (this.colonYN) {
            spacedRow += parsedRow[0];
        }
        i = 1;
        white = "        \t";
        while (i < parsedRow.length - 1) {
            spacedRow += white + String(this.parsedRow[i]);
            i += 1;
        }
        if (this.colonYN) {
            spacedRow += white + String(this.parsedRow[i]);
        } else {
            spacedRow += "\n";
        }
    
        this.spacedRow = spacedRow;
    };
    this.toString = function () {
        return String(this.spacedRow);
    };
}
function Junction(ID, Elev, Demand, Pattern, Colon) {
    "use strict";
    this.ID = String(ID);
    this.Elev = parseFloat(Elev);
    this.Demand = parseFloat(Demand);
    this.Pattern = String(Pattern);
    this.Colon = Colon;
    
    this.toString = function () {
        var white = "        \t";
        return this.ID + String(this.Elev) + white + String(this.Demand) + white + String(this.Pattern) + white + ";" + "\n";
    };
    this.flatten = function () {
        return new AddWhiteSpaceColon([this.ID, this.Elev, this.Demand, this.Pattern], this.Colon);
    };

}
function Tank(ID, Elev, InitLvl, MinLvl, MaxLvl, Dia, MinVol, Colon) {
    "use strict";
    this.ID = String(ID);
    this.Elev = parseFloat(Elev);
    this.InitLvl = parseFloat(InitLvl);
    this.MinLvl = parseFloat(MinLvl);
    this.MaxLvl = parseFloat(MaxLvl);
    this.Dia = parseFloat(Dia);
    this.MinVol = parseFloat(MinVol);
    this.Colon = Colon;
    
    this.toString = function () {
        var white = "        \t";
        return white + this.ID + white + String(this.Elev) + white + String(this.InitLvl) + white + String(this.MinLvl) + white + String(this.MaxLvl) + white + String(this.Dia) + white + String(this.MinVol) + white + ";" + "\n";
    };
    /* Tank.flatten = function () {
        return new AddWhiteSpaceColon([this.ID,this.Elev, self.InitLvl, self.MinLvl, self.MaxLvl,self.Dia,self.MinVol],this.Colon);
    }; */

}

    
function Pipe(ID, Node1, Node2, Length, Dia, Rough, Loss, Status, Colon) {
    "use strict";
    this.ID = String(ID);
    this.Node1 = String(Node1);
    this.Node2 = String(Node2);
    this.Length = parseFloat(Length);
    this.Dia = parseFloat(Dia);
    this.Rough = parseInt(Rough, 10);
    this.Loss = parseFloat(Loss);
    this.Status = String(Status);
    this.Colon = Colon;

    this.toString = function () {
        var white = "        \t";
        return white + this.ID + white + this.Node1 + white + this.Node2 + white + String(this.Length) + white + String(this.Dia) + white + String(this.Rough) + white + String(this.Loss) + white + this.Status + ";" + "\n";
    };
    this.flatten = function () {
        return 5; // AddWhiteSpaceColon([this.ID,this.Node1,this.Node2, this.Length, this.Dia, this.Rough, this.Loss, this.Status],this.Colon)    
    };
    
}

function Coordinate(Node, Xcord, Ycord, Colon) {
    "use strict";
    this.Node = String(Node);
    this.Xcord = parseFloat(Xcord);
    this.Ycord = parseFloat(Ycord);
    this.Colon = Colon;
    
    this.toString = function () {
        var white = "        \t";
        return this.Node + white + String(this.Xcord) + white + String(this.Ycord) + "\n";
    };
    this.flatten = function () {
        return 5; // AddWhiteSpaceColon([this.Node,this.Xcord,this.Ycord],this.Colon);
    };
    
    
}


function DemandSpec(ID, Demand, Pattern, Colon) {
    "use strict";
    this.ID = String(ID);
    this.Demand = parseFloat(Demand);
    this.Pattern = String(Pattern);
    this.Colon = Colon;
        
    this.toString = function () {
        var white = "        \t";
        return String(this.Demand) + white + String(this.Pattern) + ";" + "\n";
    };
    this.flatten = function () {

        return 5; // AddWhiteSpaceColon([this.ID,this.Demand,this.Pattern],this.Colon);
    };

}