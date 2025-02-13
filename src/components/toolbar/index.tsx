import {FC, PropsWithChildren} from 'react';
import './style.scss';

export const Toolbar: FC<PropsWithChildren> = ({children}) => {
    return <div className={'toolbar'}>{children}</div>;
};
