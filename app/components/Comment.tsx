import React from "react";
import PropTypes from "prop-types";
import PostMetaInfo from "./PostMetaInfo";
import { Post } from "../utils/api";

export default function Comment({ comment }: { comment: Post }) {
    return (
        <div className="comment">
            <PostMetaInfo by={comment.by} time={comment.time} id={comment.id} />
            <p dangerouslySetInnerHTML={{ __html: comment.text }} />
        </div>
    );
}
