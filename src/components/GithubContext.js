import {useEffect, useState, createContext} from React;

const GithubContext = createContext()

function GithubContext({children}) {
    const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const results = await axios(
          "https://api.github.com/users/EmmanuelOdedele/repos"
        );
        setData(results.data);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);


    return (
        <GithubContext.Provider value={data}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext