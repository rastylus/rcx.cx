import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


function Dice() {
  const [count, setCount] = useState(0)
  const [pho1, setPho1] = useState(0)
  const [pho2, setPho2] = useState(0)
  const [pho3, setPho3] = useState(0)
  // const [phoKey1, setPhoKey1] = useState(0)
  // const [phoKey2, setPhoKey2] = useState(0)
  // const [phoKey3, setPhoKey3] = useState(0)


  const handleClick = () => {
    setPho1(randomNumberInRange(0, 42));
    setPho2(randomNumberInRange(0, 42));
    setPho3(randomNumberInRange(0, 42));
    // setPhoKey1(randomNumberInRange(0, 42));
    // setPho2(randomNumberInRange(0, 42));
    // setPho3(randomNumberInRange(0, 42));
  };

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

//   const phonemes = [
//     // Consonants
//     "p", "b", "t", "d", "k", "g", // Plosives
//     "m", "n", "ŋ", // Nasals
//     "f", "v", "θ", "ð", "s", "z", "ʃ", "ʒ", "h", // Fricatives
//     "tʃ", "dʒ", // Affricates
//     "l", "r", // Liquids
//     "j", "w", // Glides

//     // Vowels
//     "i", "ɪ", "e", "ɛ", "æ", // Front vowels
//     "ɑ", "ɒ", "ʌ", "ɔ", "ɒ", // Back vowels
//     "u", "ʊ", // High back vowels
//     "ə", "ɚ", // Schwa and rhotacized schwa

//     // Diphthongs
//     "aɪ", "aʊ", "ɔɪ", "eɪ", "oʊ"
// ];

const phonemes = [
  // Consonants
  "p", "b", "t", "d", "k", "g", // Plosives
  "m", "n", "ŋ", // Nasals
  "f", "v", "θ", "ð", "s", "z", "ʃ", "ʒ", "h", // Fricatives
  "tʃ", "dʒ", // Affricates
  "l", "r", // Liquids
  "j", "w", // Glides

  // Vowels
  "i", "ɪ", "eɪ", "ɛ", "æ", // Front vowels
  "ɑ", "ɒ", "ʌ", "ɔ", // Back vowels
  "u", "ʊ", // High back vowels
  "ə", "ɚ", // Schwa and rhotacized schwa

  // Diphthongs
  "aɪ", "aʊ", "ɔɪ", "oʊ", 
  "ɪə", "eə", "ʊə"
];

const phoKey = [
  // Consonants
  "p (as in 'pat')", "b (as in 'bat')", "t (as in 'tap')", "d (as in 'dog')", "k (as in 'cat')", "g (as in 'go')", // Plosives
  "m (as in 'man')", "n (as in 'no')", "ng (as in 'sing')", // Nasals
  "f (as in 'fan')", "v (as in 'van')", "th (as in 'think')", "th (as in 'this')", "s (as in 'see')", "z (as in 'zoo')", "sh (as in 'she')", "zh (as in 'measure')", "h (as in 'hat')", // Fricatives
  "ch (as in 'chop')", "j (as in 'jump')", // Affricates
  "l (as in 'lamp')", "r (as in 'red')", // Liquids
  "y (as in 'yes')", "w (as in 'we')", // Glides

  // Vowels
  "ee (as in 'see')", "i (as in 'sit')", "ay (as in 'say')", "e (as in 'bed')", "a (as in 'cat')", // Front vowels
  "ah (as in 'father')", "aw (as in 'saw')", "uh (as in 'cup')", "aw (as in 'law')", // Back vowels
  "oo (as in 'food')", "u (as in 'put')", // High back vowels
  "uh (as in 'sofa')", "er (as in 'butter')", // Schwa and rhotacized schwa

  // Diphthongs
  "eye (as in 'my')", "ow (as in 'now')", "oy (as in 'boy')", "oh (as in 'go')", 
  "ear (as in 'here')", "air (as in 'hair')", "ure (as in 'cure')"
];

console.log(count);

let rollNum = 5;

// while loop <= chosen nunber of syllables push to new array for display
// while(i<rollNum) {
//   console.log(rollNum);
//   i++;
// }


  return (
    <>
      <h1>Rhyme Dice</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>   
        <button onClick={() => setCount(randomNumberInRange(0,42))}>
          phoneme is {phonemes[count]}
        </button>       
      <p>
        <button onClick={handleClick}> roll
        </button>  
      </p>    



        <p>{phonemes[pho1]} - {phonemes[pho2]} - {phonemes[pho3]}</p>
        <p>{phoKey[pho1]} - {phoKey[pho2]} - {phoKey[pho3]}</p>
        {/* <p>{phonemes[pho2]}</p>
        <p>{phonemes[pho3]}</p> */}

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Dice
