import React, {useCallback, useEffect, useRef} from "react";
import 'emoji-picker-element';
import {EmojiClickEvent} from "emoji-picker-element/shared";

export type EmojiPickerProps = {
    onClick: (emoji: string) => void;
}

export const EmojiPicker: React.FC<EmojiPickerProps> = ({onClick}) => {
    // Custom HTML element
    // // https://github.com/nolanlawson/emoji-picker-element
    const ref = useRef<any>(null)

    const handleClick = useCallback((event: EmojiClickEvent) => {
        onClick(event.detail?.unicode || '')
    }, [onClick])

    useEffect(() => {
        const picker = ref.current;

        picker?.addEventListener('emoji-click', handleClick)
        if (picker) {
            picker.skinToneEmoji = '👍'
        }

        return () => {
            picker?.removeEventListener('emoji-click', handleClick)
        }
    }, [])

    return React.createElement('emoji-picker', {ref})
}