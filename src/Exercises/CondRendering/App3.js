function Drink({ name }) {
    let type, gram, year;

    if(name === 'tea'){
        type = 'leaf';
        gram = '15-70 mg/cup';
        year = '4,000+ years';
    }else{
        type = 'bean';
        gram = '80-185 mg/cup';
        year = '1,000+ years';
    }


  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{type}</dd>
        <dt>Caffeine content</dt>
        <dd>{gram}</dd>
        <dt>Age</dt>
        <dd>{year}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}