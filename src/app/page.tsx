import Image from "next/image";

fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => console.log(data));
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
