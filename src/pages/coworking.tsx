import { useParams } from "react-router-dom";

export default function Coworking() {
  const { id } = useParams();

  return <div>You're viewing coworking #{id}</div>
}
