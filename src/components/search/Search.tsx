import { useState } from "react";
import styles from "./Search.module.css";

interface SearchProps{
  searchCard: (cardName : string) => void;
}

function Search({searchCard} : SearchProps) {
  const [cardName, setCardName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o nome de uma carta"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
      />
      <button onClick={() => searchCard(cardName)}>Buscar</button>
    </div>
  );
}

export default Search;