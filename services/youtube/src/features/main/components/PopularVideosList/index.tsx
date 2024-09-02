import { vars } from "@litae/themes";
import { getPopularVideosList } from "@/src/features/main/api/getPopularVideosList";

export const PopularVideosList = async () => {
  const data = await getPopularVideosList({});

  return (
    <section style={{ color: vars.colors.$scale.gray[900] }}>
      <h2>목록</h2>
      <br />
      <p>{data.lists?.[0].title}</p>
    </section>
  );
};
