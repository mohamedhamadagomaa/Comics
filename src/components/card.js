export default function Card(props) {
  return (
    <div className="card">
      <div
        style={{
          backgroundImage: `url(${props.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "300px",
          textAlign: "center",
        }}
      ></div>
      <h3>{props.name}</h3>
      <p>{props.id}</p>
    </div>
  );
}
