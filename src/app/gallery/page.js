import Image from "next/image";

const GalleryPage = () => {
    return (
        <div>
            image optimizations
            <h2>Regular image tag</h2>

            <img src="https://nextjs.org/api/docs-og?title=API%20Reference:%20next.config.js%20Options" />

            <h2>Next js image component</h2>
            <Image src={"https://nextjs.org/api/docs-og?title=API%20Reference:%20next.config.js%20Options"} alt="next image" width={500} height={500} />
        </div>
    );
};

export default GalleryPage;