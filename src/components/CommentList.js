import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const CommentList = () => {
  const { comments, deleteComment } = useContext(GlobalContext);

  return (
    <ul>
      {comments.map((comment, i) => {
        return (
          <li key={`${i}-${comment}`}>
            <div className="comment">{comment}</div>
            <DeleteForeverOutlinedIcon onClick={() => deleteComment(comment)} />
          </li>
        );
      })}
    </ul>
  );
};
