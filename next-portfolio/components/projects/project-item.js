import Image from "next/image";
export default function ProjectItem({data, url}) {
    const property_ = data.properties;
    const projectTitle = data.properties.name.title[0].plain_text
    const githubLink = data.properties.GitHub.url;
    const Description_ = data.properties.Description.rich_text[0].text.content;
    const start = data.properties.WorkPeriod.date.start;
    const end = data.properties.WorkPeriod.date.end;
    const calculatedPeriod = (start , end) => {
            const startDate = start.split('-');
            const endDate = end.split('-');

            let start_day = new Date(startDate[0], startDate[1],startDate[2])
            let end_day = new Date(endDate[0], endDate[1],endDate[2])

            console.log(`start: ${start_day}`);
            console.log(`end: ${end_day}`);

            const period = Math.abs(end_day - start_day);
            const result = period / (1000 * 60 * 60 * 24);

            console.log(`Period: ${result}`);
            return result;
    }       
    
    
    return(
        <div className="project-card">
            <Image 
            className="rounded-xl"
            src={url} 
            alt="Cover Image"
            width="80%"
            height="70%"
            layout="responsive"
            objectFit="none"
            quality={100}
            />
            <div className="flex flex-col p-4 m-3">
            <h1 className="text-2xl font-bold">{projectTitle}</h1>
            <h3 className="mt-4 text-xl">{Description_}</h3>
            
            <div className="flex items-start mt-2">
            {property_.tag.multi_select.map((tags) => (
            <h1 className="px-2 py-1 mr-2 dark:text-emerald-300 m-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={tags.id}>{tags.name}</h1>))}
            </div>
            
            <h3 className="my-1">{calculatedPeriod(start,end)} Days</h3>
            <p className="my-1 text-l"><span>{`Start : ${start}`}</span> <span>{`End : ${end}`}</span></p>
            <a href={githubLink}>Github 바로가기</a>
            </div>
        </div>
    )
};
