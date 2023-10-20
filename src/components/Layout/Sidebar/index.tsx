// Sidebar.jsx

import React from 'react';
import styles from './index.module.scss';
import { sidebarOptions as options } from "utils/constants/sidebarOprions"
// import { Link } from 'react-router-dom';
import Category from 'components/shared/Category';

const Sidebar = React.forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <div className={styles.sidebar} ref={ref}>
            {
                options.map((option, index) => (
                    <Category key={index} option={option}/>
                ))
            }
        </div>
    );
});

export default Sidebar;
