import React, { useState, useEffect } from 'react';
import FinalRating from './FinalRating';
import Questions from "./Questions";

// Icon imports
import { ReactComponent as DangerIcon } from './images/danger-icon.svg';
import { ReactComponent as DiscriminationIcon } from './images/discrimination-icon.svg';
import { ReactComponent as DrugsIcon } from './images/drugs-icon.svg';
import { ReactComponent as LanguageIcon } from './images/language-icon.svg';
import { ReactComponent as SexNudityIcon } from './images/sex-nudity-icon.svg';
import { ReactComponent as ThreatHorrorIcon } from './images/threat-horror-icon.svg';
import { ReactComponent as ViolenceIcon } from './images/violence-icon.svg';

    const topics = [
        // Dangerous behaviour
        {
        id: 0,
        icon: <DangerIcon fill="#FFF" />,
        color: "#6102d2",
        categoryTitle: "Dangerous Behaviour",
        categoryDescription: "Please select the option that best describes how dangerous behaviour features in your film:",
        answerOptions: [
            { answerText: "It is disapproved of, and weapons are not emphasised.", ageRating: "U" },
            { answerText: "Weapons or mildly dangerous behaviour are featured, but are not glamorised.",
            ageRating: "PG" },
            { answerText: "Weapons or moderately dangerous behaviour feature, but are not glamorised.",
            ageRating: "12" },
            { answerText: "Dangerous behaviour (for example, suicide or the use of weapons) features but without detail.", ageRating: "15" },
            { answerText: "Behaviour such as self-harm is shown, and with gory detail. If weapons feature, they are used regularly.", ageRating: "18" }
        ]
        },
        // Discrimination
        {
        id: 1,
        icon: <DiscriminationIcon fill="#FFF" />,
        color: "#fe346e",
        categoryTitle: "Discrimination",
        categoryDescription: "Please select the option that best describes how discrimination features in your film:",
        answerOptions: [
            { answerText: "No discriminatory language.", ageRating: "U" },
            { answerText: "It features a small amount but is disapproved of and is contextually appropriate.", ageRating: "PG" },
            { answerText: "Aggressive discriminatory language or behaviour features but is clearly condemned.", ageRating: "12" },
            { answerText: "Some racist, homophobic or other discriminatory themes and language feature on occasion.", ageRating: "15" },
            { answerText: "Discriminatory language or behaviour features regularly throughout the film.", ageRating: "18" }
        ]
        },
        // Drugs
        {
        id: 2,
        icon: <DrugsIcon fill="#FFF" />,
        color: "#fcdb00",
        categoryTitle: "Drugs",
        categoryDescription: "Please select the option that best describes how drugs feature in your film:",
        answerOptions: [
            { answerText: "None featured, or clear anti-drug themes.", ageRating: "U" },
            { answerText: "Some very mild references.", ageRating: "PG" },
            { answerText: "Some drug use shown, but it is infrequent.", ageRating: "12" },
            { answerText: "Drug taking is shown, but it does promote or encourage drug misuse.", ageRating: "15" },
            { answerText: "Strong, frequent drug use features throughout.", ageRating: "18" }
        ]
        },
        // Language
        {
        id: 3,
        icon: <LanguageIcon fill="#FFF" />,
        color: "#0cd68a",
        categoryTitle: "Bad Language",
        categoryDescription: "Please select the option that best describes how bad language features in your film:",
        answerOptions: [
            { answerText: "Infrequent use of very mild bad language.", ageRating: "U" },
            { answerText: "Mild bad language only.", ageRating: "PG" },
            { answerText: "Moderate bad language, with rare instances of strong language.", ageRating: "12" },
            { answerText: "Strong languages features with rare instances of very strong language.", ageRating: "15" },
            { answerText: "Very strong language features frequently.", ageRating: "18" }
        ]
        },
        // Sex and Nudity
        {
        id: 4,
        icon: <SexNudityIcon fill="#FFF"/>,
        color: "#2238af",
        categoryTitle: "Sex and Nudity",
        categoryDescription: "Please select the option that best describes how sex or nudity feature in your film:",
        answerOptions: [
            { answerText: "Occasional nudity, but with no sexual context.", ageRating: "U" },
            { answerText: "Some nudity, with no sexual context. Sexual activity is implied, or innuendo features.", ageRating: "PG" },
            { answerText: "Some nudity, but in a sexual context it is brief and only implied.", ageRating: "12" },
            { answerText: "Sexual activity, but without strong detail.", ageRating: "15" },
            { answerText: "Sexual activity, with some strong detail. Repeated strong verbal references to sexual behaviour.", ageRating: "18" }
        ]
        },
        // Threat and Horror
        {
        id: 5,
        icon: <ThreatHorrorIcon fill="#FFF" />,
        color: "#fe346e",
        categoryTitle: "Threat and Horror",
        categoryDescription: "Please select the option that best describes how threat or horror feature in your film:",
        answerOptions: [
            { answerText: "Scary or potentially unsettling sequences are mild, brief and unlikely to upset children.", ageRating: "U" },
            { answerText: "Frightening sequences where characters are in danger are not prolonged or intense.", ageRating: "PG" },
            { answerText: "Moderate physical and psychological threat and horror sequences.", ageRating: "12" },
            { answerText: "Strong threat and horror, however there is not sustained focus on sadistic threat.", ageRating: "15" },
            { answerText: "Strong threat and horror feature regularly, and sadistic threat is more prolonged.", ageRating: "18" }
        ]
        },
        // Violence
        {
        id: 6,
        icon: <ViolenceIcon fill="#FFF" />,
        color: "#6102d2",
        categoryTitle: "Violence",
        categoryDescription: "Please select the option that best describes how violence features in your film:",
        answerOptions: [
            { answerText: "Violence is generally very mild, unrealistic or comedic.", ageRating: "U" },
            { answerText: "Violence is mild. Some moderate violence, without detail.", ageRating: "PG" },
            { answerText: "Moderate violence but it does not dwell on detail. No emphasis on injuries or blood.", ageRating: "12" },
            { answerText: "Some strong violence but no focus on the infliction of pain or injury. No strong gore.", ageRating: "15" },
            { answerText: "Strong or gory violence, with some focus on the infliction of pain or injury.", ageRating: "18" }
        ]
        }
    ];
  
    const colors = [
        // purple
        "#6102d2",
        // pink
        "#fe346e",
        // yellow
        "#fcdb00",
        // turqoise
        "#0cd68a",
        // blue
        "#2238af"
    ];
  
    const ratingsList = ["U", "PG", "12", "15", "18"];
  
    const addRatingItem = (category, ageRating) => {
        return {
        categoryTitle: category,
        categoryRating: ageRating
        };
    };

