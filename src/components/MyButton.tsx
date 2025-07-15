import "./MyButton.css";

const MyButton = () => {
  const handleClick = (message: string) => {
    console.log("Click");
    alert(message);
  };

  return (
    <button className="btn" onClick={() => handleClick("Click")}>
      MyButton
    </button>
  );
};
export default MyButton;
