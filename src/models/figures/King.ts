import { CellModel } from "../CellModel";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figure";


export class King extends Figure {

    constructor(color: Colors, cell: CellModel) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? 'black-king.png' : 'white-king.png';
        this.name = FigureName.KING;
    };

    canMove(target: CellModel): boolean {

        if (!super.canMove(target)) return false;

        const xabs = Math.abs(this.cell.x - target.x);
        const yabs = Math.abs(this.cell.y - target.y);

        if (xabs <= 1 && yabs <= 1) return true;

        return false;
        
    }
    
}
