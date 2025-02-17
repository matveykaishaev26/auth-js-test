import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";

type Props = {
  activeColor: string;
  colors: string[];
};
// const colors = [
//   "#fff",
//   "rgb(255, 97, 97)", // Тёмно-розовый
//   "rgb(255, 172, 56)", // Оранжевый
//   "rgb(255, 211, 36)", // Жёлтый
//   "rgb(230, 234, 73)", // Светло-жёлтый
//   "rgb(53, 216, 112)", // Светло-зелёный
//   "rgb(76, 161, 255)", // Голубой
//   "rgb(110, 117, 244)", // Синий
// ];
export default function ColorPick({ activeColor, colors }: Props) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {colors.map((item) => (
          <SelectItem
            key={item}
            className="cursor-pointer hover:bg-secondary/90"
            value="light"
          >
            <div
              style={{
                backgroundColor: item,
              }}
              className={`rounded-xl cursor-pointer h-5 w-5
`}
            ></div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
