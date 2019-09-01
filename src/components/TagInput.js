import React, { useState, useRef } from 'react'
import { Tag, Input, Tooltip, Icon } from 'antd'


export default function TagInput() {
    const [tags, setTags] = useState([])
    const [inputVisible, setInputVisible] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)

    function handleClose(removedTag){
        const tags = tags.filter(tag => tag !== removedTag)
        console.log(tags)
        setTags(tags)
    }

    async function showInput() {
        await setInputVisible(true)
    }

    function handleInputChange(e){
        setInputValue(e.target.value)
        inputRef.current.focus()
    }

    function handleInputConfirm (){
        let tagsInput = tags
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tagsInput = [...tags, inputValue]
        }
        setTags(tagsInput)
        setInputVisible(false)
        setInputValue('')
    }

    return(
        <div>
            {tags.map((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
                <Tag key={tag} closable={index !== 0} onClose={() => handleClose(tag)}>
                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                </Tag>
            );
            return isLongTag ? (
                <Tooltip title={tag} key={tag}>
                {tagElem}
                </Tooltip>
            ) : (
                tagElem
            );
            })}
            {inputVisible && (
                <Input
                    ref={inputRef}
                    type="text"
                    size="small"
                    style={{ width: 78 }}
                    value={inputValue}
                    onChange={(e) => handleInputChange(e)}
                    onBlur={(e) => handleInputConfirm(e)}
                    onPressEnter={(e) => handleInputConfirm(e)}
                />
            )}
            {!inputVisible && (
                <Tag onClick={showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                    <Icon type="plus" /> Nova TAG
                </Tag>
            )}
        </div>
    )
}