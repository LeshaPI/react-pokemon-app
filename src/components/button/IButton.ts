import { MouseEvent } from 'react';

export interface IButton {
    children: string, 
    handler: (event: MouseEvent<HTMLButtonElement>) => void,
}
