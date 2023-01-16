import { Link } from "react-router-dom";
import { itemsList } from "../app/configs";

export const Home = () => (
  <ul>
    {itemsList.map(item => (
      <li key={item.id}>
        <Link to={item.url}>
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
);
