/// <reference path="../../typings/tsd.d.ts"/>
//Source file name      control.ts
//Last Modified by      Vinay Bhardwaj
//Date last Modified    February 5,2016
//Program description   COMP392-Assignment 1-CubeMan    
//Revision History      v10

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        //PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++
        public RotationXaxis:number;
        public RotationYaxis:number;
        public RotationZaxis:number;
        public BodyColor:number;
        public UpperColor:number;
        public LowerColor:number;
        public FeetColor:number;
       // public color:number;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(RotationXaxis:number, RotationYaxis:number, RotationZaxis:number, BodyColor:number, UpperColor:number, LowerColor:number, FeetColor:number) {
           this.RotationXaxis = RotationXaxis;
           this.RotationYaxis = RotationYaxis;
           this.RotationZaxis = RotationZaxis;
           this.BodyColor = BodyColor;
           this.UpperColor = UpperColor;
           this.LowerColor = LowerColor;
           this.FeetColor = FeetColor;
         //  this.color = color;
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
    }
}
