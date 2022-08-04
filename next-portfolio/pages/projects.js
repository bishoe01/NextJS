import Layout from "../components/layout";
import ProjectItem from "../components/projects/project-item";
import { NOTION_TOKEN } from "../config";
import { DATABASE_ID } from "../config";
export default function projects({projects}) {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">

            <h1 className="text-4xl font-bold">프로젝트 : <span className="pl-6 text-blue-500">{projects.results.length}</span></h1>

            <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
            {projects.results.map((aProject) => (
                <ProjectItem key={aProject.id} data={aProject} url={aProject.cover.file.url}></ProjectItem>
            ))}
            </div>
            </div>

            
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