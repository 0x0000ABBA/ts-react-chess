import { CellModel } from "../CellModel";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figure";


export class Rook extends Figure {

    constructor(color: Colors, cell: CellModel) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? 'black-rook.png' : 'white-rook.png';
        this.name = FigureName.ROOK;
    };

    canMove(target: CellModel): boolean {

        if (!super.canMove(target)) return false;

        if (this.cell.isEmptyVertical(target)) return true ;

        if (this.cell.isEmptyHorizontal(target)) return true;

        return false;
 
    }

};
