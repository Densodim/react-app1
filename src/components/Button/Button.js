import style from './Button.module.scss';
import Text from '../Text';
import cn from 'classnames';

import PropsType from 'prop-types';


const Button = ({active, title}) => {
    // console.log(active);
    return (
        <>
            <div className={cn(style.button, {
                [style.active]: active
            })}>
                <Text level={4}>
                    {title}
                </Text>
            </div>
        </>
    )
}

Button.propTypes = {
    active: PropsType.bool,
    title: PropsType.string
}

export default Button;