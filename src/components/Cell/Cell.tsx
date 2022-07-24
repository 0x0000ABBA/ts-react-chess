import { click } from '@testing-library/user-event/dist/click';
import { FC } from 'react';
import { CellModel } from '../../models/CellModel';
import "./Cell.css";

interface ICell {
    cell: CellModel;
    selected: boolean;
    click: (cell: CellModel) => void
};

const Cell: FC<ICell> = ({ cell, selected, click }) => {
    return (
        <div onClick={() => click(cell)} className={['Cell', 'Cell--' + cell.color, selected ? 'Cell--selected' : "", cell.available && !!cell.figure && "Cell--available"].join(' ')}>
            {cell.figure?.logo && <img src={'/assets/' + cell.figure.logo} />}
        
            {cell.available && !cell.figure && <div className='Cell--available_dot' />}
        </div>
    )
}

export default Cell;
