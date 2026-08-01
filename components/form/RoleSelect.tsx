import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function RoleSelect() {
  return (
    <Select name="role" defaultValue="CUSTOMER">
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="CUSTOMER">
          Customer
        </SelectItem>

        <SelectItem value="PROVIDER">
          Provider
        </SelectItem>
      </SelectContent>
    </Select>
  );
}