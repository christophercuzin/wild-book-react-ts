import { wildersService } from '../service/wildersService/wildersService';
import { useContext, useState } from "react"
import { wildersContext } from '../contexts/WildersContext';
import { id } from '../type/typeId';

const Select = ({id}: id) => {
  const { skills, fetchWilders, handleCloseModal } = useContext(wildersContext);
  const [skill, setSkill] = useState<number>(0)
  return (
    <form
    onSubmit={
      async (e) => {
        e.preventDefault()
        await wildersService.addSkill(id, skill)
        handleCloseModal();
        fetchWilders();
      }
    }
    >
      <select 
        name="skill" 
        onChange={(e) => {
          setSkill(parseInt(e.target.value))
        }}
      >
        <option value="">--Please choose an option--</option>
        {
          skills.map((skill) => {
            return <option value={skill.id} key={skill.name}>{skill.name}</option>
          })
        }
      </select>
      <button type="submit">
        Add skill
      </button>
    </form>
  )
}

export default Select