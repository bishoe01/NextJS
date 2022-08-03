export default function ProjectItem({data}) {
    const property_ = data.properties;
    const projectTitle = data.properties.name.title[0].plain_text
    return(
        <div className="p-6 bg-slate-400 rounded-md m-3">
            <h1>{projectTitle}</h1>
            {property_.tag.multi_select.map((tags) => (
            <span className="dark:text-slate-100 m-2"> {tags.name} </span>))}
            
        </div>
    )
};
