import TextBox from "@/components/Text Box";
import Users from "@/components/Users";


export default function Home() {
  return (
    <main className="flex gap-10 flex-col items-center justify-between p-24">
      <TextBox />
      <Users/>
  
    </main>
  );
}
