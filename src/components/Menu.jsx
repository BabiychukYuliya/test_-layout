import { React } from "react";
import { Menu } from "antd";
import { ReactComponent as KEY_SQUARE } from "../assets/images/KEY_SQUARE.svg";
import { ReactComponent as THREED_SQUARE } from "../assets/images/THREED_SQUARE.svg";
import { ReactComponent as USER_SQUARE } from "../assets/images/USER_SQUARE.svg";
import { ReactComponent as WALLET } from "../assets/images/WALLET.svg";
import { ReactComponent as DISCOUNT } from "../assets/images/DISCOUNT.svg";
import { ReactComponent as MESSAGE } from "../assets/images/MESSAGE.svg";
import TableInfo from "./Table";
// import { ReactComponent as CHEVRON } from "../assets/images/CHEVRON.svg";

// const MenuSider = () => {
//   return (
//     <div>
//       <Menu
//         items={[
//           { icon: <KEY_SQUARE />, label: "Dashboard" },
//           { icon: <THREED_SQUARE />, label: "Product" },
//           { icon: <USER_SQUARE />, label: "Customers" },
//           { icon: <WALLET />, label: "Income" },
//           { icon: <DISCOUNT />, label: "Promote" },
//           { icon: <MESSAGE />, label: "Help" },
//         ]}
//       ></Menu>
//     </div>
//   );
// };
// export default MenuSider;
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

const onClick = (e) => {
  console.log("click", e);
};

const MenuSider = () => {
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 306,
      }}
      mode="vertical"
      items={items}
    />
  );
};

export default MenuSider;
