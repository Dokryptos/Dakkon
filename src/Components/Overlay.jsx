import { Scroll } from "@react-three/drei";

const Section = (props) => {

    return(
        <section className="h-screen flex flex-col justify-center p-10">
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="bg-white rounded-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );
}

export const Overlay = () => {
    return(
        <Scroll html>
            <Section>
                <h1 className="font-serif text-2xl">Lorem Ipsum 1</h1>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec egestas faucibus posuere. In imperdiet vitae tortor sit amet fermentum.
                 Sed non tristique ligula, quis venenatis urna. Integer tincidunt quam eu condimentum placerat. Integer euismod sagittis auctor.
                Mauris egestas dui id neque hendrerit, nec fermentum nunc volutpat. Vestibulum diam mauris, scelerisque non felis ac, dictum pellentesque neque</p>
            </Section>
            <Section>
                <h1 className="font-serif text-2xl"> Lorem Ipsum 2</h1>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec egestas faucibus posuere. In imperdiet vitae tortor sit amet fermentum.
                 Sed non tristique ligula, quis venenatis urna. Integer tincidunt quam eu condimentum placerat. Integer euismod sagittis auctor.</p>
            </Section>
            <Section>
                <h1 className="font-serif text-2xl">Lorem Ipsum 3</h1>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec egestas faucibus posuere. In imperdiet vitae tortor sit amet fermentum.
                 Sed non tristique ligula, quis venenatis urna. Integer tincidunt quam eu condimentum placerat. Integer euismod sagittis auctor.</p>
            </Section>
            <Section>
                <h1 className="font-serif text-2xl"> Lorem Ipsum 4</h1>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec egestas faucibus posuere. In imperdiet vitae tortor sit amet fermentum.
                 Sed non tristique ligula, quis venenatis urna. Integer tincidunt quam eu condimentum placerat. Integer euismod sagittis auctor.</p>
            </Section>
            <Section>
                <h1 className="font-serif text-2xl">Lorem Ipsum 5</h1>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec egestas faucibus posuere. In imperdiet vitae tortor sit amet fermentum.
                 Sed non tristique ligula, quis venenatis urna. Integer tincidunt quam eu condimentum placerat. Integer euismod sagittis auctor.</p>
            </Section>
            <Section>
                <h1 className="font-serif text-2xl">Lorem Ipsum 6</h1>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec egestas faucibus posuere. In imperdiet vitae tortor sit amet fermentum.
                 Sed non tristique ligula, quis venenatis urna. Integer tincidunt quam eu condimentum placerat. Integer euismod sagittis auctor.</p>
            </Section>
        </Scroll>
    )
}
