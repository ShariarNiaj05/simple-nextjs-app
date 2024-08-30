
const DynamicProductPage = ({ params }) => {
    const { productId } = params
    return (
        <div>
            dynamic product page {productId}
        </div>
    );
};

export default DynamicProductPage;