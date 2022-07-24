import { FC } from 'react';
import { Figure } from '../../models/figures/Figure';
import "./LostFigures.css";

interface ILostFigures {
    title: string,
    figures: Figure[]
};

const LostFigures: FC<ILostFigures> = ({
    title,
    figures
}) => {
    return (
        <div className='LostFigures'>
            <p>{title}</p>
            <div className="LostFigures__figures">
                {figures.map(figure =>
                    <div key={figure.id}>
                        {figure.name}
                        <img src={'/assets/' + figure.logo} alt="123123" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default LostFigures;
