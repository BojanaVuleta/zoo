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

  const AnimalList=()=>{
    return (
      
        <div>
          {listOfAnimals.map((animal, index) => (
            <div key={index}>
              {animal.name}
              {animal.species}
              {animal.date_of_birth ? animal.date_of_birth : "Nepoznato"}
            </div>
          ))}
        </div>
      )
  }

  export default AnimalList;