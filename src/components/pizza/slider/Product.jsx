import Card from "./Card";

const Products = () => {
  const slides = [
    { image: "https://picsum.photos/200/300", title: "This is title 1" },
    { image: "https://picsum.photos/300/400", title: "This is title 2" },
    { image: "https://picsum.photos/400/500", title: "This is title 3" },
    { image: "https://picsum.photos/500/600", title: "This is title 4" },
    { image: "https://picsum.photos/600/700", title: "This is title 5" },
    { image: "https://picsum.photos/700/800", title: "This is title 6" },
    { image: "https://picsum.photos/800/900", title: "This is title 7" },
    { image: "https://picsum.photos/250/350", title: "This is title 8" },
    { image: "https://picsum.photos/350/450", title: "This is title 9" },
    { image: "https://picsum.photos/450/550", title: "This is title 10" },
  ];
  return (
    <div  className="abcd ">
      <Card slides={slides} />
    </div>
  );
};

export default Products;
