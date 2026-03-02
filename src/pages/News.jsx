import { useEffect, useState } from "react";
import { getHealthNews } from "../Services/newsApi";
import NewsList from "../components/news/NewsList";


export default function News(){
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getHealthNews();
        setArticles(data);
      }
      catch (err) {
        setError("Failed to load");
      }
      finally {
        setLoading(false);
      }
    }
  
    fetchNews();
  }, []);

  if (loading) return <h2>Loading News...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Health & Fitenss News</h1>
      <NewsList articles={articles}/>
    </div>
  );
}