import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { incrementReaction } from './postsSlice';
const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };
const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();


   const renderReactions = Object.entries(reactionEmoji).map(([name, emoji]) => (
    
    <button key={name} onClick={() =>dispatch(incrementReaction({postId: post.id, reaction: name }))}>
      {emoji} {post.reaction[name]}
    </button>
  ));

  return <div>{renderReactions}</div>;
};

export default memo(ReactionButton);
