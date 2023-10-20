// Sidebar.jsx

import React, { useState } from 'react';
import styles from './index.module.scss';
import { sidebarOptions as options } from "utils/constants/sidebarOprions"
// import { Link } from 'react-router-dom';
import Category from 'components/shared/Category';
import { ArrayType } from 'helpers/helpers';

const Sidebar = React.forwardRef<HTMLDivElement>((props, ref) => {

    const [menuItems, setMenuItems] = useState<ArrayType>(options)

    return (
        <div className={styles.sidebar} ref={ref}>
            <Category options={options} menuItems={menuItems} setMenuItems={setMenuItems} />
        </div>
    );
});

export default Sidebar;
