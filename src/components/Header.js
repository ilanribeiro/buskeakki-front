import React from "react";
import { Header } from 'semantic-ui-react';

function TopHeader({title}) {
  return (
    <div className="header-container">
      <Header textAlign="center" color="orange">{ title }</Header>
    </div>
  );
}

export default TopHeader;
