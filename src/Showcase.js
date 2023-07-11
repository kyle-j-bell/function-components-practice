//Imports images from their file paths.
import typhlosion from "../src/images/typhlosion.png";
import bulbasaur from "../src/images/bulbasaur.jpg";

//Stores CSS styling for images as an object for later use.
const imgStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%"
};

//This is a function component for displaying information about a Pokemon.
function Typhlosion() {
  //Ostensibly just the Pokemon's name.
  const favPokemon = "Typhlosion";
  //Saves the Pokemon's type and one learnable move as keys in an object.
  const pokeStats = {
    type: "Fire",
    move: "Flamethrower"
  };
  //Taking the above variables and putting them all together in JSX.
  return (
    //div is used to contain all of the individual JSX elements.  The name is displayed using h1, the image is embedded and styled inline, and a comment above its stats is displayed using h2.
    <div className="typhlosion">
      <h1>{favPokemon}</h1>
      <img src={typhlosion} alt="Typhlosion" style={imgStyle} />
      <h2>
        {favPokemon}'s type is{" "}
        <span class="typhlosionType">{pokeStats.type}</span> and one of their
        moves is <span class="typhlosionMove">{pokeStats.move}</span>.
      </h2>
    </div>
  );
}

//Identical to the above function, but with the Pokemon Bulbasaur's information.
function Bulbasaur() {
  const favPokemon = "Bulbasaur";
  const pokeStats = {
    type: "Grass",
    move: "Vine Whip"
  };
  return (
    <div className="bulbasaur">
      <h1>{favPokemon}</h1>
      <img src={bulbasaur} alt="Bulbasaur" class="img" style={imgStyle} />
      <h2>
        {favPokemon}'s type is{" "}
        <span class="bulbasaurType">{pokeStats.type}</span> and one of their
        moves is <span class="bulbasaurMove">{pokeStats.move}</span>.
      </h2>
    </div>
  );
}

//Exports both functions.
export { Typhlosion, Bulbasaur };
