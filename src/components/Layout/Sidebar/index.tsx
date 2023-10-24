// Sidebar.jsx

import React from 'react';
import styles from './index.module.scss';
import { sidebarOptions as options } from "utils/constants/sidebarOprions"
import { Sidebar as Sid, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const Sidebar = React.forwardRef<any>((props, ref) => {
    const renderMenuItems = (items : any) => {
        return items.map((item : any) => (
            item.children ? (
                <SubMenu key={item.id} label={item.title}>
                    {renderMenuItems(item.children)}
                </SubMenu>
            ) : (
                <MenuItem component={<Link to={item.route} />} key={item.id}>{item.title}</MenuItem>
            )
        ));
    };

    return (
        <div className={styles.sidebar} ref={ref}>
            <Sid>
                <Menu>
                    {renderMenuItems(options)}
                </Menu>
            </Sid>
        </div>
    );
});

export default Sidebar;
