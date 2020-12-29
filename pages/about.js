import Layout from '../components/Layout'

const About = ({ title, description, ...props }) => {
    return (
        <>
            <Layout pageTitle={`${title} | About`} description={description}>
                <div className="floating-text">
                    <h1 className="title">{description}</h1>
                    <h3 className="description">Stay as long as you'd like.</h3>
                    <h3 className="profile-links"><a href="https://github.com/jokang1005">GitHub</a></h3>
                </div>
            </Layout>
        </>
    )
}

export default About;

export async function getStaticProps() {
    const configData = await import ('../siteconfig.json')

    return{
        props: {
            title: configData.default.title,
            description: configData.default.description,
        },
    }
}