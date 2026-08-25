export default function PeopleDecor() {
  return (
    <div className="people">

      {/* =====================
          MAN
      ===================== */}

      <div
        className="person person--men"
        aria-hidden="true"
      >

        <picture>
          <source
            media="(max-width: 600px)"
            srcSet="/patterns/mb_men.svg"
          />
          <img
            src="/patterns/men.svg"
            alt=""
            className="person__img"
          />
        </picture>

      </div>


      {/* =====================
          GIRL
      ===================== */}

      <div
        className="person person--girl"
        aria-hidden="true"
      >

        <picture>
          <source
            media="(max-width: 600px)"
            srcSet="/patterns/mb_girl.svg"
          />
          <img
            src="/patterns/girl.svg"
            alt=""
            className="person__img"
          />
        </picture>

      </div>

    </div>
  )
}