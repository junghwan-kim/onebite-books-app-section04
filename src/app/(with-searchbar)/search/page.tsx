import BookItem from "@/components/book-item";
import { BookData } from "@/types";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
  }>;
}) {
  const { q } = await searchParams;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book/search?q=${q as string}`
    , {cache:"force-cache"});
  if (!response.ok) {
    return <div>오류가 발생 했습니다...</div>;
  }
  const books : BookData[] = await response.json();


  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
