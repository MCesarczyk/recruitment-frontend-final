import { Link } from "react-router-dom";
import { ROUTES } from "../app/routes";

const itemsList = [
  {
    id: 1,
    title: "data",
    url: ROUTES.data,
  },
  {
    id: 2,
    title: "secondary",
    url: ROUTES.secondary,
  },
];

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
