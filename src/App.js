import React, { useState, useEffect } from "react";

const backgroundImages = [
  // default
  "/img/bg-1.svg",
  // dangerousBehaviour
  "/img/bg-2.svg",
  // discrimination
  "/img/bg-3.svg",
  // drugs
  "/img/bg-4.svg",
  // language
  "/img/bg-2.svg",
  // sexAndNudity
  "/img/bg-1.svg",
  // threatAndHorror
  "/img/bg-3.svg", 
]
const topics = [
  // Dangerous behaviour
  {
    categoryTitle: "Dangerous Behaviour",
    categoryDescription: "Potentially dangerous or anti-social behaviour which young children may copy must be clearly disapproved of. No emphasis on realistic or easily accessible weapons.",
    answerOptions: [
      {
        answerText:
          "Potentially dangerous or anti-social clearly disapproved of. No emphasis on weapons.",
        ageRating: "U"
      },
      {
        answerText:
          "No detail of potentially dangerous behaviour, if that behaviour is presented as safe or fun. No glamorisation of weapons such as knives. No focus on anti-social behaviour.",
        ageRating: "PG"
      },
      {
        answerText:
          "No promotion of potentially dangerous behaviour which children are likely to copy. No glamorisation of realistic or easily accessible weapons such as knives. No endorsement of anti-social behaviour.",
        ageRating: "12"
      },
      {
        answerText:
          "Dangerous behaviour (for example, suicide, self-harming and asphyxiation) should not dwell on detail which could be copied. Whether the depiction of easily accessible weapons is acceptable will depend on factors such as realism, context and setting.",
        ageRating: "15"
      },
      {
        answerText:
          "Characters are shown engaging in dangerous behaviour such as self-harming and some gory detail is shown. Weapons feature regularly throughout the film.",
        ageRating: "18"
      }
    ]
  },
  // Discrimination
  {
    categoryTitle: "Discrimination",
    categoryDescription: "The work as a whole must not endorse discriminatory language or behaviour, although there may be racist, homophobic or other discriminatory themes and language.",
    answerOptions: [
      { answerText: "U - Discrimination", ageRating: "U" },
      { answerText: "PG - Discrimination", ageRating: "PG" },
      { answerText: "12 - Discrimination", ageRating: "12" },
      { answerText: "15 - Discrimination", ageRating: "15" },
      { answerText: "18 - Discrimination", ageRating: "18" }
    ]
  },
  // Drugs
  {
    categoryTitle: "Drugs",
    categoryDescription: "Drug taking may be shown but the work as a whole must not promote or encourage drug misuse (for example, through detailed instruction). The misuse of easily accessible and highly dangerous substances (for example, aerosols or solvents) is unlikely to be acceptable.",
    answerOptions: [
      { answerText: "U - Drugs", ageRating: "U" },
      { answerText: "PG - Drugs", ageRating: "PG" },
      { answerText: "12 - Drugs", ageRating: "12" },
      { answerText: "15 - Drugs", ageRating: "15" },
      { answerText: "18 - Drugs", ageRating: "18" }
    ]
  },
  // Language
  {
    categoryTitle: "Language",
    categoryDescription: "There may be strong language. Very strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.",
    answerOptions: [
      { answerText: "U - Language", ageRating: "U" },
      { answerText: "PG - Language", ageRating: "PG" },
      { answerText: "12 - Language", ageRating: "12" },
      { answerText: "15 - Language", ageRating: "15" },
      { answerText: "18 - Language", ageRating: "18" }
    ]
  },
  // Sex and Nudity
  {
    categoryTitle: "Sex and Nudity",
    categoryDescription: "There are no constraints on nudity in a non-sexual or educational context. Sexual nudity may be permitted but strong detail is likely to be brief or presented in a comic context.",
    answerOptions: [
      { answerText: "U - Sex and nudity", ageRating: "U" },
      { answerText: "PG - Sex and nudity", ageRating: "PG" },
      { answerText: "12 - Sex and nudity", ageRating: "12" },
      { answerText: "15 - Sex and nudity", ageRating: "15" },
      { answerText: "18 - Sex and nudity", ageRating: "18" }
    ]
  },
  // Threat and Horror
  {
    categoryTitle: "Threat and Horror",
    categoryDescription: "There may be strong threat and horror. A sustained focus on sadistic threat is unlikely to be acceptable.",
    answerOptions: [
      { answerText: "U - Threat and horror", ageRating: "U" },
      { answerText: "PG - Threat and horror", ageRating: "PG" },
      { answerText: "12 - Threat and horror", ageRating: "12" },
      { answerText: "15 - Threat and horror", ageRating: "15" },
      { answerText: "18 - Threat and horror", ageRating: "18" }
    ]
  },
  // Violence
  {
    categoryTitle: "Violence",
    categoryDescription: "Violence may be strong but should not dwell on the infliction of pain or injury. The strongest gory images are unlikely to be acceptable. Strong sadistic violence is also unlikely to be acceptable.",
    answerOptions: [
      { answerText: "U - Violence", ageRating: "U" },
      { answerText: "PG - Violence", ageRating: "PG" },
      { answerText: "12 - Violence", ageRating: "12" },
      { answerText: "15 - Violence", ageRating: "15" },
      { answerText: "18 - Violence", ageRating: "18" }
    ]
  }
];

