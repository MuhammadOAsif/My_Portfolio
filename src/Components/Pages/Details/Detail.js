import { useParams } from "react-router-dom";

const Detail = ({ project }) => {
  const { id } = useParams();

  return <div>{id.name}</div>;
};

export default Detail;
