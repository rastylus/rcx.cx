import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


// need to get input number then generate random number for index and push phoneme to new array, then display array

function Dice() {
  const [count, setCount] = useState(0)

  const [roll, setRoll] = useState(0)

  const onChange = (event) => {
    setRoll(event.target.value);
  };


  const [pho1, setPho1] = useState(0)
//   const [pho2, setPho2] = useState(0)
//   const [pho3, setPho3] = useState(0)
  // const [phoKey1, setPhoKey1] = useState(0)
  // const [phoKey2, setPhoKey2] = useState(0)
  // const [phoKey3, setPhoKey3] = useState(0)


  const handleClick = () => {
    setPho1(randomNumberInRange(24, 42));
    // setRoll({num})
    // setPho2(randomNumberInRange(24, 42));
    // setPho3(randomNumberInRange(24, 42));
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

// const phoKey = [
//   // Consonants
//   "p (as in 'pat')", "b (as in 'bat')", "t (as in 'tap')", "d (as in 'dog')", "k (as in 'cat')", "g (as in 'go')", // Plosives
//   "m (as in 'man')", "n (as in 'no')", "ng (as in 'sing')", // Nasals
//   "f (as in 'fan')", "v (as in 'van')", "th (as in 'think')", "th (as in 'this')", "s (as in 'see')", "z (as in 'zoo')", "sh (as in 'she')", "zh (as in 'measure')", "h (as in 'hat')", // Fricatives
//   "ch (as in 'chop')", "j (as in 'jump')", // Affricates
//   "l (as in 'lamp')", "r (as in 'red')", // Liquids
//   "y (as in 'yes')", "w (as in 'we')", // Glides

//   // Vowels
//   "ee (as in 'see')", "i (as in 'sit')", "ay (as in 'say')", "e (as in 'bed')", "a (as in 'cat')", // Front vowels
//   "ah (as in 'father')", "aw (as in 'saw')", "uh (as in 'cup')", "aw (as in 'law')", // Back vowels
//   "oo (as in 'food')", "u (as in 'put')", // High back vowels
//   "uh (as in 'sofa')", "er (as in 'butter')", // Schwa and rhotacized schwa

//   // Diphthongs
//   "eye (as in 'my')", "ow (as in 'now')", "oy (as in 'boy')", "oh (as in 'go')", 
//   "ear (as in 'here')", "air (as in 'hair')", "ure (as in 'cure')"
// ];


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

console.log(count);
// console.log(rhymes);

// let rollNum = 7;
let phonemeArray = [];

for (let i = 0; i < roll; i++) { 
    let test = randomNumberInRange(22, 43);
    phonemeArray.push(phoKey[randomNumberInRange(22, 43)] + test);
    // newArray.push(setPho(phokey[i]));

  } 

  console.log(phonemeArray);


  return (
    <>
      {/* <h5>Rhyme Dice</h5> */}
      <Link to="/dice">dice</Link>
      <br />
      <Link to="/pages">pages</Link>
      <br />
      <p>roll for syllables, pick amount</p>
      <Link to="/">home</Link>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>   
        <button onClick={() => setCount(randomNumberInRange(0,42))}>
          phoneme is {phonemes[count]}
        </button>        */}

        <label for="rhymes">Number of syllables ({roll}): </label>
        {/* <input type="range" min="1" max="10" onChange={(e) => onChange(e)}/> */}
        <input type="range" min="1" max="10" onInput={onChange} />
        <br />
        <br />
        {/* <form>
  <input type="range" name="amountRange" min="0" max="20" value="0" oninput="this.form.amountInput.value=this.value" />
  <input type="number" name="amountInput" min="0" max="20" value="0" oninput="this.form.amountRange.value=this.value" />
    </form> */}

        <p>
          <button onClick={handleClick}> roll</button>
        </p>
        <br />
        <br />

        {/* <p>{phonemes[pho1]} - {phonemes[pho2]} - {phonemes[pho3]}</p> */}
        {/* <p>{phoKey[pho1]} - {phoKey[pho2]} - {phoKey[pho3]}</p> */}

        {/* <p>{phonemes[pho2]}</p>
        <p>{phonemes[pho3]}</p> */}
        {/* <p>{phonemeArray}</p> */}
        {phonemeArray.map((p) => (
          <>
            {p}
            <br />
            <br />
          </>
        ))}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default Dice
