import style from './About.module.scss';
import Text from '../../Text';

const About = () => {

    return (
        <>
            <div className={style.root}>
                <Text level={3}>About Game</Text>
            </div>
        </>
    );
}

export default About;