"use client";

import { FormEvent } from "react";
import * as s from "./style.css";
import { useRouter, useSearchParams } from "next/navigation";
import { getSearchPageLink } from "@/src/shared/utils/link/page";

export const SearchForm = () => {
  const searchParams = useSearchParams();
  const initialSearchValue = searchParams.get("q") ?? "";
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const queryInput = form.elements.namedItem("query") as HTMLInputElement;
    const queryValue = queryInput.value ?? "";

    if (queryValue !== "") {
      router.push(getSearchPageLink({ q: queryValue }));
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        defaultValue={initialSearchValue}
        name="query"
        className={s.input}
        type="text"
        placeholder="검색"
      />
      <button className={s.button} type="submit">
        🔍
      </button>
    </form>
  );
};
