import { useParams } from "react-router-dom";
import { Team } from "./Team";

export const SingleMember = ({ data }) => {
  const params = useParams();
  console.log(params);
  // {id: '1373737'} -> App route dynamic parameter: Team link argument
  // params.id - is a string

  const teamMember = data.find((person) => person.id === Number(params.id));
  console.log(teamMember); // object

  const otherMembers = data.filter((person) => person.id !== Number(params.id));
  console.log(otherMembers); // array of obj

  const { name, profile_path } = teamMember;
  return (
    <div>
      <div className="single-member">
        <h2>{name}</h2>
        <img src={`https://image.tmdb.org/t/p/w185${profile_path}`} />
      </div>

      <div className="other-members">
        <Team data={otherMembers} />
        {/* <Team data={data} />    in main App */}
      </div>
    </div>
  );
};
