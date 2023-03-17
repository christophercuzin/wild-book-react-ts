import axios from 'axios';

export const wildersService = {
  getWilders: async () => {
    const wilders = await axios.get("http://localhost:5000/api/wilder");

    return wilders;
  },
  createWilder: async (form: FormData) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    await axios.post("http://localhost:5000/api/wilder", form, config);
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