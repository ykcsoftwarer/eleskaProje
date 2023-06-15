import Category from "./Category";

const Home = () => {
  const slides = [
    {
      image: "assest/homeGrid/pizza.jpg",
      title: "Pizza",
    },
    { image: "assest/homeGrid/salad.jpg", title: "Salata" },
    { image: "assest/homeGrid/pide.jpg", title: "Pide" },
    { image: "assest/homeGrid/makarna.jpg", title: "Makarna" },
    { image: "assest/homeGrid/snack.jpg", title: "Atışırmalık" },
    { image: "assest/homeGrid/bq.jpg", title: "Izgara" },
    { image: "assest/homeGrid/sweet.jpg", title: "Tatlı" },
    { image: "assest/homeGrid/drink.jpeg", title: "İçecek" },
    { image: "assest/homeGrid/alcohol.jpg", title: "Alkol" },
    { image: "assest/homeGrid/breakfast.jpg", title: "Sabah Kahvaltısı" },
    { image: "assest/homeGrid/diyet.jpg", title: "Diyet Menü" },
    { image: "assest/homeGrid/movie-night.jpg", title: "Film Akşamı" },
  ];
  return (
    <div className="flex justify-center">
      <div className="clear-both relative"></div>
      <Category slides={slides} />
    </div>
  );
};

export default Home;
