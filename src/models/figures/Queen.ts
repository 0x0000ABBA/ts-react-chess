import { CellModel } from "../CellModel";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figure";


export class Queen extends Figure {

    constructor(color: Colors, cell: CellModel) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? 'black-queen.png' : 'white-queen.png';
        this.name = FigureName.QUEEN;
    };

    canMove(target: CellModel): boolean {

        if (!super.canMove(target)) return false;

        if (this.cell.isEmptyVertical(target)) return true;

        if (this.cell.isEmptyHorizontal(target)) return true;

        if (this.cell.isEmptyDiagonal(target)) return true;

        return false;

    }

};
