import style from './Main.module.scss';
import Text from '../../Text';

const Main = () => {

    return (
        <>
            <div className={style.root}>
               <Text level={3}>Main</Text>
            </div>
        </>
    );
}

export default Main;