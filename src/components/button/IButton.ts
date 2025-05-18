import { MouseEvent, ReactNode } from 'react';

export interface IButton {
    children: ReactNode, 
    handler: (event: MouseEvent<HTMLButtonElement>) => void,
}
