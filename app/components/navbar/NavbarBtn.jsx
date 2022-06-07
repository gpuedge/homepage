import Data from "./Data";

const NavbarBtn = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <div className="suggest-top_chip" onClick={() => setItem(Data)}>
          All
        </div>
        {menuItems.map((Val, id) => {
          return (
            <div
              className="suggest-top_chip"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NavbarBtn;
