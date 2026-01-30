const API_URL = import.meta.env.VITE_API_URL;

export const getItinerary = async () => {
  const res = await fetch(`${API_URL}/itinerary`);
  return res.json();
};
