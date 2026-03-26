const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export async function getHealthNews(){
  try{
    const response = await fetch(`${BASE_URL}/everything?q=Gym OR gym OR workouts&language=en&sortBy=publishedAt&pageSize=15&apiKey=${API_KEY}`);

    if(!response.ok) {
      throw new Error("Failed To Fetch News");
    }
    const data = await response.json();
    return data.articles;
  }
  catch(error){
    console.error("Error Fetching News", error);
    return[];
  }
}