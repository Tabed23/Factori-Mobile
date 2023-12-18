import { setAllMovies, setSaveMovies } from "@/store/movies";

const countConvert = (count:number) => {
    let coin = count;
  
    if (coin >= 1000000) {
      if (coin % 1000000 == 0) {
        coin = `${coin / 1000000}M`;
        return coin;
      } else {
        coin = `${(coin / 1000000).toFixed(1)}M`;
        return coin;
      }
    } else if (coin >= 1000) {
      if (coin % 1000 == 0) {
        coin = `${coin / 1000}K`;
        return coin;
      } else {
        coin = `${(coin / 1000).toFixed(1)}K`;
        return coin;
      }
    } else {
      return coin;
    }
  };


  


  

  export {countConvert}
  