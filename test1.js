export async function findManyWithFullTextSearch(params: {
  keywords: string[];
  // ...
}) {
  const searchQuery = keywords.join(' & ');

  // ユーザー入力が直接クエリに埋め込まれている！
  const results = await prisma.$queryRawUnsafe(`
    SELECT e.*
    FROM emails e
    WHERE e.search_vector @@ websearch_to_tsquery('simple', '${searchQuery}')
    ORDER BY ts_rank(e.search_vector, websearch_to_tsquery('simple', '${searchQuery}')) DESC
    LIMIT ${take} OFFSET ${skip}
  `);

  return results;
}