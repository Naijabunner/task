import { CreateModal } from "@/components/Modal/CreateModal";
import PostPage from "@/components/Table/PostTable";
import { StickyNote, User } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">

      <div className=" grid md:grid-cols-2 gap-5">
        <div className="w-full h-[200px]  relative rounded-xl  bg-muted/50 group overflow-hidden" >
          <h3 className=" text-[100px] font-medium">
            100
            <span className=" text-sm lg:text-xl opacity-50">Posts</span>
          </h3>
          <StickyNote className=" absolute -bottom-4 right-0 -rotate-45 group-hover:translate-y-10 group-hover:translate-x-10 transition-all ease-linear opacity-10 stroke-blue-500 size-32 xl:size-64" />
        </div>
        <div className="w-full h-[200px]  relative rounded-xl  bg-muted/50 group overflow-hidden" >
          <h3 className=" text-[100px]  font-medium">
            100
            <span className=" text-sm lg:text-xl opacity-50">Users</span>
          </h3>
          <User className=" absolute -bottom-4 right-0 -rotate-45 opacity-10 group-hover:translate-y-10 group-hover:translate-x-10 transition-all ease-linear stroke-blue-500 size-32 xl:size-64" />
        </div>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min px-5" >
        <PostPage />
      </div>
    </div>
  );
}
