
import styles from './About.module.css';

export const metadata = {
    title: "This is about page",
    description: "About page description"
}
const AboutPage = () => {
    return (
        <div>
            <h1 className={styles.heading}> AboutPage</h1>
        </div>
    );
};

export default AboutPage;