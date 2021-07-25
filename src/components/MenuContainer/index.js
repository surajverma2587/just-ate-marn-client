import MenuCard from "../MenuCard";

const MenuContainer = (props) => {
  console.log(props);
  const renderMenuCards = (type) => {
    return props[type].map((drink) => {
      return <MenuCard {...drink} />;
    });
  };
  return (
    <div>
      <div className="form-title">Drinks</div>
      <hr />
      <div className="d-flex flex-wrap justify-content-center align-items-stretch">
        {renderMenuCards("drinks")}
      </div>
      <div className="form-title">Meals</div>
      <hr />
      <div className="d-flex flex-wrap justify-content-center align-items-stretch">
        {renderMenuCards("meals")}
      </div>
      <div className="form-title">Desserts</div>
      <hr />
      <div className="d-flex flex-wrap justify-content-center align-items-stretch">
        {renderMenuCards("desserts")}
      </div>
    </div>
  );
};

export default MenuContainer;
