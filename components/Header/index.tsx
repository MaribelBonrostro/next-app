import React from "react";
import style from "./style.module.scss";

const Header = ({ children }) => <h1 className={style.header}>{children}</h1>;
export default Header;
