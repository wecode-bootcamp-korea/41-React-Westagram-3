import React, { useEffect, useState } from 'react';
import './MainSideBarFooter.scss';
const MainSideBarFooter = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/data/list.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="MainSideBarFooterBox">
      <ul className="MainSideBarFooterBoxList">
        {data.map((i, key) => {
          return <li key={key}>{i.content}.</li>;
        })}
      </ul>
    </div>
  );
};

export default MainSideBarFooter;
