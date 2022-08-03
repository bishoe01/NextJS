import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hello, I`m Bishoe
                    <br className="hidden lg:inline-block" />Code EveryDay
                </h1>
                <p className="mb-8 leading-relaxed">
                    북간도에 이름과 이제 경, 이름과, 거외다. 소학교 무엇인지 같이 거외다. 별 같이 겨울이 하나에 까닭이요, 가을로 헤일 버리었습니다. 언덕 없이 계절이 새겨지는 어머니 나는 있습니다. 언덕 이름자 별빛이 나는 이네들은 있습니다. 나의 속의 아무 있습니다. 이름을 멀리 잠, 봄이 없이 이름을 하나에 있습니다. 별들을 이 이름과, 봅니다. 별들을 언덕 가을로 어머님, 별 불러 아스라히 딴은 지나가는 계십니다.
                </p>
                <div className="flex justify-center">
                    <Link href="/projects">
                    <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        프로젝트 보러가기
                    </a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation></Animation>
            </div>
        </>
    );
};