const Content = () => {

    let i = 0;
    const [currentTopic, setCurrentTopic] = useState(0);
    const [showRating, setShowRating] = useState(false);
    const [finalAgeRating, setFinalAgeRating] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [ratingColor, setRatingColor] = useState("");

    
    const handleAnswerOptionClick = (ageRating, category) => {
        setAnswers([...answers, addRatingItem(category, ageRating)]);

        const ratingRank = ratingsList.findIndex((rating) => rating === ageRating);

        const nextQuestion = currentTopic + 1;
        if (nextQuestion < topics.length) {
            setCurrentTopic(nextQuestion);
        } else {
            setShowRating(true);
        }

        if (finalAgeRating < ratingRank) {
            setFinalAgeRating(ratingRank);
        }
    };

    useEffect(() => {
    setRatingColor(colors[finalAgeRating])
    }, [finalAgeRating]);

    return (
    <>
    {showRating ? (
        <FinalRating finalAgeRating={finalAgeRating} ratingColor={ratingColor} ratingsList={ratingsList} answers={answers} />
        ) : (
        <Questions topics={topics} handleAnswerOptionClick={handleAnswerOptionClick} i={i} currentTopic={currentTopic} setCurrentTopic={setCurrentTopic} />
    )} 
    </>
    )
}

export default Content;