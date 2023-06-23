export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '36c18833eamsh6a28f670e6ed26cp1ec30ajsnefcb5938ea5a',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    } 
  };

export const ytoptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '36c18833eamsh6a28f670e6ed26cp1ec30ajsnefcb5938ea5a',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export const fetchData = async (url, options) =>{
    const response = await fetch(url ,  options);
    const data = await response.json();

    return data;
}