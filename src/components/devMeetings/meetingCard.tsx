import { VscIssues } from "react-icons/vsc";
import { CiPlay1 } from "react-icons/ci";
import { PiNotepadLight } from "react-icons/pi";
export default function MeetingCard(data: {
    title: string,
    issuesLink: string,
    videoLink: string,
    notes: string
}){
    return(
        <>
            <div
                className="box-black-bg rounded-xl flex gap-5 p-6 flex-col justify-between text-darkGray border-2 border-black"
            >       
             <h2 className=" text-2xl font-bold">{data.title}</h2>

             <div className="flex w-full justify-between">
                <span>
                    <a href={data.issuesLink} ><VscIssues size={35}/></a>
                </span>
                <span>
                    <a href={data.videoLink} ><CiPlay1 size={35}/></a>
                </span>
                <span>
                    <a href={data.notes} ><PiNotepadLight size={35}/></a>
                </span>
             </div>                  
            </div>
        </>
    )
}