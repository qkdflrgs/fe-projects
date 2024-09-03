"use client";

import { FormEvent } from "react";
import * as s from "./style.css";

export const SearchForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const queryInput = form.elements.namedItem("query") as HTMLInputElement;
    const queryValue = queryInput.value ?? "";

    console.log("검색: ", queryValue);
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input name="query" className={s.input} type="text" placeholder="검색" />
      <button className={s.button} type="submit">
        🔍
      </button>
    </form>
  );
};
