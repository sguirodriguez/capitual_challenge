import React, { SetStateAction, useState } from "react";
import HomeScreen from "./home.screen";

const HomeController: React.FC = () => {
  // const [tabValue, setTabValue] = useState<SetStateAction<string>>("sellers");

  const handlers: any = {};

  return <HomeScreen handlers={handlers} />;
};

export default HomeController;
