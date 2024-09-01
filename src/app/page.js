import Counter from "@/components/Counter/Counter";
export const metadata = {
  title: "my website's home page",
  description: "Home page description"
}
const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "force-cache"
  })
  const shoes = await res.json()
  return (
    <div>
      <h2 className="text-4xl font-bold" >Home</h2>
      <Counter />
      <div>
        {
          shoes?.map(shoe => <div key={shoe.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">$ {shoe.price}</div>
              </h2>
              <p> {shoe.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">Buy Now</button>
                <button className="btn btn-outline btn-primary">Details</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default HomePage;