
const DynamicProductPage = ({ params, searchParams }) => {
    const { productId } = params
    console.log(searchParams);
    return (
        <div>
            dynamic product page {productId}
        </div>
    );
};

export default DynamicProductPage;