import { CellModel } from "../CellModel";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figure";


export class Knight extends Figure {

    constructor(color: Colors, cell: CellModel) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? 'black-knight.png' : 'white-knight.png';
        this.name = FigureName.KNIGHT;
    };
    
    canMove(target: CellModel): boolean {

        if (!super.canMove(target)) return false;

        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);

        if ((dx === 1 && dy === 2) || (dx === 2 && dy === 1)) return true;

        return false;
        
    }
    
};
