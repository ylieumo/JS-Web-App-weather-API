const apiKey = 'b60e31d6340e31d967bb69ec0b9b10b9'; 

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

export async function getWeatherData(city) {
    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            return data;
        } else {
            throw new Error(data.message || 'Failed to fetch data');
        }
    } catch (error) {
        throw error;
    }
}

export const postData = async (city, body) => {
    try {
      const response = await fetch(`${url}/${ciyt}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };