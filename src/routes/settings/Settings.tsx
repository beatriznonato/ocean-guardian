import "./Settings.css";
import { auth } from "../../firebase/FirebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Button from "../../components/Button/Button";
import { FirebaseError } from "firebase/app";
import { useEffect, useState } from "react";
import { db } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

// interface User {
//   id: string;
//   [key: string]: unknown;
// }

interface User {
  id: string;
  name: string;
  surname: string;
  org_name: string;
  email: string;
}

const accountLabel = [
  "Nome",
  "Sobrenome",
  "Nome da Organização",
  "E-mail",
  "Senha",
];
const accountData = [
  "Ana Catarina",
  "Nonato Soares",
  "Centro de Pesquisa Aquática",
  "anacatarina@meuemail.com.br",
  "MinhaSenhaAqui",
];

export const Settings = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const userId = "mzKWey82UyAnIYfwA9Qz";

  // const usersCollectionRef = collection(db, "users");
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getUsers();
  // }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userDoc = doc(db, "users", userId);
        const userData = await getDoc(userDoc);
        if (userData.exists()) {
          setUser({ id: userData.id, ...userData.data() } as User);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user: ", error);
      }
    };

    getUser();
  }, [userId]);

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
      console.log("User has been logged out");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log(error.message);
      } else {
        console.log("An error occurred");
      }
    }
  };

  return (
    <div className="settings-container">
      <Navigation tab={undefined} />
      <div className="settings-content">
        <h1>Configurações</h1>
        <h2 className="settings-subheading">Detalhes da Conta</h2>
        <div className="settings-account-info">
          <div className="account-label">
            {accountLabel.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
          <div className="account-data">
            {/* {accountData.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))} */}
            <p>{user ? user.name : ""}</p>
            <p>{user ? user.surname : ""}</p>
            <p>{user ? user.org_name : ""}</p>
            <p>{user ? user.email : ""}</p>
            <p>---</p>
          </div>
        </div>

        <Button
          className="settings-logout-btn"
          text="Sair"
          variant="outline"
          onClick={logout}
        />
      </div>
    </div>
  );
};

export default Settings;
