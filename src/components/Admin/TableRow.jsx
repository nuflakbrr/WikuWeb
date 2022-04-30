import React from "react";
import { Link } from "react-router-dom";

function TableRow(props) {
  return (
    <tr className="even:bg-platinum">
      <td className="px-4">{props.nama}</td>
      <td>{props.angkatan}</td>
      <td>{props.domisili}</td>
      <td>{props.jurusan}</td>
      <td className="text-center py-2">
        <Link
          to={`/admin/edit/user/${props.userId}`}
          className="border-carmine-pink border-2 rounded-lg py-2 px-4 text-carmine-pink"
        >
          Edit
        </Link>
      </td>
    </tr>
  );
}

export default TableRow;
