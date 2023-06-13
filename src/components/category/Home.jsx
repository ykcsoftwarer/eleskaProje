import Category from "./Category";

const Home = () => {
  const slides = [
    {
      image: "assest/homeGrid/pizza.jpg",
      title: "Pizza",
    },
    { image: "assest/homeGrid/salad.jpg", title: "Salata" },
    { image: "https://picsum.photos/400/500", title: "Pide" },
    { image: "https://picsum.photos/500/600", title: "Makarna" },
    { image: "https://picsum.photos/600/700", title: "Atışırmalık" },
    { image: "https://picsum.photos/700/800", title: "Izgara" },
    { image: "https://picsum.photos/800/900", title: "Tatlı" },
    { image: "https://picsum.photos/250/350", title: "İçecek" },
    { image: "https://picsum.photos/350/450", title: "Alkol" },
    { image: "https://picsum.photos/450/550", title: "Sabah Kahvaltısı" },
    { image: "https://picsum.photos/250/350", title: "Diyet Menü" },
    { image: "https://picsum.photos/260/460", title: "Film Akşamı" },
  ];
  return (
    <div className="flex justify-center">
      <div className="clear-both relative"></div>
      <Category slides={slides} />
    </div>
  );
};

export default Home;
