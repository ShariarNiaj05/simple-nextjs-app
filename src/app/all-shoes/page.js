
const AllShoesPage = async () => {
    const res = await fetch("http://localhost:5000/shoes")
    const shoes = (await res).json()
    return (
        <div>
            AllShoes
        </div>
    );
};

export default AllShoesPage;