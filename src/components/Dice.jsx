// import React from 'react'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'


// function Dice() {

//   const [roll, setRoll] = useState(0)

//   const onChange = (event) => {
//     setRoll(event.target.value);
//   };


//   const [pho1, setPho1] = useState(0)


//   const handleClick = () => {
//     setPho1(randomNumberInRange(24, 42));
//     // setPho3(randomNumberInRange(24, 42));
//     // setPhoKey1(randomNumberInRange(0, 42));
//     // setPho2(randomNumberInRange(0, 42));
//     // setPho3(randomNumberInRange(0, 42));
//   };

//   const randomNumberInRange = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

// //   const phonemes = [
// //     // Consonants
// //     "p", "b", "t", "d", "k", "g", // Plosives
// //     "m", "n", "ŋ", // Nasals
// //     "f", "v", "θ", "ð", "s", "z", "ʃ", "ʒ", "h", // Fricatives
// //     "tʃ", "dʒ", // Affricates
// //     "l", "r", // Liquids
// //     "j", "w", // Glides

// //     // Vowels
// //     "i", "ɪ", "e", "ɛ", "æ", // Front vowels
// //     "ɑ", "ɒ", "ʌ", "ɔ", "ɒ", // Back vowels
// //     "u", "ʊ", // High back vowels
// //     "ə", "ɚ", // Schwa and rhotacized schwa

// //     // Diphthongs
// //     "aɪ", "aʊ", "ɔɪ", "eɪ", "oʊ"
// // ];

// const phonemes = [
//   // Consonants
//   "p", "b", "t", "d", "k", "g", // Plosives
//   "m", "n", "ŋ", // Nasals
//   "f", "v", "θ", "ð", "s", "z", "ʃ", "ʒ", "h", // Fricatives
//   "tʃ", "dʒ", // Affricates
//   "l", "r", // Liquids
//   "j", "w", // Glides

//   // Vowels
//   "i", "ɪ", "eɪ", "ɛ", "æ", // Front vowels
//   "ɑ", "ɒ", "ʌ", "ɔ", // Back vowels
//   "u", "ʊ", // High back vowels
//   "ə", "ɚ", // Schwa and rhotacized schwa

//   // Diphthongs
//   "aɪ", "aʊ", "ɔɪ", "oʊ", 
//   "ɪə", "eə", "ʊə"
// ];

// // const phoKey = [
// //   // Consonants
// //   "p (as in 'pat')", "b (as in 'bat')", "t (as in 'tap')", "d (as in 'dog')", "k (as in 'cat')", "g (as in 'go')", // Plosives
// //   "m (as in 'man')", "n (as in 'no')", "ng (as in 'sing')", // Nasals
// //   "f (as in 'fan')", "v (as in 'van')", "th (as in 'think')", "th (as in 'this')", "s (as in 'see')", "z (as in 'zoo')", "sh (as in 'she')", "zh (as in 'measure')", "h (as in 'hat')", // Fricatives
// //   "ch (as in 'chop')", "j (as in 'jump')", // Affricates
// //   "l (as in 'lamp')", "r (as in 'red')", // Liquids
// //   "y (as in 'yes')", "w (as in 'we')", // Glides

// //   // Vowels
// //   "ee (as in 'see')", "i (as in 'sit')", "ay (as in 'say')", "e (as in 'bed')", "a (as in 'cat')", // Front vowels
// //   "ah (as in 'father')", "aw (as in 'saw')", "uh (as in 'cup')", "aw (as in 'law')", // Back vowels
// //   "oo (as in 'food')", "u (as in 'put')", // High back vowels
// //   "uh (as in 'sofa')", "er (as in 'butter')", // Schwa and rhotacized schwa

// //   // Diphthongs
// //   "eye (as in 'my')", "ow (as in 'now')", "oy (as in 'boy')", "oh (as in 'go')", 
// //   "ear (as in 'here')", "air (as in 'hair')", "ure (as in 'cure')"
// // ];


