import React, { useState, useEffect } from "react";
import Header from './Header';
import FinalRating from './FinalRating';
import Questions from "./Questions";
import {useSpring, animated, config} from 'react-spring';

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
    categoryDescription: "Please describe the way that dangerous behaviour is depicted in your film. This could include risky acts, self-harm or the use of weapons.",
    answerOptions: [
      {
        answerText:
          "Potentially dangerous or anti-social behaviour is clearly disapproved of, and no emphasis is placed on weapons.",
        ageRating: "U"
      },
      {
        answerText:
          "Potentially dangerous behaviour is presented as safe or fun, but no detail is shown. Weapons (such as knives) are featured, but are not glamorised. No focus on anti-social behaviour.",
        ageRating: "PG"
      },
      {
        answerText:
          "Potentially dangerous behaviour features but is not promoted, and weapons are featured, also (but not glamorised). Anti-social behaviour is not endorsed in the film.",
        ageRating: "12"
      },
      {
        answerText:
          "Dangerous behaviour (for example, suicide, self-harming and asphyxiation) feature but with little detail, so they cannot be copied. Weapons are featured but are contextually appropriate.",
        ageRating: "15"
      },
      {
        answerText:
          "Characters are shown engaging in dangerous behaviour such as self-harming and some gory detail is shown. If weapons are featured, they are used regularly throughout the film.",
        ageRating: "18"
      }
    ]
  },
  // Discrimination
  {
    categoryTitle: "Discrimination",
    categoryDescription: "Please describe the way that discrimination such as racism or homophobic feature in your film.",
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
    categoryDescription: "Please describe the way that illegal drugs or drug misuse feature in your film.",
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
    categoryDescription: "Please describe the way that bad language features in your film.",
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
    categoryDescription: "Please describe the way that sexual activity and nudity feature in your film.",
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
    categoryDescription: "Please describe the way that threat and horror feature in your film.",
    answerOptions: [
      { answerText: "Scary or potentially unsettling sequences are mild, brief and unlikely to cause undue anxiety to young children. The outcome is reassuring.", ageRating: "U" },
      { answerText: "Frightening sequences or situations where characters are in danger are prolonged or intense. Fantasy settings and comedy may be mitigating factors.", ageRating: "PG" },
      { answerText: "Moderate physical and psychological threat and horror sequences. Although some scenes may be disturbing, the overall tone is not. Horror sequences are frequent or sustained.", ageRating: "12" },
      { answerText: "Strong threat and horror, however there is not sustained focus on sadistic threat.", ageRating: "15" },
      { answerText: "Strong threat and horror feature regularly, and sadistic threat is more prolonged.", ageRating: "18" }
    ]
  },
  // Violence
  {
    categoryTitle: "Violence",
    categoryDescription: "Please describe the way that violence features in your film.",
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
    setRatingColor(colors[finalAgeRating])
  }, [finalAgeRating]);


  return (
    <>
    <Header />
    
      {showRating ? (
        <FinalRating finalAgeRating={finalAgeRating} ratingColor={ratingColor} ratingsList={ratingsList} answers={answers} />
      ) : (
          <Questions topics={topics} handleAnswerOptionClick={handleAnswerOptionClick} i={i} currentTopic={currentTopic} setCurrentTopic={setCurrentTopic} />
      )}

  </>
  );
}
