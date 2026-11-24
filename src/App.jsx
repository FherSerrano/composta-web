
import './App.css'

function App() {
  return (
    <div>
      <header>
        <h1>🌱 Composta</h1>
        <p>Transformando residuos en vida</p>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#importancia">Importancia</a>
          <a href="#materiales">Materiales</a>
          <a href="#cuidados">Cuidados</a>
          <a href="#proceso">Proceso</a>
          <a href="#beneficios">Beneficios</a>
        </nav>
      </header>

      <main>
        <section id="inicio">
          <h2>¿Qué es la composta?</h2>
          <p>
            La composta es un abono natural que se obtiene
            mediante la descomposición de residuos orgánicos,
            como restos de frutas, verduras y hojas secas.
            Este proceso transforma los desechos en nutrientes
            que ayudan a mejorar la calidad del suelo.
          </p>
        </section>

        <section id="importancia">
          <h2>¿Por qué es importante?</h2>
          <p>
            Elaborar composta permite aprovechar los residuos
            orgánicos, reducir la cantidad de basura y disminuir
            el impacto ambiental. También ayuda a enriquecer
            el suelo de manera natural.
          </p>
        </section>

       
<section id="materiales">
  <h2>Materiales para elaborar composta</h2>

  <div className="cards">
    <article className="info-card">
      <span>🥬</span>
      <h3>Materiales verdes</h3>
      <p>
        Aportan nitrógeno y ayudan a los microorganismos
        durante la descomposición.
      </p>
      <ul>
        <li>Cáscaras de frutas</li>
        <li>Restos de verduras</li>
        <li>Café usado</li>
        <li>Césped fresco</li>
      </ul>
    </article>

    <article className="info-card">
      <span>🍂</span>
      <h3>Materiales cafés</h3>
      <p>
        Aportan carbono y ayudan a mantener una buena
        estructura en la composta.
      </p>
      <ul>
        <li>Hojas secas</li>
        <li>Cartón sin plastificar</li>
        <li>Ramas pequeñas</li>
        <li>Papel sin recubrimientos</li>
      </ul>
    </article>

    <article className="info-card">
      <span>🚫</span>
      <h3>Materiales que debemos evitar</h3>
      <p>
        Pueden atraer animales, generar malos olores
        o dificultar el proceso.
      </p>
      <ul>
        <li>Carne y pescado</li>
        <li>Lácteos</li>
        <li>Aceites y grasas</li>
        <li>Alimentos cocinados</li>
      </ul>
    </article>
  </div>
</section>


       
<section id="proceso">
  <h2>¿Cómo hacer composta?</h2>

  <p>
    Elaborar composta es un proceso sencillo que permite
    transformar los residuos orgánicos en abono natural.
  </p>

  <div className="process-grid">

    <article className="process-card">
      <span>01</span>
      <h3>Prepara el espacio</h3>
      <p>
        Elige un recipiente con ventilación o un espacio
        adecuado en tu jardín.
      </p>
    </article>

    <article className="process-card">
      <span>02</span>
      <h3>Agrega los materiales</h3>
      <p>
        Coloca una capa de hojas secas y después agrega
        restos de frutas y verduras.
      </p>
    </article>

    <article className="process-card">
      <span>03</span>
      <h3>Alterna las capas</h3>
      <p>
        Combina materiales verdes y cafés para mantener
        un equilibrio entre nitrógeno y carbono.
      </p>
    </article>

    <article className="process-card">
      <span>04</span>
      <h3>Mantén los cuidados</h3>
      <p>
        Revisa la humedad y remueve el contenido
        periódicamente para permitir la entrada de aire.
      </p>
    </article>

    <article className="process-card">
      <span>05</span>
      <h3>Espera la descomposición</h3>
      <p>
        Los microorganismos transformarán los residuos
        con el paso del tiempo.
      </p>
    </article>

    <article className="process-card">
      <span>06</span>
      <h3>Obtén composta madura</h3>
      <p>
        Estará lista cuando tenga aspecto oscuro,
        textura suelta y olor similar al de la tierra.
      </p>
    </article>

  </div>
</section>


        
<section id="cuidados">
  <h2>Cuidados de la composta</h2>

  <p>
    Para que los residuos orgánicos se descompongan
    correctamente, es necesario mantener ciertas condiciones.
  </p>

  <div className="care-grid">

    <article className="care-card">
      <span>💧</span>
      <h3>Humedad</h3>
      <p>
        Mantén la composta húmeda, como una esponja exprimida.
        Evita que esté demasiado seca o empapada.
      </p>
    </article>

    <article className="care-card">
      <span>🌬️</span>
      <h3>Ventilación</h3>
      <p>
        Remueve los materiales periódicamente para permitir
        la entrada de oxígeno y evitar malos olores.
      </p>
    </article>

    <article className="care-card">
      <span>🌡️</span>
      <h3>Temperatura</h3>
      <p>
        Durante la descomposición puede aumentar la temperatura
        debido a la actividad de los microorganismos.
      </p>
    </article>

    <article className="care-card">
      <span>🍂</span>
      <h3>Equilibrio</h3>
      <p>
        Combina materiales verdes y cafés para proporcionar
        nutrientes y mantener una buena estructura.
      </p>
    </article>

  </div>
</section>

</main>
      <footer>
        <p>🌎 Cuidar el planeta comienza con pequeñas acciones.</p>
        <p>Proyecto educativo sobre la composta</p>
      </footer>
    </div>
  )
}

export default App
