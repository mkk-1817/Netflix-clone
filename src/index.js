let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelector('.slides');
        const slideWidth = document.querySelector('.slide').offsetWidth;
        currentSlide = index;
        slides.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    function prevSlide() {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    }

    function nextSlide() {
        const totalSlides = document.querySelectorAll('.slide').length;
        if (currentSlide < totalSlides - 1) {
            showSlide(currentSlide + 1);
        }
    }

    $(document).ready(function () {
        var slideIndex = 0;
        var $slider = $('.slider2');

        function showNextSlide() {
            slideIndex = 1 - slideIndex;
            var translateValue = -slideIndex * 100 + '%';
            $slider.css('transform', 'translateX(' + translateValue + ')');
        }

        setInterval(showNextSlide, 5000);
    });
    function toggleAnswer(questionNumber) {
        var answerId = 'answer' + questionNumber;
        var answerElement = document.getElementById(answerId);
        var questionElement = answerElement.previousElementSibling;

        if (answerElement.style.display === 'block') {
            answerElement.style.display = 'none';
            questionElement.classList.remove('active');
        } else {
            answerElement.style.display = 'block';
            questionElement.classList.add('active');
        }
    }
    function openLink(url) {
        window.open(url, '_blank');
    }
    function changeLanguage() {
        var selectedLanguage = document.getElementById("dropdown").value;

        document.title = getTranslation(selectedLanguage, "Netflix-Clone - Watch Movies, TV Shows online");

        document.getElementById("title").innerText = getTranslation(selectedLanguage, "For Exciting movies and TV Shows!!");

    }
    function getTranslation(language, text) {
        switch (language) {
            case "hi":
                return "Hindi Translation";
            case "ta":
                return "Tamil Translation";
            default:
                return text;
        }
    }