// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyAhJOHH_UGtztyNH-2WsolS1Cai4--0CQQ",
  authDomain: "game-a5d6a.firebaseapp.com",
  projectId: "game-a5d6a",
  storageBucket: "game-a5d6a.appspot.com",
  messagingSenderId: "939430369062",
  appId: "1:939430369062:web:56923006446ab28cced3e7",
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
