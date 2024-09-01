import Counter from "@/components/Counter/Counter";
export const metadata = {
  title: "my website's home page",
  description: "Home page description"
}
const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes")
  const data = await res.json()
  console.log(data);
  return (
    <div>
      <h2 className="text-4xl font-bold" >Home</h2>
      <Counter />

    </div>
  );
};

export default HomePage;