import { useEffect, useState } from "react";
import Student from "./Student";
export default function Students() {
  // sate to  hold data
  const [Students, setStudent] = useState([]);
  // use effect with dependency Array
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, []);
  return (
    <div>
      <h1>Students: {Students.length}</h1>
      {
        Students.map(Studentt => <Student Student={Studentt}></Student>
        )
      }
    </div>
  );
}
