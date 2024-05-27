export default function VehicleDisplay({ trucks }) {
  const items = trucks;
  //items.push({ id: 7, name: 'Jack', type:" dog });
  return (
    <ul>
      {items.map(truck => (
        <li key={truck.id}>
          {truck.brand} 
        </li>
      ))}
    </ul>
  );
}
