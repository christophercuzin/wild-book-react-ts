
import { useContext, useState, useEffect } from "react"
import { wildersContext } from "../contexts/WildersContext"
import { wildersService } from "../service/wildersService/wildersService"
import { rateService } from '../service/rateService/rateService';
import { ISkillProps } from "../interface/Interface";

const Skills = ({name, id, wilderId}: ISkillProps) => {
  const { fetchWilders } = useContext(wildersContext);
  const [rate, setRate] = useState("")
  const fetchRate = async () => {
    const rate = await rateService.getRate(wilderId, id)
    setRate(rate.data)
  }
  useEffect(() => {      
    
    fetchRate()
  });
  return (
    <li>
      { name }
      <span className="votes">{rate}</span>
      <span 
        className="closeButton"
        onClick={async () => {
            await wildersService.removeWilderSkill(wilderId, id)
            fetchWilders();
        }}
      >X</span>

    </li>
  )
}

export default Skills