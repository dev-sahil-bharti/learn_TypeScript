import type { PropsWithChildren, ReactNode } from "react"

interface CardProps extends PropsWithChildren {
    title: string;
    footer?: ReactNode,
};

export function ChaiCard({ title, children, footer }: CardProps) {
    return (
        <>
            <section>
                <h2>Chai Card</h2>
                <h2>{title}</h2>
                <div>{children}</div>
                {footer && <footer>{footer}</footer>}
            </section>
        </>
    )
}
