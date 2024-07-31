import { ReactNode } from "react";

export function ComponentWrapper({ title, children }: { title: string, children: ReactNode })
{
    return (
        <section className="space-y-4 py-12">
            <h2 className="font-medium tracking-wide">{title}</h2>
            <div className="space-y-4">
                {children}
            </div>
        </section>
    )
}