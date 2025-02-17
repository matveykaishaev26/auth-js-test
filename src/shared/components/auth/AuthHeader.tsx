import { ModeToggle } from "../ui/modeToggle";
export default function AuthHeader() {
  return (
    <div className="w-full h-10 fixed flex justify-end items-center py-10 px-5 ">
      <ModeToggle />
    </div>
  );
}
