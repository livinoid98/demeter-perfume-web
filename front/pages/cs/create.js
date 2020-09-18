import React,{useState, useCallback} from 'react'

const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const onChangeTitle = useCallback((e) => {
        setTitle(e.target.value);
    });
    const onChangeContent = useCallback((e) => {
        setContent(e.target.value);
    });
    return(
        <>
            <div className="cs_main"></div>
            <div className="faq">
                <div className="faq_title">
                    <h3>DEMETER FAQ</h3>
                </div>
                <div className="faq_content">
                    <input type="text" placeholder="제목을 입력해주세요" value={title} onChange={onChangeTitle}/>
                    <textarea val={content} placeholder="내용을 입력해주세요" onChange={onChangeContent}></textarea>
                </div>
            </div>
        </>
    );
};

export default Create;