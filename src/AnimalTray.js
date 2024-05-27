export default function AnimalTray({ animals }) {
  const items = animals;
  //items.push({ id: 7, name: 'Jack', type:" dog });
  return (
    <ul>
      {items.map(animal => (
        <li key={animal.id}>
          {animal.name} {animal.type}
        </li>
      ))}
    </ul>
  );
}
