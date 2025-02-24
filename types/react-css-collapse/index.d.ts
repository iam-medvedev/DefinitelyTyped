// Type definitions for react-css-collapse 3.6
// Project: https://github.com/SparebankenVest/react-css-collapse
// Definitions by: Daniel Ford <https://github.com/dford07>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare module "react-css-collapse" {
    interface Props {
        children?: React.ReactNode;
        isOpen: boolean;
        className?: string | null | undefined;
        onRest?: (() => void) | undefined;
        transition?: string | null | undefined;
    }
    class Collapse extends React.Component<Props> {
        render(): React.ReactElement<Props>;
    }
    export default Collapse;
}
