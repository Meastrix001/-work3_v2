import homeStyles from "./home.module.scss";
import portfolio_2 from "../../assets/images/portfolio_home2.png"
import about1 from "../../assets/images/about_1.jpg"
import about2 from "../../assets/images/about_2.jpeg"
import about3 from "../../assets/images/about_3.png"


interface Props {

}

export const Home = (props: Props) => {
  return (
    <div className={homeStyles.home}>

      <div className={homeStyles.background}>
        <div className={homeStyles.hero}>
          {/* <div className={homeStyles.half}>
            <img src={hero_img} alt="" />
          </div> */}
          <div className={homeStyles.half}>
            <p className={homeStyles.smaltext}>Heb je een droom?</p>
            <p className={homeStyles.smaltext}>Maar geen idee hoe je er aan begint?</p>
            <h2 className={homeStyles.title}>KnowID</h2>
            <p className={homeStyles.catchphrase}>Wij helpen je jouw droom waar te maken door </p>
            <p className={homeStyles.catchphrase}> een team top-developers samen te stellen</p>
          </div>
        </div>
      </div>


      <div className={homeStyles.services}>
        <h2 className={homeStyles.title}>Onze diensten</h2>
        <p>Dit zijn een paar van de Key diensten, Maar er is voor iedere wens een developer die deze wens kan vervullen</p>
        <div>
          <ul className={homeStyles.hero_list}>
            <li>Software design</li>
            <li>Web development</li>
            <li>Front-End</li>
            <li>Back-end</li>
            <li>Design & brainstorming</li>
          </ul>
        </div>
      </div>

      <div className={homeStyles.services_2}>
        <h2 className={homeStyles.title}>Voordelen die KnowID aanbied</h2>
        <p>Bij KnowID kan je zeker zijn van een hoop dingen, dit zijn een paar van de belangrijkste</p>
        <ul>
          <li className={homeStyles.portfolio_details}>
            <div>
              <img src={about1} alt="" />
            </div>
            <div className={homeStyles.content}>
              <span>Creative minds</span>
              <h3>Diverse developers boost creativiteit</h3>
              <p>
                Door een team van diverse developers / freelancers kan je er zeker van zijn dat zowel bij het helpen van designen & development we met een oplossing en resultaat  komen voor iedere wens. </p>
            </div>
          </li>
          <li className={homeStyles.portfolio_details}>
            <div>
              <img src={about2} alt="" />
            </div>
            <div className={homeStyles.content}>
              <span>Design & development</span>
              <h3>Het Team kan je helpen met zowel de design, development & onderhoud van je product</h3>
              <p>
                Of je nu al een design op papier hebt, in je hoofd, of totaal niks.. Wij helpen je hoe dan ook verder om een resultaat op tafel te krijgen!</p>
            </div>
          </li>
          <li className={homeStyles.portfolio_details}>
            <div>
              <img src={about3} alt="" />
            </div>
            <div className={homeStyles.content}>
              <span>UI / UX</span>
              <h3>Of je nu software of een website wenst, we bezorgen altijd een vlotte UI & UX</h3>
              <p>
                Een goede user interface & user experience is enorm belangrijk, door de vershillende developers kan er voor elk project een passende en goede UI/UX bezorgd worden, ook is de kans kleiner op onverwachte bugs hierdoor!</p>
            </div>
          </li>
        </ul>
      </div>

      <div className={homeStyles.work}>
        <h2 className={homeStyles.title}>Portfolio</h2>
        <p>We hebben zoveel dingen gedaan</p>
        <ul>
          <li className={homeStyles.portfolio_details}>
            <div>
              <img src={portfolio_2} alt="" />
            </div>
            <div className={homeStyles.content}>
              <span>A past project</span>
              <h3>A past project text title</h3>
              <p>
                A past project text description about the project</p>
            </div>
          </li>
          <li className={homeStyles.portfolio_details}>
            <div>
              <img src={portfolio_2} alt="" />
            </div>
            <div className={homeStyles.content}>
              <span>A past project</span>
              <h3>A past project text title</h3>
              <p>
                A past project text description about the project</p>
            </div>
          </li>
          <li className={homeStyles.portfolio_details}>
            <div>
              <img src={portfolio_2} alt="" />
            </div>
            <div className={homeStyles.content}>
              <span>A past project</span>
              <h3>A past project text title</h3>
              <p>
                A past project text description about the project</p>
            </div>
          </li>
        </ul>
      </div>

      <div className={homeStyles.contact}>
        <h2 className={homeStyles.title}>Neem contact op!</h2>
        <p>Als je in contact wilt komen met ons voor meer info over een samenwerking of andere info. Vul dan hier uw gegevens in.</p>
        <form action="">
          <div className={homeStyles.input_flex}>
            <input type="text" placeholder='Naam' />
            <input type="text" placeholder='E-mail' />
          </div>
          <textarea name="text" placeholder="bericht..." id="" />
        </form>
        <button className={homeStyles.form_btn}>Send</button>
      </div>
    </div>
  )
}