// const phoKey = [
//     // Consonants
//     "p (pat)", "b (bat)", "t (tap)", "d (dog)", "k (cat)", "g (go)", // Plosives
//     "m (man)", "n (no)", "ng (sing)", // Nasals
//     "f (fan)", "v (van)", "th (think)", "th (this)", "s (see)", "z (zoo)", "sh (she)", "zh (measure)", "h (hat)", // Fricatives
//     "ch (chop)", "j (jump)", // Affricates
//     "l (lamp)", "r (red)", // Liquids
//     "y (yes)", "w (we)", // Glides

//     // Vowels
//     "ee (see)", "i (sit)", "ay (say)", "e (bed)", "a (cat)", // Front vowels
//     "ah (father)", "aw (saw)", "uh (cup)", "aw (law)", // Back vowels
//     "oo (food)", "u (put)", // High back vowels
//     "uh (sofa)", "er (butter)", // Schwa and rhotacized schwa

//     // Diphthongs
//     "eye (my)", "ow (now)", "oy (boy)", "oh (go)", 
//     "ear (here)", "air (hair)", "ure (cure)"
// ];


// let phonemeArray = [];

// for (let i = 0; i < roll; i++) { 
//     let test = randomNumberInRange(22, 43);
//     phonemeArray.push(phoKey[randomNumberInRange(22, 43)] + test);
//   } 

//   console.log(phonemeArray);


//   return (
//     <>
//       <Link to="/dice">dice</Link>
//       <br />
//       <Link to="/pages">pages</Link>
//       <br />
//       <Link to="/">home</Link>
//       <br />
//       <p>roll for syllables, pick amount</p>
//       <div className="card">
//         <label for="rhymes">Number of syllables ({roll}): </label>
//         <input type="range" min="1" max="10" onInput={onChange} defaultValue="3"/>
//         <br />
//         <br />

//         <p>
//           <button onClick={handleClick}> roll</button>
//         </p>
//         <br />
//         <br />
//         {phonemeArray.map((p) => (
//           <>
//             {p}
//             <br />
//             <br />
//           </>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Dice
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dice() {
  const [roll, setRoll] = useState(3); // Initial state set to 3
  const [phonemeArray, setPhonemeArray] = useState([]);

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
    "p (pat)", "b (bat)", "t (tap)", "d (dog)", "k (cat)", "g (go)", // Plosives
    "m (man)", "n (no)", "ng (sing)", // Nasals
    "f (fan)", "v (van)", "th (think)", "th (this)", "s (see)", "z (zoo)", "sh (she)", "zh (measure)", "h (hat)", // Fricatives
    "ch (chop)", "j (jump)", // Affricates
    "l (lamp)", "r (red)", // Liquids
    "y (yes)", "w (we)", // Glides

    // Vowels
    "ee (see)", "i (sit)", "ay (say)", "e (bed)", "a (cat)", // Front vowels
    "ah (father)", "aw (saw)", "uh (cup)", "aw (law)", // Back vowels
    "oo (food)", "u (put)", // High back vowels
    "uh (sofa)", "er (butter)", // Schwa and rhotacized schwa

    // Diphthongs
    "eye (my)", "ow (now)", "oy (boy)", "oh (go)", 
    "ear (here)", "air (hair)", "ure (cure)"
  ];

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    let newPhonemeArray = [];
    for (let i = 0; i < roll; i++) { 
      const randomIndex = randomNumberInRange(0, phonemes.length - 1);
      newPhonemeArray.push(phoKey[randomIndex]);
    }
    setPhonemeArray(newPhonemeArray);
  };

  const onChange = (event) => {
    setRoll(event.target.value);
  };

  return (
    <>
      <Link to="/dice">dice</Link>
      <br />
      <Link to="/pages">pages</Link>
      <br />
      <Link to="/">home</Link>
      <br />
      <p>roll for syllables, pick amount</p>
      <div className="card">
        <label htmlFor="rhymes">Number of syllables ({roll}): </label>
        <input type="range" min="1" max="10" onInput={onChange} value={roll} />
        <br />
        <br />

        <p>
          <button onClick={handleClick}>Roll</button>
        </p>
        <br />
        <br />
        {phonemeArray.map((p, index) => (
          <React.Fragment key={index}>
            {p}
            <br />
            <br />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Dice;