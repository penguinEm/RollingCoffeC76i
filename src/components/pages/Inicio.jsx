import banner from "../../assets/banner.jpg";
import ContenedorCards from "./ContenedorCards";

const Inicio = () => {
  return (
    <section className="main">
      <article>
        <img
          src={banner}
          alt="Banner local fisico"
          className="w-100 bannerDimesiones"
        />
      </article>
      <article>
        <ContenedorCards></ContenedorCards>
      </article>
    </section>
  );
};

export default Inicio;
