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
  const [formData, setFormData] = useState({ name: '', species: '',  date_of_birth:'',sektor:"" });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnimals([...animals, formData]);
    setFormData({name: "", species: "", date_of_birth: "", sektor:""});
  };
  
  return (
    
    <div>
        <form>
            <label htmlFor="name">Name</label>
            <input onChange={handleChange} name="name" type="text" placeholder="Ime zivotinje"></input>
            <label htmlFor="species">Species</label>
            <input onChange={handleChange} name="species" type="text" placeholder="Vrsta zivotinje"></input>
            <label htmlFor="date_of_birth">Date of birth</label>
            <input onChange={handleChange} name="date_of_birth" type="date" placeholder="datum rodjenaj"></input>
            <select name="sektor" onChange={handleChange}>
                <option value="ptice">Ptice</option>
                <option value="zmije">Zmije</option>
                <option value="mamel">Mamel</option>
            </select>
            <button onClick={handleSubmit}>Dodaj zivotinju</button>
            
            
        </form>
      <table>
        <thead>
          <tr>
            <th>Ime zivotinje</th>
            <th>Vrsta zivotinje</th>
            <th>Datum zivotinje</th>
            <th>Sektor</th>
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
              <td>{animal.sektor}</td>
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