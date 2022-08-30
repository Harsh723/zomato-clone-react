import Header from "components/header/header";
import { ReactNode } from "react";

interface IAppProps {
    children?: ReactNode;
}

export interface IHeaderProps {
    showLogo?: boolean;
}

const AppWrapper = ({ children }: IAppProps) => {
    return (
        <div>
            <Header showLogo={true} />
            <div>{children}</div>
        </div>
    );
};

export default AppWrapper;
