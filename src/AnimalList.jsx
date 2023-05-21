import { useState } from "react";

const listOfAnimals = [
  {
    name: "krava",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
  },
  {
    name: "delfin",
    species: "mamel",
  },
  {
    name: "koza",
    species: "mamel",
  },
  {
    name: "ovca",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
  },
  {
    name: "pas",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
  },
];

const AnimalList = () => {
  //IDE HOOK
  const [animals, setAnimals] = useState(listOfAnimals);

  const onRemove = (name) => {
    setAnimals((prevState) =>
      prevState.filter((animal) => animal.name !== name)
    );
  };

  const onTop = (index) => {
    const topAnimal = animals[index];
    setAnimals((prevState) => [
      topAnimal,
      ...prevState.filter((_, id) => id !== index),
    ]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Ime zivotinje</th>
            <th>Vrsta zivotinje</th>
            <th>Datum zivotinje</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            // pozovi hook
            <tr key={index}>
              <td>{animal.name}</td>
              <td>{animal.species}</td>
              <td>{animal.date_of_birth}</td>
              <td>
                <button onClick={() => onRemove(animal.name)}>Remove</button>
                <button onClick={() => onTop(index)}>Move to top</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimalList;