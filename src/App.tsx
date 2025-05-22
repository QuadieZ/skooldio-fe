import axios from "axios";
import { useEffect, useState } from "react";
import { FacultyCard } from "./components";
import type { FacultyDto } from "./types";

function App() {
  const [faculties, setFaculties] = useState<FacultyDto[]>([]);

  useEffect(() => {
    axios
      .get<FacultyDto[]>(
        "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json"
      )
      .then((res) => {
        console.log(res.data);
        setFaculties(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (faculties.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-dvw px-4 md:px-8 lg:px-20 py-4">
      {faculties.map((faculty) => (
        <FacultyCard key={faculty.id} faculty={faculty} />
      ))}
    </div>
  );
}

export default App;
