import { SelectItem } from "@/components/ui/select";
import states from "@/data/states.json";

export function StateSelectItems() {
  return Object.entries(states).map(([abbreviations, name]) => (
    <SelectItem key={abbreviations} value={abbreviations}>
      {name}
    </SelectItem>
  ));
}
