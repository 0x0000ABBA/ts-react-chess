import { CellModel } from "../CellModel";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figure";


export class Bishop extends Figure {

    constructor(color: Colors, cell: CellModel) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? 'black-bishop.png' : 'white-bishop.png';
        this.name = FigureName.BISHOP;
    };

    canMove(target: CellModel): boolean {

        if (!super.canMove(target)) return false;

        if (this.cell.isEmptyDiagonal(target)) return true;

        return false;
        
    }
    
};
