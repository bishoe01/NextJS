import { useRouter } from "next/router";

export default function Detail() {
    const router = useRouter();
    const [title,id] = router.query.params || [];
    return(
        <h4>{title + id}</h4>
        
    )
};
