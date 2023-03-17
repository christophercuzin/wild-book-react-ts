import { Link } from "react-router-dom";

export const LinkList = () => {
  return (
    <ul className="linkList">
      <li>
        <Link to={`/add-wilder`} className="link">
          Add new wilder
        </Link>
      </li>
      <li>
        <Link to={`/add-skill`} className="link">
          Add new skill
        </Link>
      </li>
      <li>
        <Link to={`/`} className="link">
          Home
        </Link>
      </li>
    </ul>
  );
};

export default LinkList;
