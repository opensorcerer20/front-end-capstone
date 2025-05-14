import { About } from "./About";
import { Hero } from "./Hero";
import { Hightlights } from "./Highlights";
import { Testimonials } from "./Testimonials";

export const Main = () => {
    return (
        <main>
            <Hero></Hero>
            <Hightlights></Hightlights>
            <Testimonials></Testimonials>
            <About></About>
        </main>
    );
};
