import FlexContainer from "../FlexContainer";
import MenuCard from "../MenuCard";
import Title from "../Title";

import "./MenuContainer.css";

const MenuContainer = (props) => {
  const renderMenuCards = (type) => {
    return props[type].map((drink) => {
      return <MenuCard {...drink} />;
    });
  };
  return (
    <div className="menu-container">
      <Title text="Drinks" />
      <FlexContainer>{renderMenuCards("drinks")}</FlexContainer>
      <hr />
      <Title text="Meals" />
      <FlexContainer>{renderMenuCards("meals")}</FlexContainer>
      <hr />
      <Title text="Desserts" />
      <FlexContainer>{renderMenuCards("desserts")}</FlexContainer>
    </div>
  );
};

export default MenuContainer;
