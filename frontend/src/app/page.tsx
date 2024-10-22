import { Button } from "@/components/button/Button";
import { BsThreeDotsVertical } from "react-icons/bs";

import { FaRegComment } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowLeft } from "react-icons/md";


export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col gap-2 items-start">
        <Button variant="default">Default</Button>
        <Button variant="default" isLoading>Default</Button>
        <Button variant="hover_background" size="icon" isLoading>Default</Button>
        <Button variant="default">Default<MdKeyboardArrowDown /></Button>
        <Button variant="hover_background" size="icon"><MdKeyboardArrowDown /></Button>
        <Button variant="hover_background" size="icon"><BsThreeDotsVertical /></Button>
        <Button variant="hover_background">Hover background</Button>
        <Button variant="underline_hover_background">
          <MdOutlineKeyboardArrowLeft />
          No background
        </Button>
        <Button variant="underline_hover_background" isLoading>
          <MdOutlineKeyboardArrowLeft />
          No background
        </Button>
        <Button variant="no_background">
          <FaRegComment />
          4
        </Button>
        <Button variant="accent"><IoIosAddCircleOutline />
         Default</Button>
        <Button variant="default" size="sm">Default <MdKeyboardArrowDown /></Button>
      </div>
    </div>
  );
}
