import axios from 'axios';

export const rateService = {
  getRate: async (wilderId: number, skillId: number) => {
    const rate = await axios.get(
      `http://localhost:5000/api/wilder/${wilderId}/skill/${skillId}/grade`
    );

    return rate;
  },
}; 