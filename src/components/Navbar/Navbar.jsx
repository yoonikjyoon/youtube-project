import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BsYoutube, BsSearch } from "react-icons/bs";

export default function Navbar() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  const navigateRoot = () => {
    navigate("/");
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header className={styles.container}>
      <div className="flex font-bold ml-2 text-3xl" onClick={navigateRoot}>
        <BsYoutube className="mr-5 text-4xl text-brand" />
        YouTube
      </div>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Search..."
        />
        <BsSearch className={styles.searchIcon} />
      </form>
    </header>
  );
}
