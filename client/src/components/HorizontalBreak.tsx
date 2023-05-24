//can't use number type for width -> breaks after 12? unknown why
//specify width prop like tailwind: "w-32"

type HorizontalBreak = {
  width: string;
};

const HorizontalBreak = ({width}: HorizontalBreak) => {
  return (
    <hr
      className={`${width} h-1 mx-auto my-4 bg-purple-900 border-0 md:my-10 dark:bg-orange-300`}
    />
  );
};
export default HorizontalBreak;
