import React, { useState } from "react";
import Radio from "@components/Radio";

interface ILayoutProps {
  data: {
    menus: {
      id: string;
      value: string;
    }[][];
    rules: {
      [key: number]: number[];
    };
  };
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children, data }) => {
  const { menus, rules } = data;
  const [list, setList] = useState([]);

  const onRadioGroupChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, id } = e.target;

    const newArray = Number(name) == 0 ? rules[id] : list.concat(rules[id]);
    setList(newArray);
  };
  return (
    <div>
      {menus.map((menu, i) => (
        <div key={i}>
          {menu.map(m => {
            let disabledButton =
              (list && list.length <= 0) || list?.includes(Number(m.id));
            return (
              <Radio
                key={m.value}
                onRadioGroupChange={onRadioGroupChange}
                value={m.value}
                id={m.id}
                index={i.toString()}
                disabled={i != 0 && disabledButton}
              />
            );
          })}
          <br />
        </div>
      ))}
    </div>
  );
};

export default Layout;
