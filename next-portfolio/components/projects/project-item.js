import Image from "next/image";
export default function ProjectItem({data, url}) {
    const property_ = data.properties;
    const projectTitle = data.properties.name.title[0].plain_text
    const githubLink = data.properties.GitHub.url;
    const Description_ = data.properties.Description.rich_text[0].text.content;
    return(
        <div className="flex flex-col m-3 bg-slate-700 rounded-md">
            <Image 
            className="rounded-t-lg"
            src={url} 
            alt="Cover Image"
            width="100%"
            height="60%"
            layout="responsive"
            objectFit="none"
            quality={100}
            />
            <h1>{projectTitle}</h1>
            {property_.tag.multi_select.map((tags) => (
            <h3 className="dark:text-emerald-300 m-2 text-xs ">{tags.name}</h3>))}
            <h3>{Description_}</h3>
            <a href={githubLink}>Github 바로가기</a>
        </div>
    )
};
