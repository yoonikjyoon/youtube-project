import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useParams } from "react-router-dom";

export default function Navbar() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  // const [text, setText] = useSearchParams();
  // const { keyword } = useQuery(['keyword', query], async () => {
  //   return
  // });
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("query : ", text);
    setText("");
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
