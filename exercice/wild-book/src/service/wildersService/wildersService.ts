import axios from 'axios';

export const wildersService = {
  getWilders: async () => {
    const wilders = await axios.get("http://localhost:5000/api/wilder");

    return wilders;
  },
  createWilder: async (name: string, email: string, city: string) => {
    await axios.post("http://localhost:5000/api/wilder", { name, email, city });
  },
  removeWilder: async (id: number) => {
    await axios.delete(`http://localhost:5000/api/wilder/${id}/delete`);
  },
  removeWilderSkill: async (wilderId: number, skillId: number) => {
    await axios.delete(
      `http://localhost:5000/api/wilder/${wilderId}/skill/${skillId}/delete`
    );
  },
  addSkill: async (wilderId: number, skillId: number) => {
    await axios.post(
      `http://localhost:5000/api/wilder/${wilderId}/skill/${skillId}/add`
    );
  },
}; 