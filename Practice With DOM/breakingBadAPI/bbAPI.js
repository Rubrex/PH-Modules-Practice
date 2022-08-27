const cardsContainer = document.getElementById("cards-container");

const apiLink = "https://www.breakingbadapi.com/api/characters?limit=50";

fetch(apiLink)
  .then((res) => res.json())
  .then((data) => character(data));

function character(data) {
  data.forEach((person) => {
    const div = document.createElement("div");
    div.classList.add(
      "border",
      "shadow-md",
      "rounded-sm",
      "bg-cardBg",
      "w-4/5",
      "sm:w-full",
      "mx-auto"
    );
    div.innerHTML = `
      <!-- Card Image -->
      <div>
        <img
          src=${person.img}
          alt=""
          class="rounded-t-md w-full h-96 object-cover"
        />
      </div>
      <!--Card description -->
      <div class="py-6 px-5 text-primaryTextColor ">
        <h2 class="text-xl font-bold">
          ${person.name} 
        </h2>
        <span class="text-xl font-bold text-slate-700">(
          ${person.nickname})</span>
        <p class="text-md font-semibold mt-2">
          Birthday: <span>${person.birthday}</span>
        </p>
        <p class="text-md font-semibold">
          Portrayed: <span>${person.portrayed}</span>
        </p>
        <p class="text-md font-semibold">Occupation:</p>
        <ul class="list-disc list-inside" >
            <li>${person.occupation[0]}</li>
            <li>${
              person.occupation[1] === undefined ? " " : person.occupation[1]
            }</li>
          
        </ul>
        <p class="text-md font-semibold">
          Status: <span>${person.status}</span>
        </p>
  
        <p class="text-md font-semibold">
          Category: <span>${person.category}</span>
        </p>
      </div>
      `;
    cardsContainer.appendChild(div);
  });
}
