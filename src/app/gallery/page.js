import Image from "next/image";
import a from "../../assets/a.jpg"
import b from "../../assets/b.jpg"
import c from "../../assets/c.jpg"
import d from "../../assets/d.jpg"
// import e from "../../assets/e.jpg"  // relative path
import e from "@/assets/e.jpg" // absolute path
const GalleryPage = () => {
    return (
        <div>
            image optimizations
            <h2>Regular image tag</h2>

            <img src="https://nextjs.org/api/docs-og?title=API%20Reference:%20next.config.js%20Options" />

            <h2>Next js image component</h2>
            <Image src={"https://nextjs.org/api/docs-og?title=API%20Reference:%20next.config.js%20Options"} alt="next image" width={500} height={500} />
            <h2>Next js Local image component</h2>
            <Image src={a} alt="next image" width={500} height={500} />
            <Image src={b} alt="next image" width={500} height={500} />
            <Image src={c} alt="next image" width={500} height={500} />
            <Image src={d} alt="next image" width={500} height={500} />
            <Image src={e} alt="next image" width={500} height={500} />
        </div>
    );
};

export default GalleryPage;