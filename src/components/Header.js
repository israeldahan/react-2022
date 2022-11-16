import MyName from "./MyName";
function Header() {

  const alertName = (name) => {
    alert(`my name is: ${name}`)
  } 

  return (
    <header className="header">
      <p>This is Header</p>
      <div>
      <MyName userName="Dahan Israel David " alertName={alertName}/>
      </div>
    </header>
  );
}

export default Header;
