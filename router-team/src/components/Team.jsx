import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

export const Team = ({ data }) => {
  return (
    <div>
      <h2>Our Team</h2>
      <ListGroup>
        {data.map((person) => {
          return (
            // each member wrapped into link with dynamic part, lifted up as an argument
            // http://localhost:3000/team/90633
            <Link to={`/team/${person.id}`}>
              <ListGroupItem>{person.name}</ListGroupItem>
            </Link>
          );
        })}
      </ListGroup>
    </div>
  );
};
