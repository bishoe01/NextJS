import Link from "next/link";
import Animation from "./Animation";
import profile_img from '../../public/Profile_500.png';
import Image from "next/image";
import Introduce from "../introduce";
export default function Hero() {
    return (
        <section className="flex min-h-screen flex-row items-center justify-center text-gray-600 body-font">
            <div className="xl:w-5/12 flex flex-col justify-center space-between items-center lg:items-start sm:text-center lg:text-left lg:py-12 xl:py-24 ml-20">
                <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">Hello, I`m Bishoe !</h1>

                <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">Attending the Department of ERICA Software at Hanyang University.</p>


                    <Link href="/projects">
                    <a className="btn-project">
                        프로젝트 보러가기
                    </a>
                </Link>
            </div>
            <div className="xl:w-3/12 h-48 lg:h-auto overflow-hidden rounded-lg mr-20 hover:scale-110">
                <Image className="main_profile" alt="hero" src={profile_img} />
            </div>
        </section>
    );
};
