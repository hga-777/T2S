import TextToSpeech from './TextToSpeech';
import { useState } from 'react';
const BlogPost = () => {
  const [text,setText] = useState('');
  return (
    <div>
      <h1>T2S</h1>
      <TextToSpeech text={text} />
      <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}/>
    </div>
  );
};

export default BlogPost;