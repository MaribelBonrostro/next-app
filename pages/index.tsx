import React from "react";
import Header from "@components/header";
import styles from "./style.module.scss";
const Home: React.FunctionComponent = () => (
  <div>
    <Header>Next App!</Header>
    <h1 className={styles.header}>Welcome</h1>
  </div>
);
export default Home;
