import MyButton from "./components/MyButton";

const App = () => {
  const user = {
    username: "Pepe",
    email: "pepe@mail.com",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D",
    loggedIn: true, // El usuario no está logueado
  };

  // Destructuring de objetos
  const { username, email, imageURL, loggedIn } = user;

  // Verifica si el usuario no está autenticado y muestra un mensaje apropiado
  if (!loggedIn) {
    return <h1>El usuario no está logueado</h1>;
  }

  return (
    <>
      {/* <h1>Hola: {username ? username : "Anónimo"}</h1> */}
      {/* Muestra el saludo solo si el username existe y no está vacío */}
      {username && (
        <div>
          <h1>Hola: {username}</h1>
          <p>Has iniciado sesión</p>
        </div>
      )} 
      <h2>Email: {email}</h2>
      <img
        src={imageURL}
        alt={`image-${username}`}
        width={200}
        style={{ borderRadius: "100%", border: "1px solid black" }}
      />
      <MyButton />
    </>
  );
};
export default App;
