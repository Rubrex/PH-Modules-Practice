const noPhoneFound = document.getElementById("no-phone-found");

const loadPhones = async (search, dataLimit) => {
  const searchAPI = `https://openapi.programming-hero.com/api/phones?search=${search}`;
  const fetData = await fetch(searchAPI);
  const response = await fetData.json();
  displayPhones(response.data, dataLimit);
};

const displayPhones = (phones, dataLimit) => {
  const cardsParent = document.getElementById("cards-parent");
  //   Clear devices
  cardsParent.textContent = "";
  //   Display 6 Phones only

  const showAll = document.getElementById("show-all");
  if (dataLimit && phones.length > 6) {
    phones = phones.slice(0, 6);
    showAll.classList.remove("hidden");
  } else {
    showAll.classList.add("hidden");
  }

  // Phones Found
  isLoading(false);

  if (phones.length === 0) {
    noPhoneFound.classList.remove("hidden");
  } else {
    noPhoneFound.classList.add("hidden");
  }

  phones.forEach((phone) => {
    const div = document.createElement("div");
    div.classList.add("justify-self-center");
    div.innerHTML = `
    <div class="card w-96 bg-base-100 glass card-bordered ">
        <figure class="px-1 pt-6">
        <img
            src="${phone.image}"
            alt="Shoes"
            class="rounded-xl"
        />
        </figure>
    <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.brand}</h2>
        <p>${phone.phone_name}</p>
        <div class="card-actions">
            <button class="btn btn-outline btn-success font-bold text-md">Details</button>
        </div>
        </div>
    </div>
    `;

    cardsParent.appendChild(div);
    console.log(phone);
  });
};
// Process
const processSearch = (dataLimit) => {
  const searchInputValue = document.getElementById("search-input").value;
  loadPhones(searchInputValue, dataLimit);
  isLoading(true);
  noPhoneFound.classList.add("hidden");
};
// Search Phones
document.getElementById("search-btn").addEventListener("click", () => {
  processSearch(10);
});
// isLoading
const isLoading = (loading) => {
  const loadingSection = document.getElementById("loading");
  loading
    ? loadingSection.classList.remove("hidden")
    : loadingSection.classList.add("hidden");
};
// Load More
document.getElementById("show-all").addEventListener("click", () => {
  processSearch();
});

loadPhones();
