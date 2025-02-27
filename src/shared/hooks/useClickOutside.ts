import { useEffect } from "react";

interface ClickOutsideProps {
    refs: React.RefObject<HTMLElement | null>[];
    callback: VoidFunction;
}

export function useClickOutside({ refs, callback }: ClickOutsideProps) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const isOutside = refs.every((ref) => {
                return ref.current && !ref.current.contains(event.target as Node);
            });

            if (isOutside) {
                console.log('click outside');
                callback();
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [refs, callback]);
}