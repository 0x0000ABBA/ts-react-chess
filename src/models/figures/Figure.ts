import { CellModel } from "../CellModel";
import { Colors } from "../Colors";


export enum FigureName {
    FIGURE = 'FIGURE',
    KING = 'KING',
    KNIGHT = 'KNIGHT',
    PAWN = 'PAWN',
    QUEEN = 'QUEEN',
    BISHOP = 'BISHOP',
    ROOK = 'ROOK'
};

export class Figure {

    color: Colors;
    logo: string | null;
    cell: CellModel;
    name: FigureName;
    id: number;

    constructor(color: Colors, cell: CellModel) {
        this.color = color;
        this.cell = cell
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureName.FIGURE;
        this.id = Math.random();
    };

    canMove(target: CellModel): boolean {

        if (target.figure?.color === this.color) return false;
        if (target.figure?.name === "KING") return false;

        return true;
        
    };

    moveFigure(target: CellModel) {

    };

};
