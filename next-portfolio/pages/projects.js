import Layout from "../components/layout";
import ProjectItem from "../components/projects/project-item";
import { NOTION_TOKEN } from "../config";
import { DATABASE_ID } from "../config";
export default function projects({projects}) {
    console.log(projects);
    return (
        <Layout>
            <h1>총 프로젝트 {projects.results.length}</h1>
            {projects.results.map((aProject) => (
                <ProjectItem key={aProject.id} data={aProject}></ProjectItem>
            ))}


            
        </Layout>
    )
};


export async function getServerSideProps() {

    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-02-22',
            'Content-Type': 'application/json',
            Authorization: `Bearer secret_gA9FyZ7iu20Qkg0jaOHO6f1hhSWTufg7aL7QINsc8e4`
        },
        body: JSON.stringify({ 
            sorts:[
                {
                    "property" : "name",
                    "direction" : "ascending"
                }
            ],
            page_size: 100 })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/1e53d4ed2fb240fab66347258d13762d/query`, options);

    const projects = await res.json();
    let projects_ = [];
    const projectNames = projects.results.map((aProject)=> {
        projects_.push(aProject.properties.name.title[0].plain_text);
    })


    return {
        props: {
            projects
        }
    }
}