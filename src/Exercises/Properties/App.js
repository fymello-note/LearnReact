import { getImageUrl } from "./utils";

function Profile({person, size}){
    let dim = size <= 90 ? 's' : 'b';
    return (<section className="profile">
        <h2>{person.fullName}</h2>
        <img
          className="avatar"
          src={getImageUrl(person.img.src, dim)}
          alt={person.img.alt}
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.awardsNumber} </b>
            ({person.awards})
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovered}
          </li>
        </ul>
      </section>
    )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
        person={{
            fullName: "Maria Skłodowska-Curie",
            img: {
                src: "szV5sdG",
                alt: "Maria Skłodowska-Curie"
            },
            profession: "physicist and chemist",
            awardsNumber: 4,
            awards: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
            discovered:"polonium (chemical element)"
        }}
        size={90}
      />
      <Profile 
        person={{
            fullName: "Katsuko Saruhashi",
            img: {
                src: "YfeOqp2",
                alt: "Katsuko Saruhashi"
            },
            profession: "geochemist",
            awardsNumber: 2,
            awards: "(Miyake Prize for geochemistry, Tanaka Prize)",
            discovered:"a method for measuring carbon dioxide in seawater"
        }}
        size={130}
      />
    </div>
  );
}
