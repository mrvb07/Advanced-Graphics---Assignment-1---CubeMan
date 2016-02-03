/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // public color:number;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(RotationXaxis, RotationYaxis, RotationZaxis, BodyColor, UpperColor, LowerColor, FeetColor) {
            this.RotationXaxis = RotationXaxis;
            this.RotationYaxis = RotationYaxis;
            this.RotationZaxis = RotationZaxis;
            this.BodyColor = BodyColor;
            this.UpperColor = UpperColor;
            this.LowerColor = LowerColor;
            this.FeetColor = FeetColor;
            //  this.color = color;
        }
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map