import React, { useState, useEffect } from "react";
import Header from './Header';
import FinalRating from './FinalRating';

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
    categoryDescription: "Potentially dangerous or anti-social behaviour is clearly disapproved of. No emphasis on realistic or easily accessible weapons.",
    answerOptions: [
      {
        answerText:
          "Potentially dangerous or anti-social clearly disapproved of. No emphasis on weapons.",
        ageRating: "U"
      },
      {
        answerText:
          "Potentially dangerous behaviour is presented as safe or fun, but no detail is shown. Weapons (such as knives) are featured, but are not glamorised. No focus on anti-social behaviour.",
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
      { answerText: "Discriminatory language does not feature at all, or is clearly disapproved of within the film.", ageRating: "U" },
      { answerText: "Discriminatory language or behaviour features a small amount but is clearly disapproved of, or is in an educational or historical context.", ageRating: "PG" },
      { answerText: "Discriminatory language or behaviour features but is not endorsed by the work as a whole. Aggressive discriminatory language or behaviour features but is clearly condemned.", ageRating: "12" },
      { answerText: "The work as a whole must not endorse discriminatory language or behaviour, although there may be racist, homophobic or other discriminatory themes and language.", ageRating: "15" },
      { answerText: "Discriminatory language or behaviour features regularly throughout the film.", ageRating: "18" }
    ]
  },
  // Drugs
  {
    categoryTitle: "Drugs",
    categoryDescription: "Drug taking may be shown but the work as a whole must not promote or encourage drug misuse (for example, through detailed instruction). The misuse of easily accessible and highly dangerous substances (for example, aerosols or solvents) is unlikely to be acceptable.",
    answerOptions: [
      { answerText: "No mention of drugs, or references to illegal drugs or drug misuse are infrequent, or have a clear educational purpose or anti-drug message suitable for young children.", ageRating: "U" },
      { answerText: "References to illegal drugs or drug misuse are innocuous or carry a suitable anti-drug message.", ageRating: "PG" },
      { answerText: "Misuse of drugs is infrequent and does not glamorise or give detailed instruction.", ageRating: "12" },
      { answerText: "Drug taking is shown but the work as a whole does not promote or encourage drug misuse (eg: through detailed instruction). Easily accessible and highly dangerous substances (for example, aerosols or solvents) do not feature.", ageRating: "15" },
      { answerText: "Strong, frequent drug use or abuse of easily accessible and highly dangerous substances feature throughout the film.", ageRating: "18" }
    ]
  },
  // Language
  {
    categoryTitle: "Language",
    categoryDescription: "There may be strong language. Very strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.",
    answerOptions: [
      { answerText: "Infrequent use only of very mild bad language.", ageRating: "U" },
      { answerText: "Mild bad language only. Aggressive or very frequent use of mild bad language may result in a work being passed at a higher category.", ageRating: "PG" },
      { answerText: "There may be moderate bad language. Strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.", ageRating: "12" },
      { answerText: "There may be strong language. Very strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.", ageRating: "15" },
      { answerText: "Strong language features frequently throughout the film.", ageRating: "18" }
    ]
  },
  // Sex and Nudity
  {
    categoryTitle: "Sex and Nudity",
    categoryDescription: "There are no constraints on nudity in a non-sexual or educational context. Sexual nudity may be permitted but strong detail is likely to be brief or presented in a comic context.",
    answerOptions: [
      { answerText: "Occasional nudity, with no sexual context.", ageRating: "U" },
      { answerText: "Some nudity, with no sexual context. Sexual activity is implied, but is discreet and infrequent. Some mild sex references and innuendo are featured.", ageRating: "PG" },
      { answerText: "Some nudity, but in a sexual context it is brief and discreet.", ageRating: "12" },
      { answerText: "Sexual activity, but without strong detail. There may be strong verbal references to sexual behaviour, but any depiction of the stronger forms of sexual violence is not detailed or prolonged.", ageRating: "15" },
      { answerText: "Sexual activity, with some strong detail. Repeated strong verbal references to sexual behaviour, and references to sexual threat are more prolonged.", ageRating: "18" }
    ]
  },
  // Threat and Horror
  {
    categoryTitle: "Threat and Horror",
    categoryDescription: "There may be strong threat and horror. A sustained focus on sadistic threat is unlikely to be acceptable.",
    answerOptions: [
      { answerText: "Scary or potentially unsettling sequences are mild, brief and unlikely to cause undue anxiety to young children. The outcome is reassuring.", ageRating: "U" },
      { answerText: "Frightening sequences or situations where characters are in danger are prolonged or intense. Fantasy settings and comedy may be mitigating factors.", ageRating: "PG" },
      { answerText: "Moderate physical and psychological threat and horror sequences. Although some scenes may be disturbing, the overall tone is not. Horror sequences are frequent or sustained.", ageRating: "12" },
      { answerText: "Strong threat and horror, however there is not sustained focus on sadistic threat.", ageRating: "15" },
      { answerText: "Strong threat and horror feature regularly, and sadistic threat features is more prolonged.", ageRating: "18" }
    ]
  },
  // Violence
  {
    categoryTitle: "Violence",
    categoryDescription: "Violence may be strong but should not dwell on the infliction of pain or injury. The strongest gory images are unlikely to be acceptable. Strong sadistic violence is also unlikely to be acceptable.",
    answerOptions: [
      { answerText: "Violence is generally very mild. Some mild violence features but is justified by context (for example, comedic, animated, wholly unrealistic).", ageRating: "U" },
      { answerText: "Violence is mild. Some moderate violence, without detail, and it is justified by its context (for example, history, comedy or fantasy).", ageRating: "PG" },
      { answerText: "Moderate violence but it does not dwell on detail. No emphasis on injuries or blood, but occasional gory moments feature and are justified by the context.", ageRating: "12" },
      { answerText: "Strong violence features but it does not dwell on the infliction of pain or injury. No strong gory images, and no strong sadistic violence.", ageRating: "15" },
      { answerText: "Strong or gory violence, with some detail of the infliction of pain or injury.", ageRating: "18" }
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

    const nextQuestion = currentTopic + 1;
    if (nextQuestion < topics.length) {
      setCurrentTopic(nextQuestion);
    } else {
      setShowRating(true);
    }

    setSiteBackgroundImage(document.body.style.backgroundImage = `url(${backgroundImages[answers.length]})`);

    if (finalAgeRating < ratingRank) {
      setFinalAgeRating(ratingRank);
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
    <Header />
    <div className="app d-flex flex-column">
      {showRating ? (
        <FinalRating finalAgeRating={finalAgeRating} ratingColor={ratingColor} ratingsList={ratingsList} answers={answers} />
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
