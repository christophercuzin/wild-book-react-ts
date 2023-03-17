import axios from 'axios';

export const skillService = {
  getSkills: async () => {
    const skills = await axios.get("http://localhost:5000/api/skill");

    return skills;
  },
  createSkill: async (name: string) => {
    await axios.post("http://localhost:5000/api/skill", { name });
  },
}; 