import NewsCard from "./NewsCard";

export default function NewsList({articles}) {
  if(!articles || articles.length ===0){
    return <p>No News Available.</p>;
  }
  return(
    <div>
      {articles.map((articles, index) => (
        <NewsCard key={index} articles={articles}/>
      ))}
    </div>
  );
}