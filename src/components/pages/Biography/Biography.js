import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import PropsType from "prop-types";
import style from "./Biography.module.scss";
import { BIO } from "../Bio";
import Container from "../../Container";
import Text from "../../Text";
import Button from "../../Button/Button";
import Layout from "../../Layout/Layout";
import {ReactComponent as LinkIcon} from '../../../assets/link_icon.svg';
import { useEffect } from "react";



const Biography = () => {
const {id} = useParams();
const navigate = useNavigate();

const location = useLocation();
useEffect(() => {
  
}, [location.hash]);

const handleOnBackClick = () => {
  navigate("/", { state: '123'});
}

if (!BIO[id]){
  // console.log('NOt found', id);
  return <Navigate to='/characters' replace={true}/>
}


  return (
    <>
      <div className={style.root}>
        <Container>
          <div>
            <Button color="secondary"
            onClick={handleOnBackClick}>Back</Button>
          </div>
          {BIO[id].map((item, index) => {
            switch (item.type) {
              case "h1":
                return (
                  <Text 
                   level={1} 
                   key={index}
                   className={style.heading}
                   id={item.text.split(' ').join('_')}
                  >
                    {item.text}
                    <Link to={`#${item.text.split(' ').join('_')}`}>
                       <LinkIcon className={style.linkIcon}/>
                    </Link>
                  </Text>
                );
              case "h2":
                return (
                  <Text 
                   level={2} 
                   key={index} 
                   className={style.heading}
                   id={item.text.split(' ').join('_')}
                  >
                    {item.text}
                    <Link to={`#${item.text.split(' ').join('_')}`}>
                       <LinkIcon className={style.linkIcon}/>
                    </Link>
                    
                  </Text>
                );
              case "paragraph":
                return (
                  <Text level={4} key={index}>
                    {item.text}
                  </Text>
                );
              case "img":
                return (
                  <div className={style.imgWrapper} key={index}>
                    <img src={item.src} alt="image" />
                  </div>
                );
              default:
                return (
                  <Text level={5} key={index}>
                    {item.text}
                  </Text>
                );
            }
          })}
        </Container>
      </div>
    </>
  );
};

Biography.propType = {
  id: PropsType.number,
};

export default Biography;
