import React, { useState, useEffect, createContext } from 'react';
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
    color: "#c940ea",
    categoryTitle: "Dangerous Behaviour",
    categoryDescription: "Please select the option that best describes how dangerous behaviour features in your film:",
    answerOptions: [
        { answerText: "It is disapproved of, and weapons are not emphasised.", ageRating: "U", value: 1},
        { answerText: "Weapons or mildly dangerous behaviour are featured, but are not glamorised.",
        ageRating: "PG", value: 2 },
        { answerText: "Weapons or moderately dangerous behaviour feature, but are not glamorised.",
        ageRating: "12", value: 3 },
        { answerText: "Dangerous behaviour (for example, suicide or the use of weapons) features but without detail.", ageRating: "15", value: 4 },
        { answerText: "Behaviour such as self-harm is shown, and with gory detail. If weapons feature, they are used regularly.", ageRating: "18", value: 5 }
    ]
    },
    // Discrimination
    {
    id: 1,
    icon: <DiscriminationIcon fill="#FFF" />,
    color: "#ff5f99",
    categoryTitle: "Discrimination",
    categoryDescription: "Please select the option that best describes how discrimination features in your film:",
    answerOptions: [
        { answerText: "No discriminatory language.", ageRating: "U", value: 1},
        { answerText: "It features a small amount but is disapproved of and is contextually appropriate.", ageRating: "PG", value: 2 },
        { answerText: "Aggressive discriminatory language or behaviour features but is clearly condemned.", ageRating: "12", value: 3 },
        { answerText: "Some racist, homophobic or other discriminatory themes and language feature on occasion.", ageRating: "15", value: 4 },
        { answerText: "Discriminatory language or behaviour features regularly throughout the film.", ageRating: "18", value: 5 }
    ]
    },
    // Drugs
    {
    id: 2,
    icon: <DrugsIcon fill="#FFF" />,
    color: "#ff9057",
    categoryTitle: "Drugs",
    categoryDescription: "Please select the option that best describes how drugs feature in your film:",
    answerOptions: [
        { answerText: "None featured, or clear anti-drug themes.", ageRating: "U", value: 1},
        { answerText: "Some very mild references.", ageRating: "PG", value: 2 },
        { answerText: "Some drug use shown, but it is infrequent.", ageRating: "12", value: 3 },
        { answerText: "Drug taking is shown, but it does promote or encourage drug misuse.", ageRating: "15", value: 4 },
        { answerText: "Strong, frequent drug use features throughout.", ageRating: "18", value: 5 }
    ]
    },
    // Language
    {
    id: 3,
    icon: <LanguageIcon fill="#FFF" />,
    color: "#febd35",
    categoryTitle: "Bad Language",
    categoryDescription: "Please select the option that best describes how bad language features in your film:",
    answerOptions: [
        { answerText: "Infrequent use of very mild bad language.", ageRating: "U", value: 1},
        { answerText: "Mild bad language only.", ageRating: "PG", value: 2 },
        { answerText: "Moderate bad language, with rare instances of strong language.", ageRating: "12", value: 3 },
        { answerText: "Strong languages features with rare instances of very strong language.", ageRating: "15", value: 4 },
        { answerText: "Very strong language features frequently.", ageRating: "18", value: 5 }
    ]
    },
    // Sex and Nudity
    {
    id: 4,
    icon: <SexNudityIcon fill="#FFF"/>,
    color: "#3598fe",
    categoryTitle: "Sex and Nudity",
    categoryDescription: "Please select the option that best describes how sex or nudity feature in your film:",
    answerOptions: [
        { answerText: "Occasional nudity, but with no sexual context.", ageRating: "U", value: 1},
        { answerText: "Some nudity, with no sexual context. Sexual activity is implied, or innuendo features.", ageRating: "PG", value: 2 },
        { answerText: "Some nudity, but in a sexual context it is brief and only implied.", ageRating: "12", value: 3 },
        { answerText: "Sexual activity, but without strong detail.", ageRating: "15", value: 4 },
        { answerText: "Sexual activity, with some strong detail. Repeated strong verbal references to sexual behaviour.", ageRating: "18", value: 5 }
    ]
    },
    // Threat and Horror
    {
    id: 5,
    icon: <ThreatHorrorIcon fill="#FFF" />,
    color: "#c940ea",
    categoryTitle: "Threat and Horror",
    categoryDescription: "Please select the option that best describes how threat or horror feature in your film:",
    answerOptions: [
        { answerText: "Scary or potentially unsettling sequences are mild, brief and unlikely to upset children.", ageRating: "U", value: 1},
        { answerText: "Frightening sequences where characters are in danger are not prolonged or intense.", ageRating: "PG", value: 2 },
        { answerText: "Moderate physical and psychological threat and horror sequences.", ageRating: "12", value: 3 },
        { answerText: "Strong threat and horror, however there is not sustained focus on sadistic threat.", ageRating: "15", value: 4 },
        { answerText: "Strong threat and horror feature regularly, and sadistic threat is more prolonged.", ageRating: "18", value: 5 }
    ]
    },
    // Violence
    {
    id: 6,
    icon: <ViolenceIcon fill="#FFF" />,
    color: "#ff5f99",
    categoryTitle: "Violence",
    categoryDescription: "Please select the option that best describes how violence features in your film:",
    answerOptions: [
        { answerText: "Violence is generally very mild, unrealistic or comedic.", ageRating: "U", value: 1},
        { answerText: "Violence is mild. Some moderate violence, without detail.", ageRating: "PG", value: 2 },
        { answerText: "Moderate violence but it does not dwell on detail. No emphasis on injuries or blood.", ageRating: "12", value: 3 },
        { answerText: "Some strong violence but no focus on the infliction of pain or injury. No strong gore.", ageRating: "15", value: 4 },
        { answerText: "Strong or gory violence, with some focus on the infliction of pain or injury.", ageRating: "18", value: 5 }
    ]
    }
];

const colors = [
"#c940ea", // Purple
"#ff5f99", // Pink
"#ff9057", // Orange
"#febd35", // Yellow
"#3598fe", // Blue
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
        console.log(ratingRank);

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

    const handleBackButton = () => {
        setCurrentTopic(currentTopic - 1);
    }

    useEffect(() => {
    setRatingColor(colors[finalAgeRating]);
    }, [finalAgeRating]);

    useEffect(() => {
        console.log(answers);
        }, [answers]);

    return (
    <>
    {showRating ? (
        <FinalRating finalAgeRating={finalAgeRating} ratingColor={ratingColor} ratingsList={ratingsList} answers={answers} />
        ) : (
        <main className="form-container">
        <div className="w-30">
                <div className="pagination">
                <h2>Topics</h2>
                { topics.map((topic) => ( 
                    <button key={topic.id} className="item" style={ (currentTopic === topic.id) ? { backgroundColor: topic.color, color: '#ffffff'} : {} }
                    // onClick={() => setCurrentTopic(topic.id)}
                    >
                    { topic.categoryTitle }
                    </button>
                )) }
                </div>
            </div>
            <div className="w-70">
                <Questions topics={topics} handleAnswerOptionClick={handleAnswerOptionClick} handleBackButton={handleBackButton} i={i} currentTopic={currentTopic} setCurrentTopic={setCurrentTopic} answers={answers} />
            </div>
        </main>
    )} 
    </>
    )
}

export default Content;