import Card from "./Components/Card";
import "./App.css";

function App() {
  const cardMember = [
    {
      id: 101,
      name: "John",
      bio: "Hii I'am John",
      btnText: "Click Me"
    },
    {
      id: 102,
      name: "Guinn",
      bio: "Hii I'am Guinn",
      btnText: "Press Me"
    },
    {
      id: 103,
      name: "Sunio",
      bio: "Hii I'am Sunio",
      btnText: "Visit Me"
    },
  ];

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-10">
        Tailwind Test
      </h1>
      {cardMember.map( (member) => {return <Card key={member.id} title={member.name} bio={member.bio} btnText={member.btnText} /> } )}
    </>
  );
}

export default App;
