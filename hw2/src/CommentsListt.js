import { useState } from 'react';
function Comments() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);
    const deleteUl = (id) => {
        setComments(comments.filter((comment) => comment.id !== id));
      };


    return ( <div className = 'comment' >
        <ul className = "comment__title" > Comments
        {comments.map(item => (
        <li className = "comment__text" >
                      <p> {item.text} </p>
                      <button className = "comment__text__btn" onClick={()=>deleteUl(item.id)} > Delete </button>
                </li>
        ))}

        </ul>
        </div> )
}
export default Comments