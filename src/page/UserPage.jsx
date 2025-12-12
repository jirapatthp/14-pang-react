import ButtonSelectRole from "../components/ButtonSelectRole";
import Table from "../components/Table";

export default function UserPage({ members }) {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Button */}
      <ButtonSelectRole />

      {/* TABLE */}
      <Table members={members} />
    </div>
  );
}
