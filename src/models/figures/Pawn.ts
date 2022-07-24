import { CellModel } from "../CellModel";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figure";


export class Pawn extends Figure {

    isFirstMove: boolean = true;

    constructor(color: Colors, cell: CellModel) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? 'black-pawn.png' : 'white-pawn.png';
        this.name = FigureName.PAWN;
    };

    canMove(target: CellModel): boolean {

        if (!super.canMove(target)) return false;

        const move = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
        const firstMove = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

        if (this.cell.x === target.x && !target.isEmpty()) return false; 
        if (this.isFirstMove && target.x === this.cell.x && target.y === this.cell.y + firstMove) return true; 
        if (this.cell.x === target.x && this.cell.y + move === target.y) return true; 
        if (!target.isEmpty() && (this.cell.x === target.x + 1 || this.cell.x === target.x - 1) && target.y === this.cell.y + move) return true;

        return false;

    }

    moveFigure(target: CellModel): void {

        super.moveFigure(target);
        this.isFirstMove = false;

    }

};
