import React from 'react';
import style from './[FTName].module.scss'

const <FTName | capitalize> = (props) => {
  return (
    <>
    <div className={style.root}>
        This is <FTName | plural>
    </div>
    </>
  )
}

export default <FTName | capitalize>;