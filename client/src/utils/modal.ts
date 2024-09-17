import {RefObject} from 'react';

const ESC_KEY_CHAR = 'Escape';

export const isEscPressed = (eventObject: KeyboardEvent) => eventObject?.code === ESC_KEY_CHAR;

export const isClickedOutside = (target: Node, modalRef: RefObject<HTMLInputElement | null>) => {
    if (target) {
        return !modalRef.current?.contains(target);
    }
    return false;
}