const colors = [
  // green
  "#0ac700",
  // yellow
  "#fbad00",
  // orange
  "#ff7d13",
  // pink
  "#fb4f93",
  // red
  "#dc0a0a"
]

const ratingsList = ["U", "PG", "12", "15", "18"];

const addRatingItem = (category, ageRating) => {
  return {
    categoryTitle: category,
    categoryRating: ageRating
  };
};

export default function App() {
  let i = 0;

  const [currentTopic, setCurrentTopic] = useState(0);
  const [showRating, setShowRating] = useState(false);
  const [finalAgeRating, setFinalAgeRating] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [siteBackgroundImage, setSiteBackgroundImage] = useState("")
  const [ratingColor, setRatingColor] = useState("")

  const handleAnswerOptionClick = (ageRating, category) => {
    setAnswers([...answers, addRatingItem(category, ageRating)]);

    const ratingRank = ratingsList.findIndex((rating) => rating === ageRating);

    if (finalAgeRating < ratingRank) {
      setFinalAgeRating(ratingRank);
    }

    setSiteBackgroundImage(document.body.style.backgroundImage = `url(${backgroundImages[answers.length]})`)

    const nextQuestion = currentTopic + 1;
    if (nextQuestion < topics.length) {
      setCurrentTopic(nextQuestion);
    } else {
      setShowRating(true);
    }
  };

  useEffect(() => {
    if (finalAgeRating === 1) {
      console.log(`Set the color here: ${finalAgeRating}`)
    }

    setRatingColor(colors[finalAgeRating])
  }, [finalAgeRating]);

  return (
    <>
    <div className="header">
      <div>
        <a href="index.html"><img src="/img/logo.svg" width="200px" height="71px" alt="Temporary Logo" /></a>
      </div>
      <nav>
        <a href="http://">About</a>
        <a href="http://">Donate</a>
        <a href="http://">Visit BBFC</a>
        <a href="http://">Contact</a>
      </nav>
    </div>
    <div className="app d-flex flex-column">
      {showRating ? (
        <div className="ratings-container d-flex flex-column">
          <div className="ratings-final d-flex align-items-center">
            {(finalAgeRating || finalAgeRating === 0) ? (
              <div>
                <h3>The BBFC would probably rate this film: <span style={{color: ratingColor}}>{ratingsList[finalAgeRating]}</span></h3>
                <img src={`/img/icon-${ratingsList[finalAgeRating]}.svg`} alt="Final film rating icon" />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat ornare maximus. Praesent porta felis eu tortor facilisis placerat. Phasellus rutrum dapibus auctor. Phasellus vulputate, nisl sit amet elementum imperdiet, metus leo pellentesque turpis, sed fermentum quam nulla quis libero. Ut sit amet orci semper, euismod leo sit amet, bibendum mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin a lorem in mauris auctor mattis at eget leo. Suspendisse finibus viverra nisi, a fringilla leo pellentesque id. Vestibulum ac tortor neque.
                </p>
              </div>
            ) : (
              <>
              </>
            )}
          </div>
          <div className="ratings-section d-flex flex-column p-2">
            <h2>The ratings are:</h2>
            <div className="ratings-overview d-flex flex-row flex-wrap">
              {answers.map((answer, i) => (
                <div key={i} className="ratings-overview-item">
                  <img src={`/img/icon-${answer.categoryRating}.svg`} alt="" />
                    <p className="d-flex flex-column justify-content-center">{answer.categoryTitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column">
          <div className="question-section d-flex flex-column align-items-start">
            <div className="question-text">
              <h2>{topics[currentTopic].categoryTitle}</h2>
              <p>{topics[currentTopic].categoryDescription}</p>
            </div>
          </div>
          <div className="answer-section d-flex">
            {topics[currentTopic].answerOptions.map((answerOption) => (
              <div className="answer-item">
                <button
                  onClick={() =>
                    handleAnswerOptionClick(
                      answerOption.ageRating,
                      topics[currentTopic].categoryTitle
                    )
                  }
                  key={i++}
                >
                  <span className="d-flex align-items-center">
                    <img src={`/img/circle-${answerOption.ageRating}.svg`} alt=""/>
                    {answerOption.answerText}
                  </span>
                </button>
              </div>
            ))}
          </div>
          <div className="question-count ml-auto">
              <span className="font-weight-bold">{currentTopic + 1}</span>/{topics.length}
            </div>
        </div>
      )}
    </div>
  </>
  );
}
