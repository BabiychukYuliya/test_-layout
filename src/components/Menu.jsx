import { React, useState } from "react";
import { Drawer, Menu } from "antd";
import { ReactComponent as KEY_SQUARE } from "../assets/images/KEY_SQUARE.svg";
import { ReactComponent as THREED_SQUARE } from "../assets/images/THREED_SQUARE.svg";
import { ReactComponent as USER_SQUARE } from "../assets/images/USER_SQUARE.svg";
import { ReactComponent as WALLET } from "../assets/images/WALLET.svg";
import { ReactComponent as DISCOUNT } from "../assets/images/DISCOUNT.svg";
import { ReactComponent as MESSAGE } from "../assets/images/MESSAGE.svg";
import TableInfo from "./Table";
import { MenuOutlined } from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Dashboard", "sub1", <KEY_SQUARE />),

  getItem("Product", "sub2", <THREED_SQUARE />, [
    getItem("Option product 1", "5"),
    getItem("Option product 2", "6"),
  ]),

  getItem("Customers", "sub3", <USER_SQUARE />, [getItem(<TableInfo />, "14")]),

  getItem("Income", "sub4", <WALLET />, [
    getItem("Option income 1", "7"),
    getItem("Option income 2", "8"),
    getItem("Option income 3", "9"),
  ]),

  getItem("Promote", "sub5", <DISCOUNT />, [
    getItem("Option promote 1", "10"),
    getItem("Option promote 2", "11"),
  ]),

  getItem("Help", "sub6", <MESSAGE />, [
    getItem("Option help 1", "12"),
    getItem("Option help 2", "13"),
  ]),
];

const MenuSider = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "#FFF",
        boxShadow: "0px 10px 60px 0px rgba(226, 236, 249, 0.50)",
      }}
    >
      <div
        className="menuIcon"
        style={{
          paddingTop: 20,
          paddingLeft: 15,
        }}
      >
        <MenuOutlined
          style={{ fontSize: 50 }}
          onClick={() => setOpenMenu(true)}
        />
      </div>
      <span className="headerMenu">
        <AppMenu />
      </span>
      <Drawer
        placement="left"
        open={openMenu}
        closable={false}
        onClose={() => {
          setOpenMenu(false);
        }}
      >
        <AppMenu />
      </Drawer>
    </div>
  );
};

const AppMenu = () => {
  return <Menu mode="vertical" items={items} />;
};
export default MenuSider;
