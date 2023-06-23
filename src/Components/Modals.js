import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import '../App.css';

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    const [isOpenModal2, openModal2, closeModal2] = useModal(false)
    const [isOpenModal3, openModal3, closeModal3] = useModal(false)
    const [isOpenModal4, openModal4, closeModal4] = useModal(false)
    const [isOpenModal5, openModal5, closeModal5] = useModal(false)
    const [isOpenModal6, openModal6, closeModal6] = useModal(false)
    return(
        <div>
            <button class="sonic" onClick={openModal1}>SONIC</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <p>La película Sonic the Hedgehog 2020 es una película sorprendentemente agradable para los fanáticos de la franquicia de videojuegos y las familias por igual. La película sigue a Sonic (con la voz de Ben Schwartz), un erizo alienígena azul con supervelocidad, mientras intenta encontrar un nuevo hogar en la Tierra después de que su planeta natal sea destruido. En el camino, se hace amigo de un sheriff de un pequeño pueblo llamado Tom Wachowski (James Marsden) y se une a él para evitar que el malvado Dr. Robotnik (Jim Carrey) lo capture.
                La película es muy divertida, gracias a su encantador elenco, ingenioso humor y emocionantes secuencias de acción. Schwartz encaja perfectamente en el papel de Sonic, dando vida al personaje con su actuación enérgica. Marsden también es genial como Tom, ya que proporciona un personaje humano conectado a tierra y con el que se puede relacionar para que Sonic interactúe. Carrey, por supuesto, se roba el espectáculo como Dr. Robotnik, dando una actuación que es a la vez maníaca e hilarante.
                Los efectos visuales de la película también son de primera categoría, y el diseño CGI de Sonic es particularmente impresionante. Las secuencias de acción de la película también están bien coreografiadas y son emocionantes, lo que hace que la película sea divertida tanto para niños como para adultos.
                En general, la película Sonic the Hedgehog 2020 es una película sorprendentemente agradable que seguramente complacerá a los fanáticos de la franquicia de videojuegos y a las familias por igual. La película está bien hecha, es divertida y emocionante, lo que la convierte en una excelente opción para una noche de cine.
                </p>
                <p>Estos son algunos de los pros y los contras de la película:</p>
                <h4>Ventajas:</h4>
                <li>Elenco encantador</li>
                <li>Humor inteligente</li>
                <li>Emocionantes secuencias de acción</li>
                <h4>Contras:</h4>
                <li>Trama predecible</li>
                <li>Parte del humor es juvenil</li>
                <li>Podría haber usado más de los otros personajes clásicos de Sonic</li>
                <li>En general, le daría a la película Sonic the Hedgehog de 2020 un 7 sobre 10. Es una película divertida y agradable que seguramente complacerá a los fanáticos de la franquicia de videojuegos y a las familias por igual</li>
            </Modal>
            <button class="baby" onClick={openModal2}>BABYLION</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <p>Babylon es una película visualmente impresionante que cuenta una historia fascinante sobre el auge y la caída de Hollywood a principios de la década de 1920. La película está dirigida por Damien Chazelle, conocido por su trabajo anterior en películas como Whiplash y La La Land. Babylon está protagonizada por un elenco que incluye a Brad Pitt, Margot Robbie, Olivia Wilde y Diego Luna.
                La película está ambientada en la era tardía del cine mudo, cuando Hollywood está en transición hacia el cine sonoro. La historia sigue a varios personajes que intentan triunfar en la industria del cine, incluida una estrella del cine mudo (Pitt), una joven actriz (Robbie) y un director (Wilde). La película también explora el lado oscuro de Hollywood, como el sexismo y el racismo desenfrenados que existían en ese momento.
                Babylon es una película larga, con una duración de más de tres horas. Sin embargo, la duración de la película no parece excesiva, ya que Chazelle mantiene la historia en movimiento a un ritmo acelerado. La película también está bellamente filmada, con una cinematografía realmente impresionante.
                Las actuaciones en Babylon son todas excelentes. Pitt es particularmente bueno como la estrella del cine mudo que se desvanece, y Robbie también es excelente como la joven actriz que intenta triunfar en Hollywood. El elenco de apoyo también es muy bueno, con Wilde, Luna y Spike Jonze dando actuaciones memorables.
                Babylon es una película bien hecha con mucho que ofrecer. Es una película visualmente impresionante con excelentes actuaciones. Sin embargo, la película también es larga y algo autoindulgente. En general, Babylon es una película que vale la pena para los fanáticos de la historia de Hollywood y para aquellos que disfrutan de las películas bien hechas.
                </p>
                <p>Estos son algunos de los pros y los contras de la película:</p>
                <h4>Ventajas:</h4>
                <li>Visualmente impresionante</li>
                <li>Excelentes actuaciones</li>
                <li>Historia fascinante</li>
                <li>Una mirada perspicaz a la historia de Hollywood</li>
                <h4>Contras:</h4>
                <li>Largo</li>
                <li>Algo autoindulgente</li>
                <li>Puede ser de ritmo lento a veces</li>
            </Modal>
            <button class="bros" onClick={openModal3}>MARIO BROS</button>
            <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
                <p>La película Super Mario Bros. 2023 es una película animada visualmente impresionante que seguramente complacerá a los fanáticos de la franquicia de videojuegos y a las familias por igual. La película sigue a Mario (Chris Pratt), Luigi (Charlie Day) y la Princesa Peach (Anya Taylor-Joy) mientras se unen para salvar el Reino Champiñón de Bowser (Jack Black).
                La película es muy divertida, gracias a su encantador elenco, ingenioso humor y emocionantes secuencias de acción. Pratt encaja perfectamente en el papel de Mario, dando vida al personaje con su actuación enérgica. Day también es genial como Luigi, ya que proporciona un personaje humano conectado a tierra y con el que se puede relacionar para que Mario interactúe. Taylor-Joy también es excelente como la Princesa Peach, aportando un sentido de gracia y determinación al papel. Black es, por supuesto, hilarante como Bowser, dando una actuación que es a la vez maníaca y amenazante.
                Los efectos visuales de la película también son de primera categoría, con el Reino Champiñón cobrando vida con un detalle sorprendente. Las secuencias de acción de la película también están bien coreografiadas y son emocionantes, lo que hace que la película sea divertida tanto para niños como para adultos.
                En general, la película Super Mario Bros. 2023 es una película sorprendentemente agradable que seguramente complacerá a los fanáticos de la franquicia de videojuegos y a las familias por igual. La película está bien hecha, es divertida y emocionante, lo que la convierte en una excelente opción para una noche de cine.
                Sin embargo, la película no está exenta de defectos. La trama es algo predecible, y parte del humor es juvenil. Además, el ritmo de la película es un poco desigual, con algunas escenas que se sienten apresuradas y otras con un ritmo lento.
                En general, le daría a la película Super Mario Bros. de 2023 un 7 sobre 10. Es una película divertida y agradable que seguramente complacerá a los fanáticos de la franquicia de videojuegos y a las familias por igual. Sin embargo, la película no está exenta de defectos, y puede que no sea del gusto de todos.
                </p>
                <p>Estos son algunos de los pros y los contras de la película:</p>
                <h4>Ventajas:</h4>
                <li>Reparto Encantador</li>
                <li>Humor inteligente</li>
                <li>Secuencias de acción emocionantes</li>
                <li>Grandes efectos visuales</li>
                <li>Fiel a la franquicia de videojuegos</li>
                <h4>Contras:</h4>
                <li>Trama predecible</li>
                <li>Parte del humor es juvenil</li>
                <li>El ritmo es desigual</li>
                <li>No es tan divertido como podría ser</li>
            </Modal>
            <button class="ryf" onClick={openModal4}>RAPIDOS Y FURIOSOS</button>
            <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
                <p>Fast X es la décima entrega de la franquicia Fast & Furious, y es un viaje salvaje de principio a fin. La película ve el regreso del elenco original, incluidos Vin Diesel, Michelle Rodriguez, Tyrese Gibson y Sung Kang. También presenta algunas caras nuevas, como Jason Momoa y Brie Larson.
                La película está dirigida por Louis Leterrier y es una desviación de las películas anteriores de la franquicia. Las secuencias de acción son más exageradas y ridículas que nunca, y la película tiene un tono más cómico. Sin embargo, la película aún conserva el corazón y el alma de la franquicia Fast & Furious.
                La mayor fortaleza de la película es su elenco. Todos los actores dan grandes actuaciones y tienen una gran química juntos. Momoa se destaca como el villano y aporta mucha energía a la película. Larson también es excelente como nueva incorporación al elenco, y tiene una gran química con Diesel.
                La mayor debilidad de la película es su trama. La trama es algo enrevesada y predecible, y realmente no agrega nada nuevo a la franquicia. Sin embargo, la película es tan divertida que la trama realmente no importa.
                En general, Fast X es una película divertida y agradable que seguramente complacerá a los fanáticos de la franquicia Fast & Furious. La película es exagerada, ridícula y muy divertida. Si está buscando pasar un buen rato en el cine, debe visitar Fast X.
                </p>
                <p>Estos son algunos de los pros y los contras de la película:</p>
                <h4>Ventajas:</h4>
                <li>Gran elenco</li>
                <li>Divertido y agradable</li>
                <li>Secuencias de acción exageradas</li>
                <li>Gran quimica entre los actores</li>
                <h4>Contras:</h4>
                <li>Trama enrevesada</li>
                <li>Predecible</li>
                <li>No agrega nada de nuevo a la franquicia</li>
            </Modal>
            <button class="pixels" onClick={openModal5}>PIXELS</button>
            <Modal isOpen={isOpenModal5} closeModal={closeModal5}>
                <p>Pixels es una película de comedia de ciencia ficción estadounidense de 2015 dirigida por Chris Columbus y escrita por Tim Herlihy y Timothy Dowling. La película está protagonizada por Adam Sandler, Kevin James, Josh Gad, Peter Dinklage, Michelle Monaghan, Brian Cox y Sean Bean. La película sigue a un grupo de ex campeones de videojuegos que son reclutados por el gobierno para salvar al mundo de los extraterrestres que malinterpretan los juegos clásicos de arcade como una declaración de guerra.
                Pixels fue una decepción crítica y comercial, recaudando $ 244,9 millones en todo el mundo frente a un presupuesto de producción de $ 88 millones. La película fue criticada por su pobre humor, trama predecible y efectos especiales sin inspiración.
                Sin embargo, hubo algunas críticas positivas de la película. Algunos críticos elogiaron el factor nostalgia de la película y su capacidad para atraer tanto a niños como a adultos. Otros disfrutaron de las secuencias de acción de la película y sus efectos visuales.
                En general, Pixels es una película defectuosa que no deja de tener momentos de disfrute. Sin embargo, los muchos defectos de la película finalmente superan sus puntos fuertes.
                </p>
                <p>Estos son algunos de los pros y los contras de la película:</p>
                <h4>Venyajas:</h4>
                <li>Factor nostálgico</li>
                <li>Apelar a niños y adultos</li>
                <li>Secuencias de acción</li>
                <li>Efectos visuales</li>
                <h4>Contras:</h4>
                <li>Mal humor</li>
                <li>Trama predecible</li>
                <li>Efectos especiales sin inspiración</li>
                <li>Falta de originalidad</li>
            </Modal>
            <button class="thor" onClick={openModal6}>THOR LOVE AND THUNDER</button>
            <Modal isOpen={isOpenModal6} closeModal={closeModal6}>
                <p>Thor: Love and Thunder es la cuarta película de la serie de películas de Thor y la película número 29 en Marvel Cinematic Universe (MCU). La película está dirigida por Taika Waititi, quien también dirigió Thor: Ragnarok, y está protagonizada por Chris Hemsworth como Thor, Natalie Portman como Jane Foster, Tessa Thompson como Valkyrie y Christian Bale como Gorr the God Butcher.
                La película sigue a Thor mientras intenta encontrar la paz interior después de los eventos de Avengers: Endgame. Sin embargo, su retiro se ve interrumpido por la llegada de Gorr the God Butcher, que busca destruir a todos los dioses. Para combatir la amenaza, Thor solicita la ayuda de Valkyrie, Korg y su exnovia Jane Foster, quien, para sorpresa de Thor, empuña inexplicablemente su martillo mágico, Mjolnir, como el Poderoso Thor.
                Thor: Love and Thunder es una película visualmente impresionante con algunas secuencias de acción geniales. La película también presenta algunos momentos divertidos, gracias al característico sentido del humor de Waititi. Sin embargo, la película también es algo desigual, con algunas escenas que se sienten apresuradas y otras que se sienten lentas.
                Las actuaciones en Thor: Love and Thunder son sólidas. Hemsworth es genial como Thor, aportando sentido del humor y vulnerabilidad al papel. Portman también es excelente como Jane Foster, y aporta una sensación de fuerza y determinación al papel. Thompson también es excelente como Valkyrie, y aporta sentido del humor y ternura al papel. Bale es, por supuesto, genial como Gorr the God Butcher, dando una actuación que es a la vez amenazante y comprensiva.
                En general, Thor: Love and Thunder es una película divertida y agradable que seguramente complacerá a los fanáticos de la serie de películas de Thor y la MCU. Sin embargo, la película no está exenta de defectos, y puede que no sea del gusto de todos.
                </p>
                <p>Estos son algunos de los pros y los contras de la película:</p>
                <h4>Ventajas:</h4>
                <li>Visualmente impresionante</li>
                <li>Grandes secuencias de acción</li>
                <li>Momentos divertidos</li>
                <li>Fuertes actuaciones</li>
                <h4>Contras:</h4>
                <li>Ritmo desigual</li>
                <li>Algunas escenas se sienten apresuradas</li>
                <li>No tan divertido como Ragnarok</li>
            </Modal>
        </div>
    )
}
export default Modals