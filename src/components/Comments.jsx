import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const Comments = ({ comments }) => {
  console.log(comments);
  
  return (
    <>
      <p className="text-[27px] font-bold my-8">{comments.length} Yorum</p>
      {comments.map((comment) => (
        <div className="my-8">
          <div className="flex gap-6">
            <div>
              <img
                className="rounded-full min-w-[50px] min-h-[50px]"
                src={comment.authorThumbnail[0].url}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <p>{comment.authorText}</p>
                <p className="text-gray-400">{comment.publishedTimeText}</p>
              </div>
              <p>{comment.textDisplay}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <AiOutlineLike className="text-2xl me-1" />
                  <span>{comment.likesCount}</span>
                </div>
                <AiOutlineDislike className="text-2xl me-3" />
                <span>Yanıtla</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comments;
