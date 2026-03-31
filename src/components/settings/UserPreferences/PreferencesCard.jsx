import DisplayName from "./displayName";
import Theme from "./Theme";
import TimeFormat from "./timeFormat";

export default function UserPreferences() {
  return (
    <div className="flex flex-col gap-6">

      <DisplayName />

      <Theme />

      <TimeFormat />

    </div>
  );
}