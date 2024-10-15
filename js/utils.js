
const numbers = [1, 2, 3, 4, 5];
let rating = null;

function createRatingComponent() {
    const main = document.getElementById('main');

    const image = document.createElement('img');
    image.src = "/images/icon-star.svg";
    image.alt = "A star icon";
    image.classList.add('rating__icon');

    const title = document.createElement('h1');
    title.textContent = "How did we do?";
    title.classList.add('rating__title');

    const description = document.createElement('p');
    description.textContent = "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
    description.classList.add('rating__description');

    const option_container = document.createElement('section');
    option_container.classList.add('option-container');
    option_container.classList.add('rating__options');

    numbers.forEach(number => {

        let option = document.createElement('button');

        option.classList.add('rating__option');
        option.textContent = number;

        option.addEventListener('click', () => {

            deselectAllOptions();

            rating = parseInt(option.textContent, 10);

            toggleOptionSelection(option);

        });

        option_container.appendChild(option);

    });

    const submit_button = document.createElement('button');
    submit_button.id = "btn-submit-rating";
    submit_button.classList.add('rating__submit');
    submit_button.textContent = "Submit";

    submit_button.addEventListener('click', () => {
        if (rating != null) {
            document.getElementById('main').innerHTML = "";
            createThankComponent();
        } else {
            return
        }
    });

    main.append(image,
        title,
        description,
        option_container,
        submit_button);
}

function createThankComponent(rating) {
    const main = document.getElementById('main');

    const image = document.createElement('img');
    image.src = "/images/illustration-thank-you.svg";
    image.alt = "An illustration of thank you";
    image.classList.add('thank-you__image');

    const recap = document.createElement('p');
    recap.textContent = `You selected ${rating} out of ${numbers.length}`;
    recap.classList.add('thank-you__recap');

    const title = document.createElement('h1');
    title.textContent = "Thank you!";
    title.classList.add('thank-you__title');

    const description = document.createElement('p');
    description.textContent = "We appreciate you taking the time to give a rating. If you ever need more support,don’t hesitate to get in touch!";
    description.classList.add('thank-you__description');

    main.append(image, recap, title, description);
}


function toggleOptionSelection(option) {
    option.classList.toggle('rating__option--selected');
}

function deselectAllOptions() {
    const options = document.querySelectorAll('.rating__option');

    options.forEach(option => {
        option.classList.remove('rating__option--selected');
    });
}


export { createRatingComponent, createThankComponent }