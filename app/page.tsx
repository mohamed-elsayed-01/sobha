import Amentities from "@/features/landing/components/amentities";
import FormFooter from "@/features/landing/components/hero/form-footer";
import Hero from "@/features/landing/components/hero/hero";
import Investment from "@/features/landing/components/hero/investment";
import IslandView from "@/features/landing/components/island/island-view";
import LifeStyle from "@/features/landing/components/life-style";
export default function Home() {
  return (
    <main>
      <Hero />
      <LifeStyle />
      <Amentities />
      <IslandView />
      <Investment />
      <FormFooter />
    </main>
  );
}
