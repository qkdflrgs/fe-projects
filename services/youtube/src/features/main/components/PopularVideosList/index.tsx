"use client";

import { vars } from "@litae/themes";
import { useGetPopularVideosList } from "@/src/features/main/hooks/useGetPopularVideosList";
import { useEffect } from "react";

export const PopularVideosList = async () => {
  const { data, fetchNextPage, isFetchingNextPage } = useGetPopularVideosList(
    {},
  );

  useEffect(() => {
    setTimeout(() => {
      fetchNextPage();
    }, 2000);
  }, []);

  console.log(data);

  return (
    <section style={{ color: vars.colors.$scale.gray[900] }}>
      <h2>목록</h2>
      <br />
      <p>fetching: {isFetchingNextPage ? "true" : "false"}</p>
      <br />
      <p>{data.pages?.[0].lists?.[0].title}</p>
    </section>
  );
};
